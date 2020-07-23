import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {Pagina, Sidebar, LogoLabeX, X, LogoAdmin, Main, Copyright, TextoBemVindo, FotoFoguete, Botao, BotaoMesmaPagina, Header, GridViagens, CardViagem,
    BotaoDetalhes, Logoff} from './styles'

const TripsLista = () => {

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guipaiva-turing"
    const history = useHistory();

    const [arrayViagens, setArrayViagens] = useState([])

    const goToCreateTripPage = () => {
        history.push("/viagens/criar")
    }

    const goToTripDetailsPage = (viagemId) => {
        history.push(`/viagens/detalhes/${viagemId}`)
    }

    useEffect(() => {
        mostraViagens()
    }, [])

    const mostraViagens = () => {
        axios.get(`${baseUrl}/trips`)
        .then(response => {
            setArrayViagens(response.data.trips)
        }).catch(error => {
            console.log(error.message)
        })
    }

    const logoff = () => {
        localStorage.clear("token")
        history.push("/login")
    }

    return (
        <Pagina>
            <Sidebar>
                <LogoLabeX>Labe<X>X</X></LogoLabeX>
                <LogoAdmin>Bem vindx, ADMIN</LogoAdmin>
                <BotaoMesmaPagina>Lista de Viagens</BotaoMesmaPagina>    
                <Botao onClick={goToCreateTripPage}>Criar nova viagem</Botao>
                <Logoff onClick={logoff}>Sair</Logoff>
                <Copyright>© 2020 LabeX - Todos os direitos reservados</Copyright>
            </Sidebar>
            <Main>
                <Header>
                    <TextoBemVindo>LISTA DE VIAGENS</TextoBemVindo>
                    <FotoFoguete src="https://image.flaticon.com/icons/svg/28/28356.svg"></FotoFoguete>
                </Header>
                <GridViagens>
                    {arrayViagens.map((viagem) => {
                        return <CardViagem>
                            <div><b></b>{viagem.name}</div>
                            <BotaoDetalhes onClick={() => goToTripDetailsPage(viagem.id)}>Detalhes</BotaoDetalhes>
                            </CardViagem>
                    })}
                </GridViagens>
            </Main>
        </Pagina>
    )    
}

export default TripsLista