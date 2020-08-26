const operacao: string = process.argv[2]

const valor1: number = Number(process.argv[3])

const valor2: number = Number(process.argv[4])

switch(operacao){
  case "soma":
    console.log ("Resposta: ", valor1 + valor2)
    break
  case "subt":
    console.log ("Resposta: ", valor1 - valor2)
    break
  case "div":
    console.log ("Resposta: ", valor1 / valor2)
    break
  case "mult":
    console.log ("Resposta: ", valor1 * valor2)
    break    
}