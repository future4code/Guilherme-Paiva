import styled from 'styled-components'

export const Pagina = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Helvetica;
    background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);
`
export const GridDias = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const CardDia = styled.div`
    width: 18vw;
    height: 32vh;
    background-image: linear-gradient(160deg, #ffecd2 0%, #fcb69f 100%);
    margin: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 20px 0 20px 20px;
    box-shadow: 3px 3px 3px #AB83BB;
`
export const CardFinde = styled.div`
    width: 18vw;
    height: 32vh;
    background-image: linear-gradient(to bottom, #df89b5 0%, #bfd9fe 100%);
    margin: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 20px 0 20px 20px;
    box-shadow: 3px 3px 3px #AB83BB;
`
export const NomeDia = styled.p`
    align-self: flex-end;
    font-weight: bold;
    font-size: 1.8vw;
    color: #FCB7A0;
    text-transform: uppercase;
    opacity: 70%;
    margin: 7px 10px 0 0;
`
export const NomeDiaFinde = styled.p`
    align-self: flex-end;
    font-weight: bold;
    font-size: 1.8vw;
    color: #FEDEC5;
    text-transform: uppercase;
    opacity: 70%;
    margin: 7px 10px 0 0;
`
export const TituloPagina = styled.h1`
    font-size: 64px;
    margin: 0 0 30px 0;
    color: #FEFFE3;
`
export const ItemLista = styled.li`
    color: #6F68AD;
    margin: 10px 0 0 10px;
    display: flex;
    justify-content: space-between;
    padding-right: 15px;
    position: relative;
    font-weight: bold;
    font-size: 1.2em;
    list-style: none;
    margin-left: -22px;
    :hover{
        color: #938AAB;
        cursor: pointer;
    }
`
export const ItemListaRiscado = styled.li`
    color: #6F68AD;
    margin: 10px 0 0 10px;
    display: flex;
    justify-content: space-between;
    text-decoration: line-through;
    padding-right: 15px;
    position: relative;
    font-weight: bold;
    font-size: 1.2em;
    list-style: none;
    margin-left: -22px;
    :hover{
        color: #938AAB;
        cursor: pointer;
    }
`
export const TituloNovaTarefa = styled.h1`
    color: #FEDEC5;
    margin: 10px 5px 15px 0;
    font-size: 32px;
    align-self: center;
`
export const InputNovaTarefa = styled.input`
    border: none;
    width: 300px;
    height: 25px;
    margin: 5px 0 20px 0;
    outline: none;
    padding-left: 5px;
`
export const BotaoNovaTarefa = styled.button`
    border: none;
    padding: 10px 20px;
    font-weight: bold;
    color: white;
    background-color: #a981bb;
    border-radius: 50px;
    width: 140px;
    height: 35px;
    align-self: center;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    :hover {
        opacity: 80%;
    }
    :active {
        background-color: #9874A8;
    }
`
export const CardNovaTarefa = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 30px 20px 20px 0;
    width: 540px;
    height: 150px;
    background-image: linear-gradient(to bottom, #3b41c5 0%, #a981bb 0%, #ffc8a9 100%);
    margin: 40px 20px 20px 20px;
    padding: 15px 12px 20px 20px;
    box-shadow: 3px 3px 3px #AB83BB;
    position: absolute;
    bottom: 65px;
    right: 65px;
    z-index: 1;
`
export const SelectDia = styled.select`
    margin: 0 0 0 10px;
    border: none;
    height: 27px;
`
export const InputSelect = styled.div`
    align-self: center;
    outline: none;
`
export const Copyright = styled.p`
    color: #AB83BB;
    font-weight: bold;
    bottom: 0;
    position: static;
`
export const BotaoDeletaTarefa = styled.span`
    color: red;
`
export const BotaoDivNovaTarefa = styled.button`
    border-radius: 50px;
    border: none;
    height: 100px;
    width: 100px;
    position: absolute;
    background-image: linear-gradient(330deg, #2CD8D5 0%, #C5C1FF 40%, #FFBAC3 100%);
    font-size: 60px;
    box-shadow: 2px 2px 2px black;
    bottom: 30px;
    right: 30px;
    outline: none;
    cursor: pointer;
    :hover {
        background-image: linear-gradient(130deg, #2CD8D5 0%, #C5C1FF 40%, #FFBAC3 100%);
    }
`
export const Opcoes = styled.div`
    width: 230px;
    opacity: 80%;
    position: absolute;
    top: -15px;
    left: 40%;
    z-index: 1;
    height: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    color: white;
    font-size: 12px;
    border-radius: 50px;
    background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
`