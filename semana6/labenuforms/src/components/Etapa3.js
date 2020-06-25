import React from 'react'
import PerguntaAberta from "./PerguntaAberta"
import PerguntaFechada from "./PerguntaFechada"

class Etapa3 extends React.Component{
    render(){
        return(
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input />
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Curso técnico">Curso técnico</option>
                    <option value="Curso de inglês">Curso de inglês</option>
                </select>
            </div>
        )
    }
}

export default Etapa3