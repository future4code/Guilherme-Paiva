import React from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components'

const AppContainer = styled.div`
display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Formulario = styled.div`
  border: 1px solid gray;
  width: 280px;
  margin: 10px 0;
  padding: 10px;
`
const BotaoForm = styled.button`
  margin-left: 10px;
`

class App extends React.Component {
  state = {
    Posts: [
          {
          nomeUsuario: "soter",
          fotoUsuario: "https://picsum.photos/50/49",
          fotoPost: "https://picsum.photos/200/151"
        },
        {
          nomeUsuario: "severo",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150"
        },
        {
          nomeUsuario: "darvas",
          fotoUsuario: "https://picsum.photos/50/51",
          fotoPost: "https://picsum.photos/200/149"
        }
    ],
    valorInputNome: "",
    valorFotoUsuario: "",
    valorFotoPost: ""

  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorFotoUsuario,
      fotoPost: this.state.valorFotoPost
    }
    const newPosts = [...this.state.Posts, novoPost] 
    this.setState({Posts: newPosts})
  }

  onChangeInputNome = event => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeFotoUsuario = event => {
    this.setState({valorFotoUsuario: event.target.value})
  }

  onChangeFotoPost = event => {
    this.setState({valorFotoPost: event.target.value})
  }



  render() {
    const listaDePosts = this.state.Posts.map(post => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });
    return (
      <AppContainer>
         <Formulario>
          <h3>Adicione uma nova foto</h3>
          <input 
          placeholder="Nome" 
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          />
          <input 
          placeholder="Foto usuário"
          value={this.state.valorFotoUsuario}
          onChange={this.onChangeFotoUsuario}
          />
          <input
          placeholder="Foto post"
          value={this.state.valorFotoPost}
          onChange={this.onChangeFotoPost}
          />
          <BotaoForm onClick={this.adicionaPost}>Postar</BotaoForm>
         </Formulario>

         <div>{listaDePosts}</div>
      </AppContainer>
    
    );
  }
}

export default App;