import React from 'react'
import axios from 'axios'
import {Page, Header, Sidebar, Main, CriarPlaylist, LabelCriarPlaylist, InputCriaPlaylist, 
  BotaoCriaPlaylist, ListaPlaylists, LabelPlaylists, CadaPlaylist, LinhaPlaylist, BotaoHome, 
  BotaoDeletar, PlaylistNome, LinhaMusica, LinhaMusicaArtista, QuebraEntreMusicas, TituloAdicionar,
} from './components/styles'

const axiosConfig = {
  headers: {
    Authorization: "guilherme-paiva-turing"
  }
}

export class App extends React.Component {
  state = {
    playlists: [],
    musicas: [],
    valorInputPlaylist:"",
    tituloPlaylist: 'Teste',
    mostraHome: true,
  }

  componentDidMount = () => {
    this.pegarPlaylists()
  }

  adicionaPlaylist = () => {
    const body = {
      name: this.state.valorInputPlaylist
    }
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body, axiosConfig
    )
    .then(() => {
      this.setState({valorInputPlaylist: ""})
      this.pegarPlaylists()
    })
    .catch((error) => {
      alert("Falha ao criar playlist")
      console.log(error.message)
    })
  }

  pegarPlaylists = () => {
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      axiosConfig
    )
    .then((response) => {
      this.setState({playlists: response.data.result.list})
    })
    .catch((error) => {
      alert("Falha ao pegar playlists")
      console.log(error.message)
    })
  }

  deletarPlaylist = (playlistid) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistid}`,
      axiosConfig
    )
    .then(() => {
      this.pegarPlaylists()
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  doisEmUm = (playlist) => {
    
      this.setState({mostraHome: false})
      axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`,
        axiosConfig
      )
      .then((response) => {
        this.setState({musicas: response.data.result.tracks})
      })
      .catch((error) => {
        alert("Falha ao exibir músicas da playlist")
        console.log(error.message)
      })
    

    this.setState({tituloPlaylist: playlist.name})
  }

  

  onChangeInputPlaylist = event => {
    this.setState({valorInputPlaylist: event.target.value})
  }

  render(){
    console.log(this.state.tituloPlaylist)
    const trocaTela = () => {
      if (this.state.mostraHome){
        return(
          <p>Bem vindo ao Labefy, selecione ao lado a playlist que deseja ouvir</p>
        )}else{
          return(
            <div>
            <PlaylistNome>{this.state.tituloPlaylist}</PlaylistNome>
            <LinhaMusicaArtista>M Ú S I C A<span>A R T I S T A</span></LinhaMusicaArtista>
            <hr />
            {this.state.musicas.map((musica) => {
              return(
                  <div><LinhaMusica key={musica.id}>
                      {musica.name}<span>{musica.artist}</span>
                  </LinhaMusica><QuebraEntreMusicas />
                  </div>
              )
          })}
          <div>
              <TituloAdicionar>Adicionar músicas à playlist:</TituloAdicionar>
              <input placeholder="Nome da Música"></input>
              <input placeholder="Nome do Artista"></input>
              <input placeholder="Link da Música"></input>
              <button>Adicionar Música</button>
            </div>
          </div>
          ) 
       }
     } 

     return (
      <Page>
        <Header>Labefy</Header>
        <Sidebar>
          <BotaoHome onClick={() => {this.setState({mostraHome: true})}}>Home</BotaoHome>
          <ListaPlaylists>
            <LabelPlaylists>Playlists</LabelPlaylists>
            <CadaPlaylist>
              {this.state.playlists.map((playlist) => {
                return (
                <LinhaPlaylist onClick={() => {this.doisEmUm(playlist)}} key={playlist.id}>
                  {playlist.name}
                <BotaoDeletar onClick={() => {this.deletarPlaylist(playlist.id)}}>x</BotaoDeletar>
                </LinhaPlaylist>
              )})}
            </CadaPlaylist>
          </ListaPlaylists>
          <CriarPlaylist>
            <LabelCriarPlaylist>Criar nova playlist:</LabelCriarPlaylist>
            <InputCriaPlaylist 
            placeholder="Nome da Playlist"
            onChange={this.onChangeInputPlaylist}
            value={this.state.valorInputPlaylist}
            />
            <BotaoCriaPlaylist 
            onClick={this.adicionaPlaylist}>Criar</BotaoCriaPlaylist>
          </CriarPlaylist>
        </Sidebar>
        <Main>
          {trocaTela()}
            
        </Main>
      </Page>
    );
  }
}

export default App;
