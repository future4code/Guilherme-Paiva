import React from 'react'

class PerguntaFechada extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.pergunta}</p>
                <select>
                    for (let opcao of {this.props.opcoes}){
                        <option>{this.props.opcoes}</option>
                    }
                </select>
            </div>
        )
    }
}

export default PerguntaFechada