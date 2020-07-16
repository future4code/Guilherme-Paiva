import styled, {keyframes} from 'styled-components'

export const Global = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUqbni5bY8AYLqvx4KyuAp1cf0J4wdeMDElw&usqp=CAU')
`
export const App = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
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
`
export const AstromatchLogo = styled.div`
margin: 5px 0 0px 10px;
`
export const LogoAstro = styled.span`
font-size: 42px;
margin-left: -10px;
`
export const LogoMatch = styled.span`
color: #ff392e;
font-size: 50px;
`
export const LogoCoracao = styled.span`
font-size: 42px;
color: #ff6961;
`
export const BotaoMatches = styled.img`
margin: 10px -10px 10px 0px;
height: 55px;
width: 55px;
border-radius: 50px;
border: 2.8px black solid;
opacity: 68%;
:hover{
    /* background-color: lightgreen;
    transform: scale(1.2) */
}
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
height: 450px;
position: relative;
overflow: hidden;
display: flex;
align-items: center;
`
export const Blur = styled.img`
height: 120%;
position: absolute;
filter: blur(10px);
`
export const FotoPerfil = styled.img`
width: 375px;
display: block;
z-index: 1;
`
export const Infos = styled.div`
height: 30%;
position: absolute;
bottom: 0;
width: 375px;
background-image: linear-gradient(to top, rgba(2,0,2,1), transparent);
color: white;
display: flex;
flex-direction: column;
justify-content: flex-end;
z-index: 2;
text-shadow: 1px 1px 2px black;
`
export const NomeIdade = styled.p`
font-weight: bold;
font-size: 30px;
margin: 0 0 0 10px;
`
export const Bio = styled.p`
margin: 0 0 10px 10px;
`
export const Footer = styled.div`
height: 80px;
width: 375px;
background-color: white;
display: flex;
align-items: center;
justify-content: space-around;
`
export const BotaoDislike = styled.img`
color: white;
border-radius: 50px;
border: none;
height: 60px;
width: 60px;
outline: none;
:hover{
    background-color: red;
    transform: scale(1.2)
}
`
export const BotaoLike = styled.img`
display: inline-block;
color: white;
border-radius: 50px;
border: none;
height: 60px;
width: 60px;
outline: none;
opacity: 77%;
:hover{
    background-color: green;
    transform: scale(1.2)
}
`



