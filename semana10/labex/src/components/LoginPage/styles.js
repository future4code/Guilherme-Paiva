import styled from 'styled-components'

export const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
`
export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 100vh;
    align-items: center;
`
export const LogoLabeX = styled.h1`
    margin: 285px 0 0 0;
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
    background-color: #24578E;
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
    background-image: url('http://getwallpapers.com/wallpaper/full/a/3/9/75048.jpg');
`
export const TextoBemVindo = styled.p`
    font-size: 28px;
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