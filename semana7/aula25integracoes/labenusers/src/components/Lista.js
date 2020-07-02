import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Pagina = styled.div`
    display: flex;
    flex-direction: column;
`
const Botoes = styled.button`
    align-self: center;
    margin-top: 20px;
`
const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px auto 10px auto;
`
const Nome = styled.ul`
    list-style: none;
    margin-left: -45px;
`
const QuebraLinha = styled.hr`
    width: 340px;
`
const BotaoDeletar = styled.span`
    right: 1;
    color: red;   
`
const Linha = styled.li`
    display: flex;
    justify-content: space-between;
`

class Lista extends React.Component {
    state = {
        usuarios:[],
    }
    pegarUsuarios = () => {
        axios .get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          {
            headers: {
              Authorization: "guilherme-paiva-turing"
            }
          }
        )
        .then(response => {
          console.log(response.data)
          this.setState({usuarios: response.data})
          
        })
        .catch((error) => {
          alert("Falha ao pegar lista de usuários")
          console.log(error.message)
        })
      }
      
    componentDidMount = () => {
        this.pegarUsuarios()
    }

    deletarUsuario = userid => {
        axios .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userid}`,
            {
                headers: {
                    Authorization: "guilherme-paiva-turing"
                }
            }    
        )
        .then(() => {
            this.pegarUsuarios()
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    render(){
        return ( 
            <Pagina>
                <Botoes onClick={this.props.renderizaApp}>Ir para página de Registro</Botoes>
                <Conteudo>
                    <h1>Usuários Cadastrados:</h1>
                    <Nome>
                    {this.state.usuarios.map((usuario) => { 
                        return (
                        <div key={usuario.id}>
                            <Linha><span>{usuario.name}</span>
                            <BotaoDeletar onClick={() => {this.deletarUsuario(usuario.id)}}>X</BotaoDeletar>
                            </Linha>
                            <QuebraLinha />
                            </div>
                            )})}
                    </Nome>
                </Conteudo>
            </Pagina>
        )
    }
    
}

export default Lista