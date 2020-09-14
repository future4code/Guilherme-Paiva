import * as fs from 'fs'
import * as moment from 'moment'

moment.locale("pt-br")

type transacao = [{
    valor: number,
    data: any,
    descricao: string
}]

type conta = {
    nome: string,
    cpf: number,
    dataNascimento: any,
    saldo: number
    extrato: transacao[]
}

const usuario: conta = {
    nome: process.argv[2],
    cpf: Number(process.argv[3]),
    dataNascimento: process.argv[4],
    saldo: 0,
    extrato: []
}

const criaConta: string = JSON.stringify(usuario, null, 2)
   try {
       fs.writeFileSync('./data.json', criaConta)
} catch (error) {
    console.log("Erro ao salvar os dados: " + error.message)
}

console.log(usuario)