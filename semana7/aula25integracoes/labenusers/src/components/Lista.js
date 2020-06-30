import React from 'react'
import styled from 'styled-components'

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

const Lista = (props) => {
    return (
        <Pagina>
            <Botoes onClick={props.renderizaApp}>Ir para página de Registro</Botoes>
            <Conteudo>
                <h1>Usuários Cadastrados:</h1>
                <Nome>
                    {props.teste}
                </Nome>
            </Conteudo>
        </Pagina>
    )
}

export default Lista