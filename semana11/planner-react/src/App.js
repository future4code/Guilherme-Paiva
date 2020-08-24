import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Pagina, GridDias, CardDia, NomeDia, TituloPagina, ItemLista, TituloNovaTarefa, InputNovaTarefa, BotaoNovaTarefa,
   CardNovaTarefa, SelectDia, InputSelect, CardFinde, NomeDiaFinde, BotaoDivNovaTarefa, Opcoes} from './styles'

function App() {

  const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/:planner-turing-guipaiva'
  
  const [textoTarefa, setTextoTarefa] = useState('')
  const [diaTarefa, setDiaTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])
  const [divNovaTarefa, setDivNovaTarefa] = useState(false)
  const [idTarefa, setIdTarefa] = useState('')

  useEffect(() => {
    mostraTarefas()
  }, [])

  const criaTarefa = () => {
    if (diaTarefa === ''){
      alert('Por favor selecione um dia da semana')
    }else{
      const body = {
        text: textoTarefa,
        day: diaTarefa
      }
      axios.post(`${baseUrl}`, body)
      .then(() => {
        setTextoTarefa('')
        setDiaTarefa('')
        mostraTarefas()
        mostraCardNovaTarefa()
      }).catch(error => {
        alert('Erro ao criar a tarefa.')
        console.log(error.message)
      })
    }
  }

  const deletaTarefa = (idTarefa) => {
    axios.delete(`${baseUrl}/${idTarefa}`)
    .then(() => {
      mostraTarefas()
    }).catch((error) => {
      console.log(error.message)
    })
  }

  const mostraTarefas = () => {
    axios.get(`${baseUrl}`)
    .then(response => {
        setTarefas(response.data)
    }).catch(error => {
        console.log(error.message)
    })
  }

  const marcaCompleto = () => {
    alert('Não implementado :(')
  }

  const abreOpcoes = (keyTarefa) => {
    if (idTarefa === ''){
      setIdTarefa(keyTarefa)
    }else{
      setIdTarefa('')
    }
  }

  const mostraCardNovaTarefa = () => {
    setDivNovaTarefa(!divNovaTarefa)
  }

  const onChangeTextoTarefa = event => {
    setTextoTarefa(event.target.value)
  }

  const onChangeDiaTarefa = event => {
    setDiaTarefa(event.target.value)
  }

  return (
    <Pagina>
      <TituloPagina>PLANNER SEMANAL</TituloPagina>
      <GridDias>
        <CardDia>
          <NomeDia>Segunda</NomeDia>
          <ul>
            {tarefas.map((tarefa) => {
              if (tarefa.day === "Segunda-feira"){
                return (
                  <ItemLista key={tarefa.id} onClick={() => abreOpcoes(tarefa.id)}>{tarefa.text}
                    {idTarefa === tarefa.id ? <Opcoes><span onClick={() => marcaCompleto(tarefa.id)}>Marcar como completo</span>
                    <span onClick={() => deletaTarefa(tarefa.id)}>Deletar tarefa</span></Opcoes> : <div></div>}
                  </ItemLista>
                )}
              })}
          </ul>
        </CardDia>
        <CardDia>
          <NomeDia>Terça</NomeDia>
          <ul>
            {tarefas.map((tarefa) => {
              if (tarefa.day === "Terça-feira"){
                return (
                  <ItemLista key={tarefa.id} onClick={() => abreOpcoes(tarefa.id)}>{tarefa.text}{ idTarefa === tarefa.id ? 
                  <Opcoes><span onClick={marcaCompleto}>Marcar como completo</span>
                    <span onClick={() => deletaTarefa(tarefa.id)}>Deletar tarefa</span>
                    </Opcoes> : <div></div>}
                    </ItemLista>
                )}
              })}  
          </ul>
        </CardDia>
        <CardDia>
          <NomeDia>Quarta</NomeDia>
          <ul>
            {tarefas.map((tarefa) => {
              if (tarefa.day === "Quarta-feira"){
                return (
                  <ItemLista key={tarefa.id} onClick={() => abreOpcoes(tarefa.id)}>{tarefa.text}{ idTarefa === tarefa.id ? 
                  <Opcoes><span onClick={marcaCompleto}>Marcar como completo</span>
                    <span onClick={() => deletaTarefa(tarefa.id)}>Deletar tarefa</span>
                    </Opcoes> : <div></div>}
                    </ItemLista>
                )}
              })}  
          </ul>
        </CardDia>
        <CardDia>
          <NomeDia>Quinta</NomeDia>
          <ul>
            {tarefas.map((tarefa) => {
              if (tarefa.day === "Quinta-feira"){
                return (
                  <ItemLista key={tarefa.id} onClick={() => abreOpcoes(tarefa.id)}>{tarefa.text}{ idTarefa === tarefa.id ? 
                  <Opcoes><span onClick={marcaCompleto}>Marcar como completo</span>
                    <span onClick={() => deletaTarefa(tarefa.id)}>Deletar tarefa</span>
                    </Opcoes> : <div></div>}
                    </ItemLista>
                )}
              })}  
          </ul>
        </CardDia>
        <CardDia>
          <NomeDia>Sexta</NomeDia>
          <ul>
            {tarefas.map((tarefa) => {
              if (tarefa.day === "Sexta-feira"){
                return (
                  <ItemLista key={tarefa.id} onClick={() => abreOpcoes(tarefa.id)}>{tarefa.text}{ idTarefa === tarefa.id ? 
                  <Opcoes><span onClick={marcaCompleto}>Marcar como completo</span>
                    <span onClick={() => deletaTarefa(tarefa.id)}>Deletar tarefa</span>
                    </Opcoes> : <div></div>}
                    </ItemLista>
                )}
              })}  
          </ul>
        </CardDia>
        <CardFinde>
          <NomeDiaFinde>Sábado</NomeDiaFinde>
          <ul>
            {tarefas.map((tarefa) => {
              if (tarefa.day === "Sábado"){
                return (
                  <ItemLista key={tarefa.id} onClick={() => abreOpcoes(tarefa.id)}>{tarefa.text}{ idTarefa === tarefa.id ? 
                  <Opcoes><span onClick={marcaCompleto}>Marcar como completo</span>
                    <span onClick={() => deletaTarefa(tarefa.id)}>Deletar tarefa</span>
                    </Opcoes> : <div></div>}
                    </ItemLista>
                )}
              })}  
          </ul>
        </CardFinde>
        <CardFinde>
          <NomeDiaFinde>Domingo</NomeDiaFinde>
          <ul>
            {tarefas.map((tarefa) => {
              if (tarefa.day === "Domingo"){
                return (
                  <ItemLista key={tarefa.id} onClick={() => abreOpcoes(tarefa.id)}>{tarefa.text}{ idTarefa === tarefa.id ? 
                  <Opcoes><span onClick={marcaCompleto}>Marcar como completo</span>
                    <span onClick={() => deletaTarefa(tarefa.id)}>Deletar tarefa</span>
                    </Opcoes> : <div></div>}
                    </ItemLista>
                )}
              })}  
          </ul>
        </CardFinde>
      </GridDias>
      { divNovaTarefa ? 
      <CardNovaTarefa>
        <TituloNovaTarefa>ADICIONAR NOVA TAREFA</TituloNovaTarefa>
        <InputSelect>
          <InputNovaTarefa value={textoTarefa} onChange={onChangeTextoTarefa} />
          <SelectDia value={diaTarefa} onChange={onChangeDiaTarefa}>
            <option>Selecione o dia</option>
            <option>Segunda-feira</option>
            <option>Terça-feira</option>
            <option>Quarta-feira</option>
            <option>Quinta-feira</option>
            <option>Sexta-feira</option>
            <option>Sábado</option>
            <option>Domingo</option>
          </SelectDia>
        </InputSelect>
        <BotaoNovaTarefa onClick={criaTarefa}>ENVIAR</BotaoNovaTarefa>
      </CardNovaTarefa> : <div></div>}
      <BotaoDivNovaTarefa onClick={mostraCardNovaTarefa}>+</BotaoDivNovaTarefa>
    </Pagina>
  );
}

export default App;
