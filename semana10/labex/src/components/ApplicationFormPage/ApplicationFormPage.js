import React from 'react';
import {Formulario, Pagina, LogoLabeX, LogoFormulario, BotaoInscricao, Label, Input, X, Select} from './styles'

const ApplicationFormPage = () => {

    const enviaFormulario = () => {
        alert("Formulário submetido com sucesso. Boa sorte!")
    }

return (
    <Pagina>
        <LogoFormulario>FORMULÁRIO DE INSCRIÇÃO</LogoFormulario>
        <LogoLabeX>Labe<X>X</X></LogoLabeX>
        <Formulario>
            <Label>Viagem</Label>
            <Select>
                <option>Selecione uma viagem</option>
                <option>Opção 1</option>
                <option>Opção 2</option>
                <option>Opção 3</option>
            </Select>
            <Label>Nome</Label>
            <Input></Input>
            <Label>Idade</Label>
            <Input></Input>
            <Label>Profissão</Label>
            <Input></Input>
            <Label>País</Label>
            <Input></Input>
            <Label>Mensagem</Label>
            <Input></Input>
            <BotaoInscricao onClick={enviaFormulario}>ENVIAR INSCRIÇÃO</BotaoInscricao>
        </Formulario>
    </Pagina>
    )
}

export default ApplicationFormPage;