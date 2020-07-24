import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import {Pagina, Sidebar, LogoLabeX, X, LogoAdmin, Main, Copyright, TextoBemVindo, FotoFoguete, Botao, BotaoMesmaPagina, Header, FormularioNovaViagem,
    Logoff, Label, Input, BotaoCriaViagem, Select} from './styles'

const CreateTripPage = () => {
    const history = useHistory();

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guipaiva-turing"
    
    const [nomeViagem, setNomeViagem] = useState("")
    const [planetaViagem, setPlanetaViagem] = useState("")
    const [dataViagem, setDataViagem] = useState("")
    const [descricaoViagem, setDescricaoViagem] = useState("")
    const [duracaoViagem, setDuracaoViagem] = useState("")

    const goToInternalTripsPage = () => {
        history.push("/viagens")
    }

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if (token === null){
            history.push("/login")
        }
    }, [])

    const criaViagem = () => {
        const token = window.localStorage.getItem("token")
        const body = {
            name: nomeViagem,
            planet: planetaViagem,
            date: dataViagem,
            description: descricaoViagem,
            durationInDays: duracaoViagem
        }
        axios.post(`${baseUrl}/trips`, body, {
            headers: {
                auth: token
            }
        }) 
        .then(() => {
            alert("Viagem criada com sucesso!")
            setNomeViagem("")
            setPlanetaViagem("")
            setDataViagem("")
            setDescricaoViagem("")
            setDuracaoViagem("")
        }).catch(error => {
            alert("Por favor preencha todos os campos e tente novamente.")
            console.log(error.message)
        })
    }

    const logoff = () => {
        localStorage.clear("token")
        history.push("/login")
    }

    const onChangeNomeViagem = event => {
        setNomeViagem(event.target.value)
    }
    const onChangePlanetaViagem = event => {
        setPlanetaViagem(event.target.value)
    }
    const onChangeDataViagem = event => {
        setDataViagem(event.target.value)
    }
    const onChangeDescricaoViagem = event => {
        setDescricaoViagem(event.target.value)
    }
    const onChangeDuracaoViagem = event => {
        setDuracaoViagem(event.target.value)
    }

return (
    <Pagina>
        <Sidebar>
            <LogoLabeX>Labe<X>X</X></LogoLabeX>
            <LogoAdmin>Bem vindx, ADMIN</LogoAdmin>
            <Botao onClick={goToInternalTripsPage}>Lista de Viagens</Botao>    
            <BotaoMesmaPagina>Criar nova viagem</BotaoMesmaPagina>
            <Logoff onClick={logoff}>Sair</Logoff>
            <Copyright>© 2020 LabeX - Todos os direitos reservados</Copyright>
        </Sidebar>
        <Main>
            <Header>
                <TextoBemVindo>CRIAR NOVA VIAGEM</TextoBemVindo>
                <FotoFoguete src="https://image.flaticon.com/icons/svg/28/28356.svg"></FotoFoguete>
            </Header>
            <FormularioNovaViagem>
                <Label>Planeta</Label>
                <Select value={planetaViagem} onChange={onChangePlanetaViagem}>
                    <option>Selecione um planeta</option>
                    <option>Mercúrio</option>
                    <option>Vênus</option>
                    <option>Marte</option>
                    <option>Júpiter</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Netuno</option>
                    <option>Plutão</option>
                </Select>
                <Label>Nome da viagem</Label>
                <Input value={nomeViagem} onChange={onChangeNomeViagem} />
                <Label>Data</Label>
                <Input value={dataViagem} onChange={onChangeDataViagem} />
                <Label>Descrição</Label>
                <Input value={descricaoViagem} onChange={onChangeDescricaoViagem} />
                <Label>Duração (dias)</Label>
                <Input value={duracaoViagem} onChange={onChangeDuracaoViagem} />
                <BotaoCriaViagem onClick={criaViagem}>Criar viagem</BotaoCriaViagem>
            </FormularioNovaViagem>
        </Main>
    </Pagina>
    )
}

export default CreateTripPage