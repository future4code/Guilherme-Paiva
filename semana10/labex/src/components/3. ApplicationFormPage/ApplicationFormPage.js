import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Formulario, Pagina, LogoLabeX, LogoFormulario, BotaoInscricao, Label, Input, X, Select} from './styles'

const ApplicationFormPage = () => {
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guipaiva-turing"

    const [arrayViagens, setArrayViagens] = useState([])
    const [viagem, setViagem] = useState('')
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [profissao, setProfissao] = useState('')
    const [pais, setPais] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [id, setId] = useState('')

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
        axios.post(`${baseUrl}/trips/${id}/apply`, body) 
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
    const onChangeId = event => {
        setId(event.target.value)
        setViagem(event.target.value)
    }

    return (
        <Pagina>
            <LogoFormulario>FORMULÁRIO DE INSCRIÇÃO</LogoFormulario>
            <LogoLabeX>Labe<X>X</X></LogoLabeX>
            <Formulario>
                <Label>Viagem</Label>
                <Select value={viagem} onChange={onChangeId}>
                    <option>Selecione uma viagem</option>
                    {arrayViagens.map((viagem) => {
                        return <option value={viagem.id}>{viagem.name}</option>
                    })}
                </Select>
                <Label>Nome</Label>
                <Input value={nome} onChange={onChangeNome} required />
                <Label>Idade</Label>
                <Input value={idade} onChange={onChangeIdade} required />
                <Label>Profissão</Label>
                <Input value={profissao} onChange={onChangeProfissao} required />
                <Label>País</Label>
                <Select value={pais} onChange={onChangePais} required>
                    <option>Selecione seu país</option>
                    <option>Afghanistan</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                    <option>American Samoa</option>
                    <option>Andorra</option>
                    <option>Angola</option>
                    <option>Anguilla</option>
                    <option>Antigua & Barbuda</option>
                    <option>Argentina</option>
                    <option>Armenia</option>
                    <option>Aruba</option>
                    <option>Australia</option>
                    <option>Austria</option>
                    <option>Azerbaijan</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                    <option>Bangladesh</option>
                    <option>Barbados</option>
                    <option>Belarus</option>
                    <option>Belgium</option>
                    <option>Belize</option>
                    <option>Benin</option>
                    <option>Bermuda</option>
                    <option>Bhutan</option>
                    <option>Bolivia</option>
                    <option>Bonaire</option>
                    <option>Bosnia & Herzegovina</option>
                    <option>Botswana</option>
                    <option>Brazil</option>
                    <option>British Indian Ocean Ter</option>
                    <option>Brunei</option>
                    <option>Bulgaria</option>
                    <option>Burkina Faso</option>
                    <option>Burundi</option>
                    <option>Cambodia</option>
                    <option>Cameroon</option>
                    <option>Canada</option>
                    <option>Canary Islands</option>
                    <option>Cape Verde</option>
                    <option>Cayman Islands</option>
                    <option>Central African Republic</option>
                    <option>Chad</option>
                    <option>Channel Islands</option>
                    <option>Chile</option>
                    <option>China</option>
                    <option>Christmas Island</option>
                    <option>Cocos Island</option>
                    <option>Colombia</option>
                    <option>Comoros</option>
                    <option>Congo</option>
                    <option>Cook Islands</option>
                    <option>Costa Rica</option>
                    <option>Cote DIvoire</option>
                    <option>Croatia</option>
                    <option>Cuba</option>
                    <option>Curacao</option>
                    <option>Cyprus</option>
                    <option>Czech Republic</option>
                    <option>Denmark</option>
                    <option>Djibouti</option>
                    <option>Dominica</option>
                    <option>Dominican Republic</option>
                    <option>East Timor</option>
                    <option>Ecuador</option>
                    <option>Egypt</option>
                    <option>El Salvador</option>
                    <option>Equatorial Guinea</option>
                    <option>Eritrea</option>
                    <option>Estonia</option>
                    <option>Ethiopia</option>
                    <option>Falkland Islands</option>
                    <option>Faroe Islands</option>
                    <option>Fiji</option>
                    <option>Finland</option>
                    <option>France</option>
                    <option>French Guiana</option>
                    <option>French Polynesia</option>
                    <option>French Southern Ter</option>
                    <option>Gabon</option>
                    <option>Gambia</option>
                    <option>Georgia</option>
                    <option>Germany</option>
                    <option>Ghana</option>
                    <option>Gibraltar</option>
                    <option>Great Britain</option>
                    <option>Greece</option>
                    <option>Greenland</option>
                    <option>Grenada</option>
                    <option>Guadeloupe</option>
                    <option>Guam</option>
                    <option>Guatemala</option>
                    <option>Guinea</option>
                    <option>Guyana</option>
                    <option>Haiti</option>
                    <option>Hawaii</option>
                    <option>Honduras</option>
                    <option>Hong Kong</option>
                    <option>Hungary</option>
                    <option>Iceland</option>
                    <option>Indonesia</option>
                    <option>India</option>
                    <option>Iran</option>
                    <option>Iraq</option>
                    <option>Ireland</option>
                    <option>Isle of Man</option>
                    <option>Israel</option>
                    <option>Italy</option>
                    <option>Jamaica</option>
                    <option>Japan</option>
                    <option>Jordan</option>
                    <option>Kazakhstan</option>
                    <option>Kenya</option>
                    <option>Kiribati</option>
                    <option>Korea North</option>
                    <option>Korea South</option>
                    <option>Kuwait</option>
                    <option>Kyrgyzstan</option>
                    <option>Laos</option>
                    <option>Latvia</option>
                    <option>Lebanon</option>
                    <option>Lesotho</option>
                    <option>Liberia</option>
                    <option>Libya</option>
                    <option>Liechtenstein</option>
                    <option>Lithuania</option>
                    <option>Luxembourg</option>
                    <option>Macau</option>
                    <option>Macedonia</option>
                    <option>Madagascar</option>
                    <option>Malaysia</option>
                    <option>Malawi</option>
                    <option>Maldives</option>
                    <option>Mali</option>
                    <option>Malta</option>
                    <option>Marshall Islands</option>
                    <option>Martinique</option>
                    <option>Mauritania</option>
                    <option>Mauritius</option>
                    <option>Mayotte</option>
                    <option>Mexico</option>
                    <option>Midway Islands</option>
                    <option>Moldova</option>
                    <option>Monaco</option>
                    <option>Mongolia</option>
                    <option>Montserrat</option>
                    <option>Morocco</option>
                    <option>Mozambique</option>
                    <option>Myanmar</option>
                    <option>Nambia</option>
                    <option>Nauru</option>
                    <option>Nepal</option>
                    <option>Netherland Antilles</option>
                    <option>Netherlands (Holland, Europe)</option>
                    <option>Nevis</option>
                    <option>New Caledonia</option>
                    <option>New Zealand</option>
                    <option>Nicaragua</option>
                    <option>Niger</option>
                    <option>Nigeria</option>
                    <option>Niue</option>
                    <option>Norfolk Island</option>
                    <option>Norway</option>
                    <option>Oman</option>
                    <option>Pakistan</option>
                    <option>Palau Island</option>
                    <option>Palestine</option>
                    <option>Panama</option>
                    <option>Papua New Guinea</option>
                    <option>Paraguay</option>
                    <option>Peru</option>
                    <option>Philippines</option>
                    <option>Pitcairn Island</option>
                    <option>Poland</option>
                    <option>Portugal</option>
                    <option>Puerto Rico</option>
                    <option>Qatar</option>
                    <option>Republic of Montenegro</option>
                    <option>Republic of Serbia</option>
                    <option>Reunion</option>
                    <option>Romania</option>
                    <option>Russia</option>
                    <option>Rwanda</option>
                    <option>St Barthelemy</option>
                    <option>St Eustatius</option>
                    <option>St Helena</option>
                    <option>St Kitts-Nevis</option>
                    <option>St Lucia</option>
                    <option>St Maarten</option>
                    <option>St Pierre & Miquelon</option>
                    <option>St Vincent & Grenadines</option>
                    <option>Saipan</option>
                    <option>Samoa</option>
                    <option>Samoa American</option>
                    <option>San Marino</option>
                    <option>Sao Tome & Principe</option>
                    <option>Saudi Arabia</option>
                    <option>Senegal</option>
                    <option>Seychelles</option>
                    <option>Sierra Leone</option>
                    <option>Singapore</option>
                    <option>Slovakia</option>
                    <option>Slovenia</option>
                    <option>Solomon Islands</option>
                    <option>Somalia</option>
                    <option>South Africa</option>
                    <option>Spain</option>
                    <option>Sri Lanka</option>
                    <option>Sudan</option>
                    <option>Suriname</option>
                    <option>Swaziland</option>
                    <option>Sweden</option>
                    <option>Switzerland</option>
                    <option>Syria</option>
                    <option>Tahiti</option>
                    <option>Taiwan</option>
                    <option>Tajikistan</option>
                    <option>Tanzania</option>
                    <option>Thailand</option>
                    <option>Togo</option>
                    <option>Tokelau</option>
                    <option>Tonga</option>
                    <option>Trinidad & Tobago</option>
                    <option>Tunisia</option>
                    <option>Turkey</option>
                    <option>Turkmenistan</option>
                    <option>Turks & Caicos Is</option>
                    <option>Tuvalu</option>
                    <option>Uganda</option>
                    <option>United Kingdom</option>
                    <option>Ukraine</option>
                    <option>United Arab Emirates</option>
                    <option>United States of America</option>
                    <option>Uruguay</option>
                    <option>Uzbekistan</option>
                    <option>Vanuatu</option>
                    <option>Vatican City State</option>
                    <option>Venezuela</option>
                    <option>Vietnam</option>
                    <option>Virgin Islands (Brit)</option>
                    <option>Virgin Islands (USA)</option>
                    <option>Wake Island</option>
                    <option>Wallis & Futana Is</option>
                    <option>Yemen</option>
                    <option>Zaire</option>
                    <option>Zambia</option>
                    <option>Zimbabwe</option>
                </Select>
                <Label>Mensagem</Label>
                <Input value={mensagem} onChange={onChangeMensagem} required />
                <BotaoInscricao onClick={inscreveViagem}>ENVIAR INSCRIÇÃO</BotaoInscricao>
            </Formulario>
        </Pagina>
    )
}

export default ApplicationFormPage;