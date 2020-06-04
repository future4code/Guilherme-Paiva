// EXERCÍCIO 1
/* Ele pede ao usuário para digitar um número, em seguida converte a string da resposta para um número, daí caso o resto da divisão do número por 2 seja igual a 0, ele printa "Passou no teste".
 Caso o resto da divisão do número digitado seja diferente de 0, ele printa na tela "Não passou no teste."*/


 // EXERCÍCIO 2
/* a. O usuário digita a fruta e o sistema devolve o preço que a fruta custa no supermercado.

b. O preço da fruta Maçã é R$ 2.25

c. 2 laranjas R$7, 1 maçã R$2.25, 3 bananas R$15, 1 uva R$0.30. Total R$24,55.

d. O preço da fruta Pêra é R$ 5. Sem o break, primeiro a variável 'preço' teria o valor 5.5 e depois seria alterada para 5.*/


// EXERCÍCIO 3
/*A mensagem no terminal será um erro, dizendo que a variável 'mensagem' não foi definida. Isso acontece porque o console.log está fora do escopo do if, onde o valor da variável foi definida. 
Um escopo pai não tem acesso as informações do escopo filho. Para corrigir, basta mover o console.log para dentro do bloco do if.*/


// EXERCÍCIO 4
//a.
// const primeiroNum = prompt("Digite o primeiro número")
// const segundoNum = prompt("Digite o segundo número")
// Number(primeiroNum)
// Number(segundoNum)
// if (primeiroNum > segundoNum) {
//     console.log(primeiroNum, segundoNum)
// }
// if (segundoNum > primeiroNum) {
//     console.log(segundoNum, primeiroNum)
// }
/* Se dois números forem iguais, o programa não dá nenhum tipo de feedback. Simplesmente não imprime nada na tela.*/

//b.
// const primeiroNum = prompt("Digite o primeiro número")
// const segundoNum = prompt("Digite o segundo número")
// const terceiroNum = prompt("Digite agora o terceiro número")
// Number(primeiroNum)
// Number(segundoNum)
// Number(terceiroNum)
// if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
//     if (segundoNum > terceiroNum) {
//         console.log(primeiroNum, segundoNum, terceiroNum)
//     } else {
//         console.log(primeiroNum, terceiroNum, segundoNum)
//     }
// }
// if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
//     if (primeiroNum > terceiroNum) {
//         console.log(segundoNum, primeiroNum, terceiroNum)
//     } else {
//         console.log(segundoNum, terceiroNum, primeiroNum)
//     }
// }
// if (terceiroNum > primeiroNum && terceiroNum > segundoNum) {
//     if (primeiroNum > segundoNum) {
//         console.log(terceiroNum, primeiroNum, segundoNum)
//     } else {
//         console.log(terceiroNum, segundoNum, primeiroNum)
//     }
// }
/* Se os três números forem iguais, novamente nada acontece. Não há nenhum feedback no console.*/

//c.
// const primeiroNum = prompt("Digite o primeiro número")
// const segundoNum = prompt("Digite o segundo número")
// const terceiroNum = prompt("Digite agora o terceiro número")
// Number(primeiroNum)
// Number(segundoNum)
// Number(terceiroNum)
// if (primeiroNum === segundoNum & segundoNum === terceiroNum) {
//     console.log("Insira pelo menos um número diferente")
// }
// if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
//     if (segundoNum > terceiroNum) {
//         console.log(primeiroNum, segundoNum, terceiroNum)
//     } else {
//         console.log(primeiroNum, terceiroNum, segundoNum)
//     }
// }
// if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
//     if (primeiroNum > terceiroNum) {
//         console.log(segundoNum, primeiroNum, terceiroNum)
//     } else {
//         console.log(segundoNum, terceiroNum, primeiroNum)
//     }
// }
// if (terceiroNum > primeiroNum && terceiroNum > segundoNum) {
//     if (primeiroNum > segundoNum) {
//         console.log(terceiroNum, primeiroNum, segundoNum)
//     } else {
//         console.log(terceiroNum, segundoNum, primeiroNum)
//     }
// }


// // EXERCÍCIO 5
// let ossos = prompt(
//     "Bem-vindo ao ZooQuiz! Responda todas as perguntas apenas com sim ou não. Vamos" +
//     " começar! Seu animal possui ossos?"
// )
// let pelos = prompt("Seu animal possui pelos?")
// let racional = prompt("Seu animal é racional?")
// let penas = prompt("Seu animal possui penas?")
// let terrestre = prompt("Seu animal é terrestre?")
// let ambaqua = prompt("Seu animal passa parte da vida em ambiente aquático?")
// if (ossos === "não") {
//     console.log("Seu animal é um invertebrado!")
// } else if (pelos === "sim") {
//     if (racional === "sim") {
//         console.log("Seu animal é um ser humano!")
//     } else {
//         console.log("Seu animal é um mamífero não humano!")
//     }
// } else if (pelos === "não") {
//     if (penas === "sim") {
//         console.log("Seu animal é uma ave!")
//     } else if (terrestre === "não") {
//         console.log("Seu animal é um peixe!")
//     } else if (ambaqua === "sim") {
//         console.log("Seu animal é um anfíbio!")
//     } else {
//         console.log("Seu animal é um réptil!")
//     }
// }


// DESAFIO
let nome = prompt("Digite seu nome completo:")
let tipoJogo = prompt(
    "Qual tipo de jogo você quer assistir? Digite IN para internacional ou DO para " +
    "doméstico"
)
let etapaJogo = prompt(
    "Qual etapa você quer assistir? Digite SF para semi-final, DT para terceiro lug" +
    "ar ou FI para final"
)
let catJogo = prompt(
    "Qual a categoria do jogo que você quer assisir? Escolha entre 1, 2, 3 ou 4"
)
let quantIngresso = prompt("Quantos ingressos você quer comprar?")
let valorIng
Number(quantIngresso)
if (tipoJogo === "DO") {
    tipoJogo = "Nacional"
} else {
    tipoJogo = "Internacional"
}
if (etapaJogo === "SF") {
    etapaJogo = "Semi-final"
} else if (etapaJogo === "DT") {
    etapaJogo = "Disputa do terceiro lugar"
} else if (etapaJogo === "FI") {
    etapaJogo = "Final"
}
if (etapaJogo === "Semi-final"){
    if (catJogo === "1"){
        valorIng = 1320
    }else if (catJogo === "2"){
        valorIng = 880
    }else if (catJogo === "3"){
        valorIng = 550
    }else if (catJogo === "4"){
        valorIng = 220
    }
} 
if (etapaJogo === "Disputa do terceiro lugar"){
    if (catJogo === "1"){
        valorIng = 660
    }else if (catJogo === "2"){
        valorIng = 440
    }else if (catJogo === "3"){
        valorIng = 330
    }else if (catJogo === "4"){
        valorIng = 170
    }
}
if (etapaJogo === "Final"){
    if (catJogo === "1"){
        valorIng = 1980
    }else if (catJogo === "2"){
        valorIng = 1320
    }else if (catJogo === "3"){
        valorIng = 880
    }else if (catJogo === "4"){
        valorIng = 330
    }
}
Number(valorIng)
let valorTotal = valorIng*quantIngresso
if (tipoJogo === "Nacional"){ 
    console.log(
        "---Dados da compra---\nNome completo: " + nome + "\nTipo do jogo: " +
        tipoJogo + "\nEtapa do jogo: " + etapaJogo + "\nCategoria: " + catJogo + "\nQua" +
        "ntidade de Ingressos: " + quantIngresso + " ingressos\n---Valores---\nValor do" +
        " Ingresso: R$ " + valorIng + "\nValor total: R$ " + valorTotal
    )
}else{
    valorIng = valorIng*4.10
    valorTotal = valorTotal*4.10
    console.log(
        "---Dados da compra---\nNome completo: " + nome + "\nTipo do jogo: " +
        tipoJogo + "\nEtapa do jogo: " + etapaJogo + "\nCategoria: " + catJogo + "\nQua" +
        "ntidade de Ingressos: " + quantIngresso + " ingressos\n---Valores---\nValor do" +
        " Ingresso: US$ " + valorIng + "\nValor total: US$ " + valorTotal
    )
}