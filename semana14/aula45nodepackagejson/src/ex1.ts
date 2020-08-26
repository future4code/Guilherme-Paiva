/* a) Utilizamos o comando process.argv, que retorna um array de strings contendo o caminho do node,
 caminho doa arquivo e quaisquer parâmetros que desejarmos passar mais. */

 // b)

const nome: string = process.argv[2]

const idade: number = Number(process.argv[3])

const idadeMais7: number = idade + 7

 console.log(`Ola, ${nome}! Voce tem ${idade} anos.`)

 // c) 

 console.log(`Ola, ${nome}! Voce tem ${idade} anos. Em sete anos voce tera ${idadeMais7}`)