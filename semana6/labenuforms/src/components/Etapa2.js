import React from 'react'
import PerguntaAberta from "./PerguntaAberta"
import PerguntaFechada from "./PerguntaFechada"

class Etapa2 extends React.Component{
    render(){
        return(
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <p>5. Qual curso?</p>
                <input />
                <p>6. Qual a unidade de ensino?</p>
                <input />
            </div>
        )
    }
}

export default Etapa2