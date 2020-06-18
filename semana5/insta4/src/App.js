import React from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components'

const AppContainer = styled.div`
display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
    ]
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
         <div>{listaDePosts}</div>
      </AppContainer>
    );
  }
}

export default App;