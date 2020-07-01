import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Lista from './components/Lista'
import Formulario from './components/Formulario'

class App extends React.Component {
  state = {
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
      .then(() => {
        alert("Usuário criado com sucesso!")
        this.setState({inputNome: "", inputEmail: ""});
      })
      .catch((error) => {
        alert("Falha ao criar usuário")
        console.log(error.message)
      })
  }

  renderPagina = () => {
    this.setState({exibeLista: !this.state.exibeLista})
  }

  onChangeNome = (event) => {
    this.setState({inputNome: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  render(){
    
  const mostraTela = () => {
    if (this.state.exibeLista){
      return (
        <Lista 
        renderizaApp={this.renderPagina}
        listaUsuarios={this.pegarUsuarios}
        />
      )}else{
      return (
        <Formulario
          renderizaLista={this.renderPagina} 
          pegaInputNome={this.onChangeNome}
          pegaInputEmail={this.onChangeEmail}
          trocaInputNome={this.state.inputNome}
          trocaInputEmail={this.state.inputEmail}
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
