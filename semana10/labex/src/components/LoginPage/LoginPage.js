import React from 'react';
import {useHistory} from 'react-router-dom';
import {Sidebar, Main, Pagina, LogoLabeX, LogoAdmin, X, BotaoLogin, Label, Input, FotoFoguete, TextoBemVindo, Copyright} from './styles'

const LoginPage = () => {
    const history = useHistory();

    const goToListTripsPage = () => {
        history.push("/viagens/lista")
    }

return (
    <Pagina>
        <Sidebar>
            <LogoLabeX>Labe<X>X</X></LogoLabeX>
            <LogoAdmin>ADMIN LOGIN</LogoAdmin>
            <Label>Usuário</Label>
            <Input />
            <Label>Senha</Label>
            <Input />
            <BotaoLogin onClick={goToListTripsPage}>Login</BotaoLogin>
            <Copyright>© 2020 LabeX - Todos os direitos reservados</Copyright>
        </Sidebar>
        <Main>
            <TextoBemVindo>Bem vindo!</TextoBemVindo>
            <FotoFoguete src="https://image.flaticon.com/icons/svg/28/28356.svg"></FotoFoguete>
            <TextoBemVindo>Por favor, digite seu usuário e senha ao lado para logar.</TextoBemVindo>
        </Main>
    </Pagina>
    )
}

export default LoginPage;