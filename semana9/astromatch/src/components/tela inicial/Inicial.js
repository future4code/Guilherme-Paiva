import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Pagina, LimparSM, BotaoMatches, Global, Header} from './styles'

export default function Inicial (props) {

    return (
       <Global>
        <Pagina>
         <Header> 
            <h1>astromatch</h1>
            <BotaoMatches onClick={props.mudaTela}>MATCHES</BotaoMatches>
         </Header>     
            <LimparSM>LIMPAR SWIPES e MATCHES</LimparSM>
        </Pagina>
       </Global>

    )

}