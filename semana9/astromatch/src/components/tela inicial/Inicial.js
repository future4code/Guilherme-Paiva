import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {App, LimparSM, BotaoMatches, Global, Header, BotaoDislike, BotaoLike, Body, Footer,
    FotoPerfil, NomeIdade, Bio, Infos, LogoAstro, LogoMatch, LogoCoracao, Blur, AstromatchLogo} from './styles'
import iconeMatches from './3022389.svg'
import iconeLike from './like.svg'
import iconeDislike from './dislike.svg'

export default function Inicial (props) {

   const pessoaURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guipaiva/person"
   const likeURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guipaiva/choose-person"

   const [fotoPerfil, setFotoPerfil] = useState('')
   const [nomePerfil, setNomePerfil] = useState('')
   const [idadePerfil, setIdadePerfil] = useState(0)
   const [bioPerfil, setBioPerfil] = useState('')
   const [idPerfil, setIdPerfil] = useState('')
   
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
         alert("você deu dislike...")
         mostraPerfil()
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
         alert("você deu like!")
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
                  <LogoAstro>astro</LogoAstro><LogoMatch>m</LogoMatch><LogoCoracao>♡</LogoCoracao><LogoMatch>tch</LogoMatch>
               </AstromatchLogo>
               <BotaoMatches src={iconeMatches} onClick={props.mudaTela}/>
            </Header>
            <Body>
               <Blur src={fotoPerfil}></Blur>
               <FotoPerfil src={fotoPerfil}></FotoPerfil>
               <Infos>
                  <NomeIdade>{nomePerfil}, {idadePerfil}</NomeIdade>
                  <Bio>{bioPerfil}</Bio>
               </Infos> 
            </Body>
            <Footer>
               <BotaoDislike onClick={dislike} src={iconeDislike} />
               <BotaoLike onClick={like} src={iconeLike} className="animate__animate animate__pulse"/>
            </Footer> 
            <LimparSM onClick={props.limpaMatches}>LIMPAR SWIPES e MATCHES</LimparSM>
         </App>
      </Global>

    )

}