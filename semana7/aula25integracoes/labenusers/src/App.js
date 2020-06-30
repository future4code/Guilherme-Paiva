import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Lista from './components/Lista'
import Formulario from './components/Formulario'

const QuebraLinha = styled.hr`
    width: 340px;
`
const Span2 = styled.span`
    right: 1;
    color: red;   
`
const Linha = styled.li`
    display: flex;
    justify-content: space-between;
`

class App extends React.Component {
  state = {
    playlists:[],
    exibeLista: false,
    inputNome: '',
    inputEmail: ''
  }

  criarUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "guilherme-paiva-turing"
          }
        }
      )
      .then(response => {
        alert("Usuário criado com sucesso!")
        this.buscarUsuario()
      })
      .catch(error => {
        alert("Falha ao criar usuário")
        console.log(error.data)
      })
  }

  renderPagina = () => {
    this.setState({exibeLista: !this.state.exibeLista})
    console.log("Clicou!")
  }

  onChangeNome = (event) => {
    this.setState({inputNome: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  criaUser = () => {
    console.log(this.state.inputNome + " & " + this.state.inputEmail)
  }

  render(){

  const nomePlaylists = this.state.playlists.map((playlist) => {
    return (<div><Linha><span>{playlist.name}</span><Span2>X</Span2></Linha>
    <QuebraLinha /></div>)

  })  

  const mostraTela = () => {
    if (this.state.exibeLista){
      return (
        <Lista 
        renderizaApp={this.renderPagina}
        teste={nomePlaylists}
        />
      )}else{
      return (
        <Formulario
          renderizaLista={this.renderPagina} 
          pegaInputNome={this.onChangeNome}
          pegaInputEmail={this.onChangeEmail}
          criaUsuario={this.criarUsuario}
      />
      ); 
    }
  }  
     return (
       <div>
         {mostraTela()}
       </div>
       
     ) 
  }
}

export default App;
