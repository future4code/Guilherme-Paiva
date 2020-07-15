import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Inicial from './components/tela inicial/Inicial'
import Matches from './components/tela matches/Matches'

function App() {

  const [paginaInicial, setPaginaInicial] = useState(true)

  const renderizaTela = () => {
    if (paginaInicial === true) {
      return <Inicial mudaTela={mudaPagina}/>
    } else {
      return <Matches mudaTela={mudaPagina}/>
    }
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
