// EXERCÍCIO 1
/* Primeiro é determinado que a variável sum tem valor 0, em seguida a cada volta do loop (15 voltas no total) ele acrecenta 1 ao valor do resultado anterior 
e acrescenta esse número "corrigido" à variável sum. Exemplo: primeira volta 1+0=1. Segunda volta: 1 da volta anterior +1 dessa volta acrescentado à sum que era 1, total 3.
Terceira volta: 2 da volta anterior mais 1 dessa volta acrescentado ao valor de sum que já era 3, pra um total de 6. O resulta impresso no console será 105.*/


//EXERCÍCIO 2
/* a. Push adiciona novos valores a arrays. Nesse caso, ele está inserindo itens no array novaLista que era previamente vazio.

b. Esse programa lê o array lista e copia os valores múltiplos de 5 para a const novaLista. O valor impresso no console seria [10, 15, 25, 30]

c. Todos os múltiplos de 3 e 4, respectivamente: [12, 15, 18, 21, 27, 30] e [12]*/


//EXERCÍCIO 3
//a.
// const array = [20, 30, 40, 55, 60, 99, 6]
// maiorValor = 0
// menorValor = 0
// for (let valor of array) {
//     if (valor > maiorValor){
//         maiorValor = valor
//         menorValor = valor
//     }
// for (let valor of array){
//     if (valor < menorValor){
//         menorValor = valor
//     }
// }
// }
// console.log("Maior valor: " + maiorValor + " e menor valor: " + menorValor)

//b.
// const array = [20, 30, 40, 55, 60, 99, 6]
// let novoArray = []
// for (let valor of array){
//     novoArray.push(valor/10)
// }
// console.log(novoArray)

//c.
// const array = [20, 30, 40, 55, 60, 99, 6]
// let novoArray = []
// for (let valor of array){
//     if (valor%2 === 0){
//         novoArray.push(valor)
//     }
// }
// console.log(novoArray)

//d. 
const array = [20, 30, 40, 55, 60, 99, 6]
let novoArray = []
let num = 0
for (let valor of array){
    num += 1
        novoArray.push("O elemento do índex " + num + " é " + valor)
}
console.log(novoArray)