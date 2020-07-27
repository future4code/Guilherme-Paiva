import React from 'react';
import {useHistory} from 'react-router-dom';
import {Pagina, LogoLabeX, SubLogo, FotoFoguete, LogoInscricao, X, BotaoInscricao, BotaoLogin} from './styles'

const HomePage = () => {
    const history = useHistory();

    const goToListTripsPage = () => {
        history.push("/listadeviagens")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

return (
    <Pagina>
        <LogoLabeX>Labe<X>X</X></LogoLabeX>
        <SubLogo>ENCONTRE AS MELHORES VIAGENS ESPACIAIS!</SubLogo>
        <FotoFoguete src="https://image.flaticon.com/icons/svg/28/28356.svg"></FotoFoguete>
        <LogoInscricao>Conheça nossas viagens e faça já sua inscrição!</LogoInscricao>
        <BotaoInscricao onClick={goToListTripsPage}>QUERO IR PARA O ESPAÇO!</BotaoInscricao>
        <BotaoLogin onClick={goToLoginPage}>Admin Login</BotaoLogin>
    </Pagina>
    )
}

export default HomePage;