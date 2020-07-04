import React from 'react'
import axios from 'axios'
import {Page, Header, Sidebar, Main, CriarPlaylist, LabelCriarPlaylist, InputCriaPlaylist, 
  BotaoCriaPlaylist, ListaPlaylists, LabelPlaylists, CadaPlaylist, LinhaPlaylist, BotaoHome, 
  BotaoDeletar, PlaylistNome, LinhaMusica, LinhaMusicaArtista, QuebraEntreMusicas, TituloAdicionar,
  BotaoPlayPause} from './components/styles'

const axiosConfig = {
  headers: {
    Authorization: "guilherme-paiva-turing"
  }
}

export class App extends React.Component {
  state = {
    playlists: [],
    musicas: [],
    valorInputPlaylist:'',
    tituloPlaylist: '',
    mostraHome: true,
    inputMusica: '',
    inputArtista: '',
    inputURL: '',
    idPlaylist: '',
    musicaTocando: false,
    qualMusica: '',
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
        this.setState({idPlaylist: playlist.id})
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

  onChangeInputMusica = event => {
    this.setState({inputMusica: event.target.value})
  }

  onChangeInputArtista = event => {
    this.setState({inputArtista: event.target.value})
  }

  onChangeInputURL = event => {
    this.setState({inputURL: event.target.value})
  }

  adicionaMusica = () => {
    const body = {
      name: this.state.inputMusica,
      artist: this.state.inputArtista,
      url: this.state.inputURL
    }
    axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`,
      body, axiosConfig
    )
    .then(() => {
      this.setState({inputMusica: "", inputArtista: "", inputURL: ""})
      axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`,
        axiosConfig
      )
      .then((response) => {
        this.setState({musicas: response.data.result.tracks})
      })
      .catch((error) => {
        alert("Falha ao exibir músicas da playlist")
        console.log(error.message)
      })
    })
    .catch((error) => {
      alert("Falha ao adicionar música")
      console.log(error.message)
    })
  }

  deletarMusica = (musicaid) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks/${musicaid}`,
      axiosConfig
    )
    .then(() => {
      axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`,
        axiosConfig
      )
      .then((response) => {
        this.setState({musicas: response.data.result.tracks})
      })
      .catch((error) => {
        alert("Falha ao exibir músicas da playlist")
        console.log(error.message)
      })
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  playMusica = (url) => {
    const urlMusica = url;
    const audio = new Audio(urlMusica);
    
    audio.play();
    this.setState({qualMusica: audio});
    this.setState({musicaTocando: true})
  }

  pauseMusica = () => {
    this.state.qualMusica.pause();
    this.setState({musicaTocando: false})
  }

  render(){
    const PlayPause = url => !this.state.musicaTocando ? 
    <BotaoPlayPause onClick={() => this.playMusica(url)}>▶</BotaoPlayPause>
    : <BotaoPlayPause onClick={this.pauseMusica}>∥</BotaoPlayPause>

    const trocaTela = () => {
      if (this.state.mostraHome){
        return(
          <p>Bem vindo ao Labefy, selecione ao lado a playlist que deseja ouvir</p>
        )}else{
          return(
            <div>
            <PlaylistNome>{this.state.tituloPlaylist}</PlaylistNome>
            <LinhaMusicaArtista>P L A Y<span>M Ú S I C A</span><span>A R T I S T A</span><span>D E L E T A R</span></LinhaMusicaArtista>
            <hr />
            {this.state.musicas.map((musica) => {
              return(
                  <div><LinhaMusica key={musica.id}>
                      {PlayPause(musica.url)}
                      {musica.name}<span>{musica.artist}</span>
                      <BotaoDeletar onClick={() => {this.deletarMusica(musica.id)}}>x</BotaoDeletar>
                    </LinhaMusica><QuebraEntreMusicas />
                  </div>
              )
          })}
          <div>
              <TituloAdicionar>Adicionar músicas à playlist:</TituloAdicionar>
              <input 
              placeholder="Nome da Música"
              onChange={this.onChangeInputMusica}
              value={this.state.inputMusica}
              />
              <input
              placeholder="Nome do Artista"
              onChange={this.onChangeInputArtista}
              value={this.state.inputArtista}
              />
              <input 
              placeholder="Link da Música" 
              onChange={this.onChangeInputURL}
              value={this.state.inputURL}
              />
              <button onClick={this.adicionaMusica}>Adicionar Música</button>
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
