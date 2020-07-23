import styled from 'styled-components'

export const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-image: url('https://wallpaperplay.com/walls/full/8/c/2/12870.jpg');
    background-size: 100%;
    font-family: Helvetica;
`
export const LogoLabeX = styled.h1`
    margin: 100px 0 -15px 0;
    color: #42ADCB;
    font-size: 100px;
`
export const SubLogo = styled.h1`
    color: white;
    font-size: 27px;
    margin-bottom: 60px;
`
export const FotoFoguete = styled.img`
    margin: 0;
    filter: invert();
    transform: rotate(50deg);
    width: 250px;
`
export const LogoInscricao = styled.h1`
    color: white;
    font-size: 24px;
    margin: 50px 0 20px 0;
`
export const X = styled.em`
    color: #452585;
`
export const BotaoInscricao = styled.button`
    height: 30px;
    border-radius: 50px;
    border: none;
    font-weight: bold;
    color: #244D81;
    font-size: 19px;
    background-color: white;
    width: 220px;
    height: 53px;
    outline: none;
    box-shadow: 2px 2px 2px black;
    cursor: pointer;
    :active {
        opacity: 80%;
    }
    :hover {
        background-color: #D4D4D4;
    }
`
export const BotaoLogin = styled.button`
    bottom: 20px;
    right: 20px;
    position: absolute;
    border-radius: 15px;
    color: #42ADCB;
    background-color: #452585;
    font-weight: bold;
    border: none;
    outline: none;
    width: 80px;
    height: 50px;
    box-shadow: 2px 2px 2px black;
    cursor: pointer;
    :active {
        opacity: 50%;
    }
`