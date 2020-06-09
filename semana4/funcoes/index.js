// EXERCICIO 1
/*a. Determinando que quantidade seja 2, i entra no segundo for com valor 0, daí j não tem incremento e permanece também 0, portanto não há push nenhum para o array que foi criado. Na segunda volta do primeiro for,
o valor de i já incrementado de 2 é igual ao valor de quantidade que tinhamos determinado, portanto não preenche os requisitos do for e termina a função. 
Temos então que o resultado da função é um array vazio (array[]).*/

/*b. Sendo 5 o valor de quantidade, na primeira volta novamente nada acontece. Em seguida, i é incrementado de 2 e agora sim preenche os requisitos (2 é menor que 5) então a função faz o push do primeiro número
para o array, 0, já que ele ainda não foi incrementado. Ainda dentro do segundo for, como 0 é menor que i (que é 2 no momento), j é incrementado em 1 e esse número entra na segunda posição do array. Novamente
incrementamos 1, agora temos j valendo 2 que é igual a i, então não é feito o push e voltamos ao primeiro for. i é incrementado de mais 2 e agora vale 4 e o processo se repete no segundo for, entrando os seguintes
 valores: 0, 1, 2 e 3. Quando incrementamos 3 para 4, ele já não é mais válido para o push e voltamos ao primeiro for. i é incrementado para 6 e passa além do valor definido para quantidade, portanto a função acaba.
 O resultado que temos é o array [0, 1, 0, 1, 2, 3]*/

 /*c. Nesse exercício final temos o mesmo acontecido nos anteriores, com a diferença que quando i é incrementado para 6 ele ainda é válido e criamos então mais uma cadeia da função do segundo for, o que adiciona
 ao array novamente os valores 0, 1, 2, 3 e agora também 4 e 5, visto que esses são menores que 6 (valor de i). O resultado final é o seguinte array [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5] */


 // EXERCICIO 2
/*let arrayDeNumeros = [10, 20, 30, 40, 50];

const funcao = (lista, numero) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNumeros, 10));
console.log(funcao(arrayDeNumeros, 30));
console.log(funcao(arrayDeNumeros, 45));*/

/*a. Os prints no console serão, respectivamente, 0, 2 e undefined. A função serve para determinar a posição de cada nome na lista e retornar a posição de acordo com o nome. Portanto temos Darvas na posição 0, 
João na posição 2 e Paula não existe na lista, portanto é entendido como undefined pelo javascript.*/

/*b. Sim, funcionaria perfeitamente. Substituindo os valores string de dentro do array para valores numéricos, e substituindo 'nome' para 'numero', a ideia da função permanece a mesma: i começa na posição 0, 
enquanto i for menor que o comprimento do array e incrementando 1 a cada volta, dado o valor do número é calculada sua posição.*/


// EXERCICIO 3
/* Dado um determinado array (por exemplo [1, 2, 3, 4, 5]) a função cria duas variáveis (resultadoA e resultadoB) e um novo array para os resultados, que serão essas duas variáveis. A primeira variável
(que tem valor inicial de 0) tem função de somar o valor da posição 0 do array com 0 e armazenar na variavel resultadoA e em seguida multiplicar o valor da posição 0 do array com 1 e armazenar na resultadoB.
Em seguida ele repete o processo, pegando o valor armazenado nas variáveis e somando e multiplicando respectivamente com o valor da segunda posição do array e assim sucessivamente. No exemplo [1,2,3,4,5]
teriamos como resultado arrayFinal[15, 120].*/


// EXERCICIO 4
//a. 
// calculo = (idade) => {
//     let idadeCachorro = idade*7
//     console.log(idadeCachorro)
// }
// calculo(10)

//b. 
// infos = (nome, idade, endereco, estudante) => {
//     if (estudante === true){
//         estudante = "sou"
//     }else{
//         estudante = "não sou"
//     }
//     console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e " + estudante + " estudante.")
// } 
// infos("Gui", 28, "Rua Alferes 1144", true)


// EXERCICIO 5
// qualSeculo = (ano) => {
//     let seculo = 0
//     if (ano > 1000 && ano <= 1100){
//         seculo = "XI"
//     }else if (ano > 1100 && ano <= 1200){
//         seculo = "XII"
//     }else if (ano > 1200 && ano <= 1300){
//         seculo = "XIII"
//     }else if (ano > 1300 && ano <= 1400){
//         seculo = "XIV"
//     }else if (ano > 1400 && ano <= 1500){
//         seculo = "XV"
//     }else if (ano > 1500 && ano <= 1600){
//         seculo = "XVI"
//     }else if (ano > 1600 && ano <= 1700){
//         seculo = "XVII"
//     }else if (ano > 1700 && ano <= 1800){
//         seculo = "XVIII"
//     }else if (ano > 1800 && ano <= 1900){
//         seculo = "XIX"
//     }else if (ano > 1900 && ano <= 2000){
//         seculo = "XX"
//     }else if (ano > 2000 && ano <= 2100){
//         seculo = "XXI"
//     }else{
//         seculo = "desconhecido!"
//     }
//     console.log("O ano " + ano + " pertence ao século " + seculo)
// }
// qualSeculo(1630)


// EXERCICIO 6
//a.
// function quantosNoArray(array) {
//     return array.length
// }
// let lista = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// const totalArray = quantosNoArray(lista)
// console.log(totalArray)

//b.
// function boolOuNao(numero) {
//     let parOuImpar = ""
//     if (numero % 2 === 0){
//         parOuImpar = "par"
//     }else{
//         parOuImpar = "ímpar"
//     }
//     console.log("O número é " + parOuImpar)
// }
// boolOuNao(229)

//c.
// function quantosParesNoArray(array) {
//     let quantidPares = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]%2 === 0){
//             quantidPares += 1
//         }
//     }
//     console.log(quantidPares)
// }
// let lista = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// quantosParesNoArray(lista)

//d.
function boolOuNao(array) {
    let parOuImpar = ""
    let quantidPares = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            console.log(array[i] + " é par!")
        }else{
            console.log(array[i] + " é ímpar!")
        }
    }
}
let lista = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
boolOuNao(lista)