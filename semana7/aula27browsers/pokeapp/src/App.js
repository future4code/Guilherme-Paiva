import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Page = styled.div`
  display: flex;
`
const Sidebar = styled.div`
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(194,45,45,1) 0%, rgba(255,255,255,1) 100%);
  width: 300px;
  height: 500px;
  text-align: center;
`
const AppLogo = styled.h1`
  margin-top: 50px;
  font-size: 50px;
  color: white;
  text-shadow: 4px 4px 6px #4E2121;
`
const Subtitulo = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 2px #4E2121;
  margin-top: -30px;
  margin-bottom: 20px;
`
const BotaoRandom = styled.button`
  margin-top: 20px;
  height: 50px;
  border-radius: 25px;
  border: none;
  width: 200px;
  font-size: 18px;
  -webkit-box-shadow: 10px 10px 9px -1px rgba(0,0,0,0.36);
  -moz-box-shadow: 10px 10px 9px -1px rgba(0,0,0,0.36);
  box-shadow: 10px 10px 9px -1px rgba(0,0,0,0.36);
  text-shadow: 2px 2px 5px #4E2121;
  outline: none;
  :hover{
    background-color: #ffe5e5;
  } 
  :active{
    color: #C32F2F;
  }
`
const Image = styled.div`
  margin: 30px 50px 0 50px;
  text-align: center;
`
const Infos = styled.div`
  height: 500px;
  width: 500px;
  margin-top: 50px;
`
const NomePoke = styled.h2`
  font-size: 50px;
  text-align: center
`
const TipoPoke = styled.h3`
  font-size: 30px;
  text-align: center
`
const Sprite = styled.img`
  width: 300px;
`

export class App extends React.Component {
  state = {
    arrayPokes: [],
    arrayTipo1: [],
    arrayTipo2: [],
    imagemPoke: "",
    numeroAleatorio: 0
  }

  componentDidMount = () => {
    this.geraNumAleatorio(1, 809)
  }

  geraNumAleatorio = (min, max) => {
  min = Math.ceil(1);
  max = Math.floor(809);
  const numero = Math.floor(Math.random() * (max - min)) + min
  axios.get(`https://pokeapi.co/api/v2/pokemon/${numero}`)
    .then(response => {
      this.setState({arrayPokes: response.data})
      this.setState({imagemPoke: response.data.sprites.front_default})
      this.setState({arrayTipo1: response.data.types[0].type.name})
      this.setState({arrayTipo2: response.data.types[1].type.name})
    })
    .catch(error => {
      console.log(error.message)
    })
}
  render(){
    console.log("oi")
    /* exibeTipo2 
      if (this.state.arrayTipo2){
      alert("tem um segundo tipo")
    }else{
      alert("não tem um segundo tipo")
    }
    }  */

    return (
      <Page>
        <Sidebar>
          <AppLogo>PokéApp</AppLogo>
          <Subtitulo>Temos que randomizar!</Subtitulo>
          <BotaoRandom onClick={this.geraNumAleatorio}>NOVO POKÉMON</BotaoRandom>
        </Sidebar>
        <Image>
            <Sprite src={this.state.imagemPoke} />
        </Image>
        <Infos>
          <NomePoke>#{this.state.arrayPokes.id} - {this.state.arrayPokes.name}</NomePoke>
          <TipoPoke>{this.state.arrayTipo1} {this.state.arrayTipo2}</TipoPoke>
        </Infos>
      </Page>
    );
  }
  
}

export default App;
