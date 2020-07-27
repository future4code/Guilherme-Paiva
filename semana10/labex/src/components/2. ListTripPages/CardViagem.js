import React from 'react'
import {Card, NomeViagem, DescricaoViagem, DuracaoViagem, SaidaViagem, BotaoCadastro, PlanetaViagem} from './styles'

const CardViagem = (props) => {
    return (
        <Card>
            <PlanetaViagem>{props.planetaViagem}</PlanetaViagem>
            <NomeViagem>{props.nomeViagem}</NomeViagem>
            <DescricaoViagem>{props.descricaoViagem}</DescricaoViagem>
            <DuracaoViagem>Duração: {props.duracaoViagem} dias</DuracaoViagem>
            <SaidaViagem>Data da saída: {props.dataViagem}</SaidaViagem>
            <BotaoCadastro onClick={props.mudaPaginaInscricao}>Quero me cadastrar!</BotaoCadastro>
        </Card>
    )
    
}

export default CardViagem