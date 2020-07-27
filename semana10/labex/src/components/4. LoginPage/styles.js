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
    font-size: 30px;
`
export const X = styled.em`
    color: #452585;
`
export const BotaoLogin = styled.button`
    border: none;
    border-radius: 50px;
    margin: 20px 0 0 0;
    width: 100px;
    height: 34px;
    font-weight: bold;
    font-size: 17px;
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
export const CriarUsuario = styled.a`
    margin-top: 20px;
    font-size: 15px;
    font-weight: bold;
    color: #24578E;
    cursor: pointer;
`
export const BotaoCriarUsuario = styled.button`
    border: none;
    border-radius: 50px;
    margin: 20px 0 0 0;
    width: 100px;
    height: 34px;
    font-weight: bold;
    font-size: 12px;
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
export const Label = styled.label`
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #24578E; 
    opacity: 75%;
`
export const Input = styled.input`
    display: flex;
    justify-content: center;
    outline: none;
    width: 180px;
    height: 20px;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 100vh;
    background-image: url(${BG});
`
export const TextoBemVindo = styled.p`
    font-size: 28px;
    font-weight: 500;
    color: white;
`
export const TextoBemVindo2 = styled.p`
    font-size: 25px;
    font-weight: 500;
    color: white;
`
export const FotoFoguete = styled.img`
    margin: 0;
    transform: rotate(50deg);
    filter: invert();
    margin: 20px;
    width: 250px;
`