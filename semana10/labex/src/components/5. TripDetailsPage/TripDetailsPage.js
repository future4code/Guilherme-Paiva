import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Pagina, Sidebar, LogoLabeX, X, LogoAdmin, Main, Copyright, TextoBemVindo, FotoFoguete, Botao, CardDetalhesViagem, Header,
    CardCandidato, GridCandidatos, GridAprovados, CardAprovado, Logoff} from './styles'
import axios from 'axios';

const TripDetailsPage = () => {
    
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guipaiva-turing"
    const history = useHistory();

    const [viagemNome, setViagemNome] = useState('')
    const [viagemPlaneta, setViagemPlaneta] = useState('')
    const [viagemDescricao, setViagemDescricao] = useState('')
    const [viagemDuracao, setViagemDuracao] = useState(0)
    const [viagemData, setViagemData] = useState('')
    const [viagemCandidatos, setViagemCandidatos] = useState([])
    const [viagemAprovados, setViagemAprovados] = useState([])

    const goToCreateTripPage = () => {
        history.push("/viagens/criar")
    }

    const goToInternalTripsPage = () => {
        history.push("/viagens")
    }

    useEffect(() => {
        mostraDetalhesViagem()
    }, [])

    const params = useParams()

    const mostraDetalhesViagem = () => {
        const token = window.localStorage.getItem("token")

        axios.get(`${baseUrl}/trip/${params.viagemId}`, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            setViagemNome(response.data.trip.name)
            setViagemPlaneta(response.data.trip.planet)
            setViagemDescricao(response.data.trip.description)
            setViagemDuracao(response.data.trip.durationInDays)
            setViagemData(response.data.trip.date)
            setViagemCandidatos(response.data.trip.candidates)
            setViagemAprovados(response.data.trip.approved)
        }).catch((error) => {
            console.log(error.message)
        })
    }    

    const aprovaCandidato = (candidatoId) => {
        const token = window.localStorage.getItem("token")

        const body = {
            approve: true
        }

        axios.put(`${baseUrl}/trips/${params.viagemId}/candidates/${candidatoId}/decide`, body, {
            headers: {
                auth: token
            }
        })
        .then(() => {
            alert("Candidato aprovado!")
            mostraDetalhesViagem()
        }).catch((error) => {
            console.log(error.message)
        })
    }

    const deletaViagem = () => {
        axios.delete(`${baseUrl}/trips/${params.viagemId}`)
        .then(() => {
            alert("Viagem deletada com sucesso")
            history.push("/viagens")
        }).catch((error) => {
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
                    <Botao onClick={goToInternalTripsPage}>Lista de Viagens</Botao>    
                    <Botao onClick={goToCreateTripPage}>Criar nova viagem</Botao>
                    <Logoff onClick={logoff}>Sair</Logoff>
                    <Copyright>© 2020 LabeX - Todos os direitos reservados</Copyright>
                </Sidebar>
                <Main>
                    <Header>
                        <TextoBemVindo>DETALHES DA VIAGEM</TextoBemVindo>
                        <FotoFoguete src="https://image.flaticon.com/icons/svg/28/28356.svg"></FotoFoguete>
                    </Header>
                    <CardDetalhesViagem>
                        <div>Nome da viagem: {viagemNome}</div>
                        <div>Planeta: {viagemPlaneta}</div>
                        <div>Descrição: {viagemDescricao}</div>
                        <div>Duração: {viagemDuracao} dias</div>
                        <div>Data de saída: {viagemData}</div>
                        <button onClick={deletaViagem}>Deletar viagem</button>
                    </CardDetalhesViagem>
                    <TextoBemVindo>CANDIDATOS</TextoBemVindo>
                    <GridCandidatos>
                        {viagemCandidatos.map((candidato) => {
                            return <CardCandidato>
                                <div>Nome: {candidato.name}</div>
                                <div>Idade: {candidato.age}</div>
                                <div>País: {candidato.country}</div>
                                <div>Profissão: {candidato.profession}</div>
                                <div>Mensagem: {candidato.applicationText}</div>
                                <button onClick={() => aprovaCandidato(candidato.id)}>Aprovar</button>
                            </CardCandidato>
                        })}
                    </GridCandidatos>
                    <TextoBemVindo>APROVADOS</TextoBemVindo>
                    <GridAprovados>
                        {viagemAprovados.map((aprovado) => {
                            return <CardAprovado>
                                <div>Nome: {aprovado.name}</div>
                                <div>Idade: {aprovado.age}</div>
                                <div>País: {aprovado.country}</div>
                                <div>Profissão: {aprovado.profession}</div>
                                <div>Mensagem: {aprovado.applicationText}</div>
                            </CardAprovado>
                        })}
                    </GridAprovados>    
                </Main>
            </Pagina>
        )
}

export default TripDetailsPage;