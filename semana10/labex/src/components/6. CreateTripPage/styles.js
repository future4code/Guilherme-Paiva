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
export const X = styled.em`
    color: #452585;
`
export const LogoAdmin = styled.h1`
    margin: 0 0 15px 0;
    color: #24578E;
    font-size: 26px;
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
export const Copyright = styled.p`
    bottom: 0px;
    position: absolute;
    margin: 0 10px 15px 10px;
    font-size: 12px;
    font-weight: 500;
`
export const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 100vh;
    background-image: url(${BG});
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
export const FormularioNovaViagem = styled.div`
    display: flex;
    margin: 50px 0 0 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 400px;
    background-image: linear-gradient(155deg, #0250c5 35%, #d43f8d 100%);
    opacity: 85%;
    border-radius: 20px;
    color: white;
    box-shadow: 2px 2px 5px black;
`
export const BotaoCriaViagem = styled.button`
    margin-top: 20px;
    height: 30px;
    border-radius: 50px;
    border: none;
    font-weight: bold;
    font-size: 17px;
    color: white;
    background-color: #452585;
    width: 160px;
    height: 40px;
    outline: none;
    cursor: pointer;
    :active {
        opacity: 80%;
    }
    :hover {
        background-color: #5B488A;
    }
`
export const Input = styled.input`
    display: flex;
    justify-content: center;
    outline: none;
    padding-left: 4px;
    width: 240px;
    height: 20px;
`
export const Label = styled.label`
    margin-top: 10px;
    font-size: 19px;
`
export const Select = styled.select`
    outline: none;
    width: 248px;
    height: 25px;
`