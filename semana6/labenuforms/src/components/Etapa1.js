import React from 'react'
import PerguntaAberta from "./PerguntaAberta"
import PerguntaFechada from "./PerguntaFechada"

class Etapa1 extends React.Component{
    render(){
        return (
            <div>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <PerguntaAberta
                pergunta={"1. Qual o seu nome?"}
                />
                <PerguntaAberta
                pergunta={"2. Qual sua idade?"}
                />
                <PerguntaAberta
                pergunta={"3. Qual seu email?"}
                />
                <PerguntaFechada
                pergunta={"4. Qual a sua escolaridade"}
                opcoes={[
                    "Ensino Médio Incompleto",
                    "Ensino Médio Completo",
                    "Ensino Superior Incompleto",
                    "Ensino Superior Completo"
                ]}
              />  
                {/* <select>
                     <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                     <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                     <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                     <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                 </select> */}
            </div>
        )
    }
    
}

export default Etapa1