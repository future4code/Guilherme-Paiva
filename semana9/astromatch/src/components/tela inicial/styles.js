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
justify-content: center;
width: 375px;
height: 610px;
background-color: lightyellow;
box-shadow: 2px 2px 2px black;
border-radius: 5px;
overflow: hidden;
`
export const Header = styled.div`
height: 80px;
display: flex;
justify-content: space-around;
width: 375px;
`
export const BotaoMatches = styled.button`
margin: 15px 0px 0px;
height: 60px;
width: 60px;
border-radius: 50px;
border: none;
background-color: lightcoral;
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
height: 450px;
width: 375px;
display: flex;
flex-direction: column;
`
export const Footer = styled.div`
height: 80px;
width: 375px;
background-color: orange;
display: flex;
align-items: center;
justify-content: space-around;
`
export const BotaoDislike = styled.button`
color: white;
background-color: red;
border-radius: 50px;
border: none;
height: 60px;
width: 60px;
outline: none;
`
export const BotaoLike = styled.button`
color: white;
background-color: green;
border-radius: 50px;
border: none;
height: 60px;
width: 60px;
outline: none;
`
export const FotoPerfil = styled.img`
width: 375px;
align-self: center;
`
export const NomeIdade = styled.p`
font-weight: bold;
font-size: 30px;
margin: 0 0 0 10px;
`
export const Bio = styled.p`
margin: 0 0 0 10px;
`
export const Infos = styled.div`
width: 375px;
position: absolute;
color: white;
text-shadow: 1px 1px 2px black;
background-image: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
`