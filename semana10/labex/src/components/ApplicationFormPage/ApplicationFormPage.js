import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Formulario, Pagina, LogoLabeX, LogoFormulario, BotaoInscricao, Label, Input, X, Select} from './styles'

const ApplicationFormPage = (props) => {

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guipaiva-turing"

    const [arrayViagens, setArrayViagens] = useState([])
    const [viagem, setViagem] = useState('')
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [profissao, setProfissao] = useState('')
    const [pais, setPais] = useState('')
    const [mensagem, setMensagem] = useState('')

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

    const inscreveViagem = () => {
        const body = {
            name: nome,
            age: idade,
            applicationText: mensagem,
            profession: profissao,
            country: pais
        }
        axios.post(`${baseUrl}/trips/${viagem.id}/apply`, body) 
        .then(() => {
            alert("Formulário submetido com sucesso. Boa sorte!")
            setViagem("")
            setNome("")
            setIdade("")
            setProfissao("")
            setPais("")
            setMensagem("")
        }).catch(error => {
            alert("Por favor preencha todos os campos e tente novamente.")
            console.log(error.message)
        })
    }

    const onChangeViagem = event => {
        setViagem(event.target.value)
    }
    const onChangeNome = event => {
        setNome(event.target.value)
    }
    const onChangeIdade = event => {
        setIdade(event.target.value)
    }
    const onChangeProfissao = event => {
        setProfissao(event.target.value)
    }
    const onChangePais = event => {
        setPais(event.target.value)
    }
    const onChangeMensagem = event => {
        setMensagem(event.target.value)
    }

    return (
        <Pagina>
            <LogoFormulario>FORMULÁRIO DE INSCRIÇÃO</LogoFormulario>
            <LogoLabeX>Labe<X>X</X></LogoLabeX>
            <Formulario>
                <Label>Viagem</Label>
                <Select value={viagem} onChange={onChangeViagem}>
                    <option>Selecione uma viagem</option>
                    {arrayViagens.map((viagem) => {
                        return <option>{viagem.name}</option>
                    })}
                </Select>
                <Label>Nome</Label>
                <Input value={nome} onChange={onChangeNome} />
                <Label>Idade</Label>
                <Input value={idade} onChange={onChangeIdade} />
                <Label>Profissão</Label>
                <Input value={profissao} onChange={onChangeProfissao} />
                <Label>País</Label>
                <Input value={pais} onChange={onChangePais} />
                <Label>Mensagem</Label>
                <Input value={mensagem} onChange={onChangeMensagem} />
                <BotaoInscricao onClick={inscreveViagem}>ENVIAR INSCRIÇÃO</BotaoInscricao>
            </Formulario>
        </Pagina>
    )
}

export default ApplicationFormPage;