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
font-weight: 600;
`
export const LogoMatches = styled.span`
color: rgb(232,18,36);
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
background-color: #FBFBFB;
`
export const BotaoInicial = styled.span`
margin: 10px -4px 10px 0px;
height: 55px;
width: 55px;
border-radius: 50px;
background-color: white;
outline: none;
font-size: 40px;
cursor: pointer;
:hover{
    background-color: lightgoldenrodyellow;
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
cursor: pointer;
:hover{
    transform: scale(1.2)
}
`
export const Body = styled.div`
width: 375px;
height: 530px;
display: flex;
flex-direction: column;
padding-left:25px;
overflow: hidden;
background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/pixel-heart.png")
`
export const Foto = styled.img`
width: 70px;
height: 70px;
border-radius: 50px;
border: none;
`
export const LinhaMatch = styled.div`
display: flex;
align-items: center;
width: 320px;
border-radius: 50px;
margin: 20px 0 0 0;
cursor: pointer;
:hover{
    background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(223,223,223,1) 0%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%, rgba(255,255,255,1) 100%);
    box-shadow: 2px 2px 2px black;
}
:active{
    background-color: rgb(223, 223, 223);
}
`
export const NomeMatch = styled.div`
display: inline-block;
font-size: 22px;
margin: 0 0 0 10px;
`
export const TelaCarregando = styled.div`
width: 375px;
height: 530px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 0px;
overflow: hidden;
background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/pixel-heart.png");
font-size: 30px;
`
export const Coracao1 = styled.span`
color: yellow;
text-shadow: 2px 2px 2px black;
`
export const Coracao2 = styled.span`
color: green;
text-shadow: 2px 2px 2px black;
`
export const Coracao3 = styled.span`
color: blue;
text-shadow: 2px 2px 2px black;
`