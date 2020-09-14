import * as fs from 'fs'
import * as moment from 'moment'

moment.locale("pt-br")

const listaContas: string = fs.readFileSync('./data.json').toString()
    JSON.parse(listaContas)

console.log(listaContas)