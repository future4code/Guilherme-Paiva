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