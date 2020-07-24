import styled from 'styled-components'
import BG from '../Images/04.jpg'

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
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    width: 80vw;
    height: 100vh;
    background-image: url(${BG});
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
    font-size: 19px;
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
    background-image: linear-gradient(155deg, #0250c5 30%, #d43f8d 100%);
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
    width: 650px;
    display: flex;
    padding: 15px;
    opacity: 90%;
    color: white;
    margin: 50px 20px 0px 20px;
    font-size: 14px;
    flex-direction: column;
    justify-content: center;
`
export const TextoCandidatosAprovados = styled.p`
    font-size: 30px;
    font-weight: 500;
    color: white;
    margin: 10px 0 0 32px;
`
export const CardCandidato = styled.div`
    width: 275px;
    height: 140px;
    margin: 10px 0px 10px 20px;
    display: flex;
    border-radius: 15px 0px 15px 15px;
    padding: 10px;
    opacity: 85%;
    color: white;
    font-size: 13px;
    flex-direction: column;
    justify-content: space-around;
    background-image: linear-gradient(30deg, #FF057C 0%, #7C64D5 48%, #4CC3FF 100%);
`
export const GridCandidatos = styled.div`
    display: flex;
    margin: 0 0 5px 10px;
    flex-wrap: wrap;
`
export const CardAprovado = styled.div`
    width: 265px;
    height: 120px;
    margin: 10px 0px 10px 20px;
    display: flex;
    border-radius: 15px 0px 15px 15px;
    padding: 15px;
    opacity: 85%;
    color: white;
    font-size: 14px;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(155deg, #3ab5b0 0%, #50A7C2 31%, #56317a 100%);
`
export const GridAprovados = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 0 10px;
`
export const TextField = styled.span`
    text-transform: uppercase;
    color: #d43f8d;
    font-size: 20px;
`  
export const TripInfo = styled.span`
    font-size: 18px;
`
export const BotaoDeletarViagem = styled.button`
    border: none;
    margin: 10px 0 0 0;
    width: 110px;
    height: 30px;
    font-weight: bold;
    font-size: 12px;
    border-radius: 15px;
    color: #d43f8d;
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
export const BotaoAprovaCandidato = styled.button`
    border: none;
    margin: 10px 0 0 0;
    width: 80px;
    height: 25px;
    font-weight: bold;
    font-size: 12px;
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
export const BotaoReprovaCandidato = styled.button`
    border: none;
    margin: 10px 0 0 10px;
    width: 80px;
    height: 25px;
    font-weight: bold;
    font-size: 12px;
    border-radius: 15px;
    color: #d43f8d;
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