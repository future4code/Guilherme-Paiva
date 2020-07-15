import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Inicial from './components/tela inicial/Inicial'
import Matches from './components/tela matches/Matches'

function App() {

  const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guipaiva/clear"

  const [paginaInicial, setPaginaInicial] = useState(true)

  const renderizaTela = () => {
    if (paginaInicial === true) {
      return <Inicial mudaTela={mudaPagina} limpaMatches={limpaTudo}/>
    } else {
      return <Matches mudaTela={mudaPagina} limpaMatches={limpaTudo}/>
    }
  }

  const limpaTudo = () => {
    axios.put(baseURL)
    .then(alert("Likes e swipes limpos!"))
    .catch(erro => {
      console.log(erro.message)
    })
  }

  const mudaPagina = () => {
    setPaginaInicial(!paginaInicial)
  }

  return (
    <div>
      {renderizaTela()}
    </div>
  );
}

export default App;
