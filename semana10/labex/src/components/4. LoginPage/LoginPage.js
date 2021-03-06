import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {Sidebar, Main, Pagina, LogoLabeX, LogoAdmin, X, BotaoLogin, Label, Input, FotoFoguete, TextoBemVindo, Copyright, CriarUsuario} from './styles'
import axios from 'axios';

const LoginPage = () => {
    const history = useHistory();

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guipaiva-turing"
    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const goToInternalTripsPage = () => {
        const body = {
            email: email,
            password: senha
        }
        axios.post(`${baseUrl}/login`, body)
        .then((response) => {
            window.localStorage.setItem("token", response.data.token)
            history.push("/viagens")
        }).catch((error) => {
            alert("Dados incorretos, tente novamente!")
            console.log(error.message)
            setEmail("")
            setSenha("")
        })
    }

    const goToNewUserPage = () => {
        history.push("/login/criar")
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
            <Label>Email</Label>
            <Input value={email} onChange={onChangeEmail} />
            <Label>Senha</Label>
            <Input type="password" value={senha} onChange={onChangeSenha} />
            <BotaoLogin onClick={goToInternalTripsPage}>LOGIN</BotaoLogin>
            <CriarUsuario onClick={goToNewUserPage}>Criar novo usuário</CriarUsuario>
            <Copyright>© 2020 LabeX - Todos os direitos reservados</Copyright>
        </Sidebar>
        <Main>
            <TextoBemVindo>Bem vindo!</TextoBemVindo>
            <FotoFoguete src="https://image.flaticon.com/icons/svg/28/28356.svg"></FotoFoguete>
            <TextoBemVindo>Por favor, digite seu email e senha ao lado para logar.</TextoBemVindo>
        </Main>
    </Pagina>
    )
}

export default LoginPage