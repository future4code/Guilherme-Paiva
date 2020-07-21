import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {App, LimparSM, BotaoInicial, Global, Header, Foto, LinhaMatch, Body, NomeMatch, TelaCarregando, LogoSeus, LogoMatches, LogoSeusMatches,
   Coracao1, Coracao2, Coracao3} from './styles'

export default function Matches (props) {

   const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guipaiva/matches"

   const [arrayMatches, setArrayMatches] = useState([])
   const [carregando, setCarregando] = useState(true)

   useEffect(() => {
      mostraMatches()
   }, [])

   useEffect(() => {
      mostraMatches()
   }, [arrayMatches])

   const mostraMatches = () => {
      axios.get(baseURL)
      .then(response => {
         setArrayMatches(response.data.matches)
         setCarregando(false)
      }).catch(erro => {
         console.log(erro.message)
      })  
   }

   const limpaMostraMatches = () => {
      props.limpaMatches()

   }

    return (
       <Global>
        <App>
         <Header> 
            <BotaoInicial onClick={props.mudaTela}>💖</BotaoInicial>
            <LogoSeusMatches><LogoSeus>seus</LogoSeus><LogoMatches>matches</LogoMatches></LogoSeusMatches>
         </Header>
         {carregando ? <TelaCarregando>Carregando...<div><Coracao1>❤</Coracao1><Coracao2>❤</Coracao2><Coracao3>❤</Coracao3></div></TelaCarregando> :      
         <Body>
            {arrayMatches.map((match) => {
               return <LinhaMatch>
                  <Foto src={match.photo}/><NomeMatch>{match.name}</NomeMatch>  
               </LinhaMatch>
            })}
         </Body>}   
        </App>
        <LimparSM onClick={limpaMostraMatches}>LIMPAR SWIPES e MATCHES</LimparSM>
       </Global> 
    )

}