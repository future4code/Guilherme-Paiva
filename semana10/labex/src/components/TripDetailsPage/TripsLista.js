import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {Pagina, Sidebar, LogoLabeX, X, LogoAdmin, Main, Copyright, TextoBemVindo, FotoFoguete} from './styles'

const TripsLista = () => {

    return (
        <Pagina>
            <Sidebar>
                <LogoLabeX>Labe<X>X</X></LogoLabeX>
                <LogoAdmin>Bem vindx, ADMIN</LogoAdmin>
                
                <Copyright>© 2020 LabeX - Todos os direitos reservados</Copyright>
            </Sidebar>
            <Main>
                <TextoBemVindo>Bem vindo!</TextoBemVindo>
                <FotoFoguete src="https://image.flaticon.com/icons/svg/28/28356.svg"></FotoFoguete>
            </Main>
        </Pagina>
    )    
}

export default TripsLista