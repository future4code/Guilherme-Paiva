import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {App, LimparSM, BotaoMatches, Global, Header, BotaoDislike, BotaoLike, Body, Footer, TelaCarregando, FotoPerfil, NomeIdade, Bio, Infos,
   LogoAstro, LogoMatch, LogoCoracao, Blur, AstromatchLogo, Coracao1, Coracao2, Coracao3} from './styles'

export default function Inicial (props) {

   const pessoaURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guipaiva/person"
   const likeURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guipaiva/choose-person"

   const [fotoPerfil, setFotoPerfil] = useState('')
   const [nomePerfil, setNomePerfil] = useState('')
   const [idadePerfil, setIdadePerfil] = useState(0)
   const [bioPerfil, setBioPerfil] = useState('')
   const [idPerfil, setIdPerfil] = useState('')
   const [carregando, setCarregando] = useState(true)
   
   useEffect(() => {
      mostraPerfil()
   }, [])

   const mostraPerfil = () => {
      axios.get(pessoaURL)
      .then(response => {
         setFotoPerfil(response.data.profile.photo)
         setNomePerfil(response.data.profile.name)
         setIdadePerfil(response.data.profile.age)
         setBioPerfil(response.data.profile.bio)
         setIdPerfil(response.data.profile.id)
         setCarregando(false)
      }).catch(erro => {
         console.log(erro.message)
      })
   }

   const like = () => {
      const bodyLike = {
         "id":idPerfil,
         "choice": true 
      }
      axios.post(likeURL, bodyLike)
      .then(() => {
         mostraPerfil()
      }).catch(erro => {
         console.log(erro.message)
      })
   }

   const dislike = () => {
      const bodyDislike = {
         "id":idPerfil,
         "choice": false
      }
      axios.post(likeURL, bodyDislike)
      .then(() => {
         mostraPerfil()
      }).catch(erro => {
         console.log(erro.message)
      })
   }

    return (
      <Global>
         <App>
            <Header> 
               <AstromatchLogo>
                  <LogoAstro>astro</LogoAstro><LogoMatch>m</LogoMatch><LogoCoracao>❤</LogoCoracao><LogoMatch>tch</LogoMatch>
               </AstromatchLogo>
               <BotaoMatches onClick={props.mudaTela}>👥</BotaoMatches>
            </Header>
            {carregando ? <TelaCarregando>Carregando...<div><Coracao1>❤</Coracao1><Coracao2>❤</Coracao2><Coracao3>❤</Coracao3></div></TelaCarregando> : 
            <Body>
               <Blur src={fotoPerfil}></Blur>
               <FotoPerfil src={fotoPerfil}></FotoPerfil>
               <Infos>
                  <NomeIdade>{nomePerfil}, {idadePerfil}</NomeIdade>
                  <Bio>{bioPerfil}</Bio>
               </Infos> 
            </Body>} 
            <Footer>
               <BotaoDislike onClick={dislike}>💔</BotaoDislike>
               <BotaoLike onClick={like}>💚</BotaoLike>
            </Footer> 
            <LimparSM onClick={props.limpaMatches}>LIMPAR SWIPES e MATCHES</LimparSM>
         </App>
      </Global>
    )

}