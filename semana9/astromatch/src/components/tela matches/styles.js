import styled from 'styled-components'

export const Global = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: grey;
`
export const App = styled.div`
display: flex;
flex-wrap: wrap;
width: 375px;
height: 610px;
background-color: lightyellow;
box-shadow: 2px 2px 2px black;
border-radius: 5px;
`
export const Header = styled.div`
height: 80px;
display: flex;
justify-content: space-around;
width: 375px;
background-color: blue;
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
export const Body = styled.div`
width: 375px;
height: 530px;
display: flex;
flex-direction: column;
margin: 15px 0 0 20px;
`
export const Foto = styled.img`
width: 50px;
height: 50px;
border-radius: 50px;
border: none;
`
export const LinhaMatch = styled.div`
display: inline-block;
margin-top: 5px;
`
export const NomeMatch = styled.div`
display: inline-block;
padding: 0 0 10px 0;
`