import styled from 'styled-components'

   export const Page = styled.div`
    display: flex;
    flex-wrap: wrap;
  `
  export const Header = styled.div`
    background-color: #1ED561;
    color: white;
    height: 8.5vh;
    width: 100vw;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
  `
  export const Sidebar = styled.div`
    background-color: rgb(18, 18, 18);
    color: rgb(179, 179, 179);
    height: 91.5vh;
    width: 200px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  `
  export const Main = styled.div`
    background-color: rgb(24, 24, 24);
    color: rgb(237, 237, 237);
    flex-grow: 1;
    height: 91.5vh;
    flex-shrink: 10;
    padding: 50px;
  `
  export const CriarPlaylist = styled.div`
    margin: 0 10px 10px 10px;
    font-weight: bold;
    justify-self: flex-end;
  `
  export const LabelCriarPlaylist = styled.label`
    font-size: 17px;
    text-align: left;
    margin-left: 10px;
  `
  export const InputCriaPlaylist = styled.input`
    width: 100px;
    font-size: 12px;
    background-color: black;
    color: rgb(179, 179, 179);
    margin: 6px 3px 0 10px;
  `
  export const BotaoCriaPlaylist = styled.button`
    width: 45px;
    background-color: black;
    color: rgb(179, 179, 179);
  `
  export const ListaPlaylists = styled.label`
    margin: 10px;
  `
  export const LabelPlaylists = styled.label`
    font-size: 17px;
    text-align: left;
    font-weight: bold;
    margin-left: 10px;
  `
  export const CadaPlaylist = styled.ul`
    list-style: none;
    margin: 15px -30px;
  `
  export const LinhaPlaylist = styled.li`
    margin: 10px 0 0 0;
    width: 152px;
    display: flex;
    justify-content: space-between;
  `
  export const BotaoHome = styled.label`
    font-size: 17px;
    text-align: left;
    font-weight: bold;
    margin: 20px;
  `
  export const BotaoDeletar = styled.span`
    color: rgb(179, 179, 179); 
  `
  export const PlaylistNome = styled.h2`
  font-size: 70px;
  margin: 0 0 30px 0;
  `
  export const LinhaMusica = styled.li`
  margin: 10px 0 10px 20px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  `
  export const LinhaMusicaArtista = styled.p`
  margin: 30px 0 0 4px;
  width: 580px;
  display: flex;
  justify-content: space-between;
  `
  export const QuebraEntreMusicas = styled.hr`
  opacity: 20%;
  border: none;
  height: 1px;
  color: rgb(179, 179, 179);
  background-color: rgb(179, 179, 179);
  `
  export const TituloAdicionar = styled.h3`
  margin: 40px 0 5px 0;
  `
  export const BotaoPlayPause = styled.span`
  color: rgb(179, 179, 179); 
  `