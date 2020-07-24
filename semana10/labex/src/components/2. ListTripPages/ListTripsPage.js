import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import CardViagem from './CardViagem'
import {Pagina, GridCards, TituloViagens, LogoLabeX, X} from './styles'


const ListTripsPage = () => {
    const history = useHistory();

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guipaiva-turing"

    const [arrayViagens, setArrayViagens] = useState([])

    useEffect(() => {
        mostraViagens()
    }, [])
    
    const goToApplicationFormPage = () => {
        history.push("/inscricao")
    }

    const mostraViagens = () => {
        axios.get(`${baseUrl}/trips`)
        .then(response => {
            setArrayViagens(response.data.trips)
        }).catch(error => {
            console.log(error.message)
        })
    }

    return (
        <Pagina>
            <TituloViagens>VIAGENS DISPONÍVEIS</TituloViagens>
            <LogoLabeX>Labe<X>X</X></LogoLabeX>
            <GridCards>
            {arrayViagens.map((viagem) => {
                return <CardViagem 
                nomeViagem = {viagem.name}
                planetaViagem = {viagem.planet}
                descricaoViagem = {viagem.description}
                duracaoViagem = {viagem.durationInDays}
                dataViagem = {viagem.date}
                mudaPaginaInscricao = {goToApplicationFormPage}
                />
            })}
            </GridCards>
        </Pagina>
        )
}

export default ListTripsPage;