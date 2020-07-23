import styled from 'styled-components'

export const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-image: url('https://images.hdqwalls.com/wallpapers/blue-milky-way-galaxy-4k-7y.jpg');
    background-size: 100%;
    font-family: Helvetica;
`
export const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 450px;
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
    opacity: 85%;
    border-radius: 20px;
    color: white;
    box-shadow: 2px 2px 5px black;
`
export const LogoFormulario = styled.h1`
    margin: 100px 0px -10px 0px;
    color: white;
    font-size: 50px;
`
export const LogoLabeX = styled.h1`
    margin-top: 0px;
    color: #42ADCB;
    font-size: 60px;
`
export const X = styled.em`
    color: #452585;
`
export const BotaoInscricao = styled.button`
    margin-top: 20px;
    height: 30px;
    border-radius: 50px;
    border: none;
    font-weight: bold;
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
export const Label = styled.label`
    margin-top: 10px;
    font-size: 19px;
`
export const Input = styled.input`
    display: flex;
    justify-content: center;
    outline: none;
    padding-left: 3px;
    width: 190px;
    height: 20px;
`
export const Select = styled.select`
    width: 198px;
    height: 25px;
    outline: none;
`