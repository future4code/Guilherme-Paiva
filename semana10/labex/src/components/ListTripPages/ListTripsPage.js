import React from 'react';
import {useHistory} from 'react-router-dom';
import {Pagina, Sidebar, LogoLabeX, LogoAdmin, Copyright, Main, TextoBemVindo, FotoFoguete, X, Header, BotoesSidebar} from './styles'

const ListTripsPage = () => {
    const history = useHistory();

    const goToCreateTripPage = () => {
        history.push("/viagens/criar")
    }

    const goToTripDetailsPage = () => {
        history.push("/viagens/detalhes")
    }

return (
    <Pagina>
        <Sidebar>
            <LogoLabeX>Labe<X>X</X></LogoLabeX>
            <LogoAdmin>Bem-vindo, ADMIN</LogoAdmin>
            <BotoesSidebar onClick={goToCreateTripPage}>Criar nova viagem</BotoesSidebar>
            <BotoesSidebar onClick={goToTripDetailsPage}>Detalhes da viagem</BotoesSidebar>
            <Copyright>© 2020 LabeX - Todos os direitos reservados</Copyright>
        </Sidebar>
        <Main>
            <Header>
                <TextoBemVindo>LISTA DE VIAGENS</TextoBemVindo>
                <FotoFoguete src="https://image.flaticon.com/icons/svg/28/28356.svg"></FotoFoguete>
            </Header>
        </Main>
    </Pagina>
    )
}

export default ListTripsPage;