import React from 'react'
import styled from 'styled-components'

const Pagina = styled.div`
  display: flex;
  flex-direction: column;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 200px;
  border: 1px black solid;
  margin: 100px auto 10px auto;
  text-align: center;
`
const Inputs = styled.input`
  width: 250px;
  align-self: center;
`
const Labels = styled.p`
  display: inline;
  margin: 20px 0 0 0;
  align-self: center;
`
const Botoes = styled.button`
  align-self: center;
  margin-top: 20px;
`

const Formulario = (props) => {
    return (
        <Pagina>
          <Botoes onClick={props.renderizaLista}>Ir para página de lista</Botoes>
          <Box>
            <Labels>Nome</Labels>  
            <Inputs onChange={props.pegaInputNome}
            />
            <Labels>E-mail</Labels>  
            <Inputs onChange={props.pegaInputEmail}
            />
            <Botoes onClick={props.criaUsuario}>Salvar</Botoes>
          </Box>
        </Pagina>
        
    )
}

export default Formulario