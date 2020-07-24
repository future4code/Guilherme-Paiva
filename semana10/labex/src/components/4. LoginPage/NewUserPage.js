import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {Sidebar, Main, Pagina, LogoLabeX, LogoAdmin, X, BotaoCriarUsuario, Label, Input, FotoFoguete,
     TextoBemVindo, Copyright, TextoBemVindo2} from './styles'
import axios from 'axios';

const LoginPage = () => {
    const history = useHistory();

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guipaiva-turing"
    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const criarUsuario = () => {
        const body = {
            email: email,
            password: senha
        }
        axios.post(`${baseUrl}/signup`, body)
        .then(() => {
            alert("Usuário criado com sucesso!")
            history.push("/login")
        }).catch((error) => {
            console.log(error.message)
        })       
    }

    const onChangeEmail = event => {
        setEmail(event.target.value)
    }
    const onChangeSenha = event => {
        setSenha(event.target.value)
    }

    return (
        <Pagina>
            <Sidebar>
                <LogoLabeX>Labe<X>X</X></LogoLabeX>
                <LogoAdmin>ADMIN LOGIN</LogoAdmin>
                <Label>Digite seu email</Label>
                <Input value={email} onChange={onChangeEmail} />
                <Label>Escolha uma senha</Label>
                <Input type="password" value={senha} onChange={onChangeSenha} />
                <Label>Confirme sua senha</Label>
                <Input type="password" />
                <BotaoCriarUsuario onClick={criarUsuario}>CRIAR USUÁRIO</BotaoCriarUsuario>
                <Copyright>© 2020 LabeX - Todos os direitos reservados</Copyright>
            </Sidebar>
            <Main>
                <TextoBemVindo>Bem vindo!</TextoBemVindo>
                <FotoFoguete src="https://image.flaticon.com/icons/svg/28/28356.svg"></FotoFoguete>
                <TextoBemVindo2>Por favor, digite um email e senha ao lado para criar um novo usuário.</TextoBemVindo2>
            </Main>
        </Pagina>
    )
}

export default LoginPage