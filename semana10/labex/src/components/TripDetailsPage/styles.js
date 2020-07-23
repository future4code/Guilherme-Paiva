import styled from 'styled-components'

export const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
    font-family: Helvetica;
`
export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
`
export const LogoLabeX = styled.h1`
    margin: -10px 0 0 0;
    color: #42ADCB;
    font-size: 60px;
`
export const LogoAdmin = styled.h1`
    margin: 0 0 15px 0;
    color: #24578E;
    font-size: 26px;
`
export const X = styled.em`
    color: #452585;
`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 100vh;
    background-image: url('http://getwallpapers.com/wallpaper/full/a/3/9/75048.jpg');
`
export const Copyright = styled.p`
    bottom: 0px;
    position: absolute;
    margin: 0 10px 15px 10px;
    font-size: 12px;
    font-weight: 500;
`
export const Botao = styled.button`
    border: none;
    border-radius: 50px;
    margin: 20px 0 0 0;
    width: 160px;
    height: 44px;
    font-weight: bold;
    font-size: 14px;
    color: white;
    outline: none;
    cursor: pointer;
    background-color: #24578E;
    :active {
        opacity: 70%;
    }
    :hover {
        background-color: #55658F;
    }
`
export const BotaoMesmaPagina = styled.button`
    border: none;
    border-radius: 50px;
    margin: 20px 0 0 0;
    width: 160px;
    height: 44px;
    font-weight: bold;
    font-size: 14px;
    color: white;
    outline: none;
    background-color: #38435E;
`
export const Logoff = styled.a`
    margin-top: 20px;
    font-size: 15px;
    font-weight: bold;
    color: #24578E;
    cursor: pointer;
`
export const Header = styled.div`
    background-image: linear-gradient(to bottom, rgba(2,0,2,1), transparent);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    height: 120px;
    top: 0;
    position: absolute;
`
export const TextoBemVindo = styled.p`
    font-size: 50px;
    font-weight: 500;
    color: white;
    margin: -15px 0 0 30px;
`
export const FotoFoguete = styled.img`
    margin: -5px 0 0 0;
    transform: rotate(50deg);
    filter: invert();
    margin-right: 30px;
    width: 75px;
`
export const GridViagens = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const CardViagem = styled.div`
    width: 220px;
    height: 90px;
    margin: 10px;
    display: flex;
    border-radius: 15px;
    padding: 15px;
    opacity: 85%;
    color: white;
    font-size: 21px;
    text-align: center;
    font-weight: 600;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(155deg, #0250c5 0%, #d43f8d 100%);
`
export const BotaoDetalhes = styled.button`
    border: none;
    align-self: center;
    width: 110px;
    height: 30px;
    font-weight: bold;
    font-size: 17px;
    border-radius: 15px;
    color: #38435E;
    outline: none;
    background-color: white;
    cursor: pointer;
    :active {
        opacity: 70%;
    }
    :hover {
        background-color: rgb(154, 154, 154);
    }
`
export const CardDetalhesViagem = styled.div`
    width: 400px;
    height: 100px;
    margin: 10px;
    display: flex;
    padding: 15px;
    opacity: 90%;
    color: white;
    font-size: 14px;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgb(62, 62, 62);
`
export const CardCandidato = styled.div`
    width: 240px;
    height: 150px;
    margin: 10px;
    display: flex;
    padding: 15px;
    opacity: 90%;
    color: white;
    font-size: 14px;
    flex-direction: column;
    justify-content: space-around;
    background-color: darkblue;
    opacity:80%;
`
export const GridCandidatos = styled.div`
    display: flex;
`
export const CardAprovado = styled.div`
width: 240px;
    height: 120px;
    margin: 10px;
    display: flex;
    padding: 15px;
    opacity: 90%;
    color: white;
    font-size: 14px;
    flex-direction: column;
    justify-content: space-around;
    background-color: darkgreen;
    opacity:80%;
`
export const GridAprovados = styled.div`
    display: flex;
`
