import styled from 'styled-components'
import BG from '../Images/02.jpg'

export const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${BG});
    background-size: 100%;
    font-family: Helvetica;
`
export const GridCards = styled.div`
    display: flex;
`
export const Card = styled.div`
    width: 280px;
    height: 320px;
    margin: 10px;
    display: flex;
    padding: 15px;
    opacity: 80%;
    border-radius: 20px;
    color: white;
    box-shadow: 2px 2px 5px black;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-image: linear-gradient(45deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);
`
export const TituloViagens = styled.h1`
    color: white;
    font-size: 50px;
    margin: 0px 0px -10px 0px;
`
export const LogoLabeX = styled.h1`
    margin-top: 0px;
    color: #42ADCB;
    font-size: 60px;
`
export const X = styled.em`
    color: #452585;
`
export const NomeViagem = styled.p`
    font-size: 30px;
    text-align: center;
    font-weight: 700;
    text-shadow: 2px 2px 2px black;
    margin: 0px;
`
export const DescricaoViagem = styled.p`
    text-align: center;
    margin: 0px;
    font-size: 18px;
`
export const DuracaoViagem = styled.p`
    margin: 0px;
    font-size: 17px;
`
export const SaidaViagem = styled.p`
    margin: 0px;
    font-size: 17px;
`
export const BotaoCadastro = styled.button`
    border-radius: 50px;
    border: none;
    font-weight: bold;
    color: #244D81;
    font-size: 15px;
    background-color: white;
    width: 180px;
    height: 43px;
    outline: none;
    opacity: 100%;
    box-shadow: 2px 2px 2px black;
    cursor: pointer;
    :active {
        opacity: 80%;
    }
    :hover {
        background-color: #D4D4D4;
    }
`
