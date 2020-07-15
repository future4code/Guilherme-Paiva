import styled from 'styled-components'

export const Global = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: grey;
`
export const Pagina = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 420px;
height: 600px;
background-color: lightyellow;
box-shadow: 2px 2px 2px black;
border-radius: 5px;
`
export const Header = styled.div`
height: 100px;
display: flex;
justify-content: space-around;
width: 420px;
`
export const BotaoInicial = styled.button`
margin: 15px 0px 0px;
height: 60px;
width: 60px;
border-radius: 50px;
border: none;
background-color: lightgreen;
box-shadow: 2px 2px 9px black;
outline: none;
font-size: 10px;
`
export const LimparSM = styled.button`
height: 100px;
width: 100px;
bottom: 15px;
right: 15px;
position: fixed;
border-radius: 50px;
border: none;
background-color: lightblue;
box-shadow: 2px 2px 9px black;
outline: none;
`