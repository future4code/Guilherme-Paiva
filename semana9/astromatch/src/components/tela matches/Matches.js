import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Pagina, LimparSM, BotaoInicial, Global, Header} from './styles'

export default function Matches (props) {

    return (
       <Global>
        <Pagina>
         <Header> 
            <h1>seus matches</h1>
            <BotaoInicial onClick={props.mudaTela}>PÁGINA INICIAL</BotaoInicial>
         </Header>     
            <LimparSM>LIMPAR SWIPES e MATCHES</LimparSM>
        </Pagina>
       </Global> 
    )

}