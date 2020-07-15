import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {App, LimparSM, BotaoInicial, Global, Header, Foto, LinhaMatch, Body, NomeMatch} from './styles'

export default function Matches (props) {

   const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guipaiva/matches"

   const [arrayMatches, setArrayMatches] = useState([])

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
            <h1>seus matches</h1>
            <BotaoInicial onClick={props.mudaTela}>PÁGINA INICIAL</BotaoInicial>
         </Header>     
         <Body>
            {arrayMatches.map((match) => {
               return <LinhaMatch>
                  <Foto src={match.photo}/><NomeMatch>{match.name}</NomeMatch>  
               </LinhaMatch>
            })}
         </Body>   
        </App>
        <LimparSM onClick={limpaMostraMatches}>LIMPAR SWIPES e MATCHES</LimparSM>
       </Global> 
    )

}