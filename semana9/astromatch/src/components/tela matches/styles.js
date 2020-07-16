import styled from 'styled-components'

export const Global = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUqbni5bY8AYLqvx4KyuAp1cf0J4wdeMDElw&usqp=CAU');
`
export const LogoSeusMatches = styled.div`
margin: 10px 0 0px 10px;
`
export const LogoSeus = styled.span`
font-size: 38px;
margin-left: -10px;
`
export const LogoMatches = styled.span`
color: #ff392e;
font-size: 46px;
`
export const App = styled.div`
display: flex;
flex-wrap: wrap;
width: 375px;
height: 610px;
background-color: white;
box-shadow: 2px 2px 2px black;
border-radius: 5px;
`
export const Header = styled.div`
height: 80px;
display: flex;
justify-content: space-around;
width: 375px;
background-color: white;
`
export const BotaoInicial = styled.img`
margin: 10px -4px 10px 0px;
height: 55px;
width: 55px;
border-radius: 50px;
border: 2px black solid;
background-color: white;
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
background-color: white;
font-weight: bold;
box-shadow: 2px 2px 9px black;
outline: none;
:hover{
    transform: scale(1.2)
}
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
display: flex;
align-items: center;
margin: 5px 0 10px 0;
:hover{
    background-color: #EEE;
}
`
export const NomeMatch = styled.div`
display: inline-block;
font-size: 22px;
margin: 0 0 0 10px;
`