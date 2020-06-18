import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Post2 from './components/Post2/Post2'
import Post3 from './components/Post3/Post3'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'soter'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post2
          nomeUsuario={'severo'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post3
          nomeUsuario={'darvas'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/149'}
        />
      </div>
    );
  }
}

export default App;
