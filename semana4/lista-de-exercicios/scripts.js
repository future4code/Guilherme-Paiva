// ~~~~~~~ INTERPRETAÇÃO DE CÓDIGO ~~~~~~~~


/* 1. A const meuDinheiro chama a função principal conversorDeMoeda, que pega o valor inputado pelo usuário (100 dólares no exemplo, chamado de valor EmDolar) e em seguida 
pede ao usuário também para informar via prompt a cotação do dólar. Ela pega essa string e converte em número na const cotacao. No final, ela retorna o valor inputado no começo
multiplicado pelo valor informado na cotação, e termina imprimindo no console esse resultado. O valor impresso no console nesse caso seria R$503. */

/* 2. A função investeDinheiro aceita duas entradas: tipoDeInvestimento, onde o usuário escolhe entre 4 opções, e valor, o quanto o usuário estaria investindo. Primeiro a função cria 
uma variável valorAposInvestimento e em seguida entra em um switch-case que, dependendo da escolha do usuário de tipo de investimento, vai multiplicar o valor por números pré-estabelecidos. 
Caso a opção fornecida no tipo de investimento seja outra que não as informadas, retorna um erro. A função termina (caso nao dê erro) retornando a variável criada acima e imprimindo 
na tela duas opções de montante que foram selecionados pelo usuário. O primeiro console.log resulta em 165 e o segundo console.log resulta na mensagem "TIPO DE INVESTIMENTO 
INFORMADO INCORRETO!". */

/* 3. A const numeros consiste de um array com números aleatórios, e as consts array1 e array2 também comportam arrays mas estão vazias a princípio. Daí entramos num for que checa número
por número no primeiro array e caso seja par, o joga no array1. Caso seja ímpar, joga o número no array2. Três mensagens são imprimidas na sequência, informando o tamanho de cada array.
Os resultados impressos são: "Quantidade total de números" 14; 6; 8; */

/* 4. Um array com muitos números é apresentado na const numeros, e em seguida são definidas duas variáveis: numero1 que tem valor infinito e numero 2 que tem valor 0. Entramos num for 
que checa todo o array na ordem e caso um dos números seja menor que infinito, ele substitui o valor de infinito pelo número, ou seja, como 25 é menor que infinito ele entra no if e se
torna a let numero1. Depois, 12 é menor que 25 então ele se torna a let numero1 e por aí vai até percorrer todo o array encontrando o menor número. No mesmo sentido, caso o número checado
do array seja maior que zero, ele se torna a let numero2 e o for segue em frente, substituindo os valores da variável numero2 por cada número maior que o anterior, percorrendo todo o array.
No final, impressos no console temos as duas variáveis, contendo respectivamente o menor número de dentro do array e o maior, ou seja, -10 e 1590.*/



// ~~~~~~ LÓGICA DE PROGRAMAÇÃO ~~~~~~~


//1. 
/* Podemos percorrer uma lista com array[i], substituindo i com a posição de cada valor do array, mas esse é um processo manual que pode dar muito trabalho. Também podemos usar for, onde
determinamos o index inicial, até onde percorreremos e qual o incremento a cada volta do loop. E por fim temos o for of, a forma mais simples de iterar um array.*/

// array = [1, 5, 10, 7, 15, 16]

// i = 5
// if (array[i] < 15){
//     console.log(array[i] + " é menor que 15")
// }else {
//     console.log(array[i] + " é maior que 15")
// }

// for (let i = 0; i < 6; i++){
//     console.log("Posição " + i + " valor " + array[i])
// }

// for (let numero of array) {
//     if (numero === 10){
//         console.log ("Existe pelo menos um número 10 nessa lista")
//     }
// }

//2. 
/* 
a) false
b) false
c) true
d) true
e) true 
*/

//3.
// const quantidadeDeNumerosPares = 5
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }
/* O código não funciona porque i sempre será igual a 0 e sempre será menor que a quantidadeDeNumerosPares, portanto temos um loop infinito. Para corrigir, basta colocar i++ dentro do 
while, desta forma a cada volta do loop o valor de i é incrementado em 1 até alcançar o valor declarado na const quatidadeDeNumerosPares. Além disso, é preciso tirar o sinal de igual 
dentro da condição do while, senão pegariamos sempre um número além do esperado.*/

//4. 
// let trianguloCalc = (ladoA, ladoB, ladoC) => {
//     if (ladoA === ladoB && ladoA === ladoC){
//         console.log("Triângulo equilátero!")
//     }else if (ladoA === ladoB && ladoA !== ladoC ){
//         console.log("Triângulo isóceles")
//     }else if (ladoA === ladoC && ladoA !== ladoB ){
//         console.log("Triângulo isóceles")
//     }else if (ladoB === ladoC && ladoB !== ladoA ){
//         console.log("Triângulo isóceles")
//     }else if (ladoA !== ladoB && ladoA !== ladoC){
//         console.log("Triângulo escaleno!")
//     }
// }
// let triangulo = trianguloCalc(3, 1, 2)

//5.
// let calculoMaior = (numero1, numero2) => {
//     if (numero1 > numero2){
//         return ("O maior é " + numero1)
//     }else if (numero2 > numero1){
//         return ("O maior é " + numero2)
//     }else{
//         return ("Os números são iguais")
//     }
// }

// let calculoDivisiveis1 = (numero1, numero2) => {
//     if (numero1%numero2 === 0){
//         return (`${numero1} é divisível por ${numero2}`)
//     }if (numero1%numero2 !== 0){
//         return (`${numero1} não é divisível por ${numero2}`)
//     }
// }

// let calculoDivisiveis2 = (numero1, numero2) => {
//     if (numero2%numero1 === 0){
//         return (`${numero2} é divisível por ${numero1}`)
//     }if (numero2%numero1 !== 0){
//         return (`${numero2} não é divisível por ${numero1}`)
//     }
// }

// let calculoDiferenca = (numero1, numero2) => {
//     if (numero1 > numero2){
//         let diferenca = numero1-numero2
//         return (`A diferença entre eles é ${diferenca}`)
//     }else if (numero2 > numero1){
//         let diferenca = numero2-numero1
//         return (`A diferença entre eles é ${diferenca}`)
//     }
// }

// let numeros = calculoMaior(15, 30)
// let numeros2 = calculoDivisiveis1(15, 30)
// let numeros3 = calculoDivisiveis2(15, 30)
// let numeros4 = calculoDiferenca(15, 30)
// console.log(numeros)
// console.log(numeros2)
// console.log(numeros3)
// console.log(numeros4)

//Obs. Não é o código mais inteligente do mundo. Eu precisaria de um pouco mais de tempo pra pensar em como melhorá-lo =P



// ~~~~~~ FUNÇÕES ~~~~~~


//1.
// let lista = [1, 2, 3, 4, 5]

// let segundoMaiorEMenor = (array) => {
//     let maiorDoArray = 0
//     for (let numero of array){
//         if (numero > maiorDoArray){
//         maiorDoArray = numero
//         }
//     }
//     let segundoMaior = 0
//     for (let novoNumero of array){
//         if (novoNumero > segundoMaior && novoNumero < maiorDoArray)
//         segundoMaior = novoNumero
//     }
//     let menorDoArray = array[0]
//     for (let maisNovoNumero of array){
//         if (maisNovoNumero < menorDoArray){
//             menorDoArray = maisNovoNumero    
//         }       
//     }
//     let segundoMenor = array[0]
//         for (let novissimoNumero of array){
//         if (novissimoNumero < segundoMenor && novissimoNumero !== menorDoArray){
//             segundoMenor = novissimoNumero
//         }
//     }
//     console.log("O segundo maior número é " + segundoMaior + " e o segundo menor número é " + segundoMenor)
// }

// let calcular = segundoMaiorEMenor(lista)

//obs. Enrosquei completamente aqui pra descobrir o segundo menor e estou pulando o exercício.

//2. 
// let anuncio = function(texto){
//     alert(texto)
// }

// let aviso = anuncio("Hello Labenu")



// ~~~~~~~ OBJETOS ~~~~~~~~ 


/*1. Arrays são formas de guardar informações linearmente, enquanto objetos são estruturas mais complexas que permitem guardar dados mais complexos. Devemos usar arrays quando estamos
lidando com listas de conteúdo ou informações de um mesmo tipo e usamos objetos quando precisamos trabalhar com informações de tipos diferentes para um mesmo propósito, como por exemplo
as informações do cadastro de um usuário (nome, idade, cidade, etc, todas em um mesmo lugar).*/

//2. 
// let criaRetangulo = (lado1, lado2) => {
//     const retangulo = {
//         largura: 0,
//         altura: 0,
//         perimetro: 0,
//         area: 0,
//     }

//     retangulo.largura = lado1
//     retangulo.altura = lado2
//     retangulo.perimetro = 2 * (lado1 + lado2)
//     retangulo.area = lado1 * lado2

//     return retangulo
// }

// let calcRetangulo = criaRetangulo(3, 3)
// console.log(calcRetangulo)

//3.
// const filmeFavorito = {
//     titulo: 'Drive',
//     ano: '2011',
//     diretor: 'Nicholas Winding Refn',
//     ator1: 'Ryan Gosling',
//     atriz1: 'Carrey Mulligan',
// }

// console.log ("Venha assistir ao filme " + filmeFavorito.titulo + ", de " + filmeFavorito.ano + ", dirigido por " + filmeFavorito.diretor + " e estrelado por " 
// + filmeFavorito.ator1 + " e " + filmeFavorito.atriz1 + ".")

//4. 
// const dadosPessoa = {
//     nome: 'João Ninguém',
//     idade: 33,
//     email: 'joao@ninguem.com',
//     endereco: 'Rua dos Bobos, 0',
// }

// function anonimizarPessoa(){
//     const dadosAnonimo = {
//     ... dadosPessoa,
//     nome: 'ANÔNIMO'
//     }
//     return dadosAnonimo
// }

// let cadastro = anonimizarPessoa(dadosPessoa)
// console.log(cadastro)



// ~~~~~~~ FUNÇÕES DE ARRAY ~~~~~~~~ 

//1. 
//a)
// let pessoas = [{ nome: "Pedro", idade: 20 }, {nome: "João", idade: 10 }, {nome: "Paula", idade: 12 }, { nome: "Artur", idade: 89 }]

// const filtrarAdultos = pessoas.filter((pessoa, index, array) => {
//     if (pessoa.idade >= 20){
//         return true
//     }
//     return false
//     })

//     console.log (filtrarAdultos)

//b) 
// let pessoas = [{ nome: "Pedro", idade: 20 }, {nome: "João", idade: 10 }, {nome: "Paula", idade: 12 }, { nome: "Artur", idade: 89 }]

// const filtrarNaoAdultos = pessoas.filter((pessoa, index, array) => {
//     if (pessoa.idade < 20){
//         return true
//     }
//     return false
//     })

//     console.log (filtrarNaoAdultos)

//2.
//a)
// const array = [1, 2, 3, 4, 5, 6]

// const multiplicaPorDois = array.map((numero, index, array) => {
//     return numero*2
// })
// console.log (multiplicaPorDois)

//b)
// const array = [1, 2, 3, 4, 5, 6]

// const multiplicaPorTrêsString = array.map((numero, index, array) => {
//     return `${numero*3}`
// })
// console.log (multiplicaPorTrêsString)

//c)
// const array = [1, 2, 3, 4, 5, 6]

// const parOuImpar = array.map((numero, index, array) => {
//     if (numero % 2 === 0){
//         return `${numero} é par`
//     }
//     else{
//         return `${numero} é ímpar`
//     }
// })
// console.log (parOuImpar)


//3.
//a)
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const permissaoMontanhaRussa = pessoas.filter((pessoa, index, array) => {
//     if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
//         return true
//     }else{
//         return false
//     }
// })
// console.log (permissaoMontanhaRussa)

// b)
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const semPermissaoMontanhaRussa = pessoas.filter((pessoa, index, array) => {
//     if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
//         return false
//     }else{
//         return true
//     }
// })
// console.log (semPermissaoMontanhaRussa)

//4.
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// const emailLembrete = consultas.map((consulta, index, array) => {
//     if (consulta.cancelada === false){
//         if (consulta.genero === "feminino"){
//             return `Olá, Sra. ${consulta.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
//         }else{
//             return `Olá, Sr. ${consulta.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
//         }
//     }else{
//         if (consulta.genero === "feminino"){
//             return `Olá, Sra. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
//         }else{
//             return `Olá, Sr. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
//         }
//     }
// })

// console.log(emailLembrete)

//5.
// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// contas.forEach((pessoa, index, array) => {
//     for (let valor of pessoa.compras)
//         pessoa.saldoTotal -= valor
// })

// console.log (contas)