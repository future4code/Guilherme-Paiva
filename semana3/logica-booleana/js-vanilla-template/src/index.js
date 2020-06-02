//Interpretação - Exercício 1

/* a. false - Como há um false envolvido, o resultado será false.
b. false - Entre parenteses temos um true como resultado, comparado com seu oposto o resultado que temos é false.
c. true - Entre parenteses temos true como resultado, comparado com o oposto do resultado anterior (true) o resultado é true.
d. false - Entre parenteses o resultado é false, então true-false-false temos o resultado false.
e. boolean - Como só lidamos com booleanos no exercício, a resposta é óbvia.*/

//Interpretação - Exercício 2

/* a. Arrays são maneiras de guardar e acessar múltiplas informações ao mesmo tempo. Se declara nomeando e colocando os valores dentro de colchetes, separados por vírgula, ex. array = [1, 2, 3]
b. O index do primeiro valor guardado em um array é sempre zero.
c. Determinamos uma váriavel para conter o resultado e atribuimos a ela .lenght ex. let tamanhoArray = array.length.
d. I. undefined - Deixando sem tipo declarado, array nesse caso é undefined.
II. null - Aqui declaramos como null, então esse é o resultado que temos.
III. 11 - O total de valores dentro do array é 11.
IV. 3 e 4 - Com i=0, temos o valor 3 para trabalhar. Depois é acrescentado 1 a ele.
V. 19 e 9 - O exercício define que array[i+1]=19, essa é a primeira resposta e a segunda vem do exercício anterior, onde definimos que i reflete o valor 3 no array, logo i+6=9.
VI. 3 - Aqui determinamos que i= i+1, temos então que array[i] é 3+1=4 e depois é dito que array[4-1], então o resultado final é 3.
VII. 1 - Array.lenght era 11 e -1=10, array[i] subtraindo 3 passa então a ser 7 que divido por array[1] que é 3, deixa de resto da divisão 1.*/

// Escrita - Exercício 1
// (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

// a. 77F em K
let kelvinA = (77-32)*5/9 + 273.15
console.log ('a. ' + kelvinA)    

//b. 80C em F
let fahrenB = (80)*9/5 + 32
console.log('b. ' + fahrenB)

//c. 30C em F e K
let fahrenC = (30)*9/5 + 32
let kelvinC = (fahrenC - 32)*5/9 + 273.15
console.log ('c. ' + fahrenC + 'F e ' + kelvinC + 'K')

//d. 
let usuarioCelsius = prompt ('Insira o valor em Celsius que você deseja converter')
let fahrenD = (usuarioCelsius)*9/5 + 32
let kelvinD = (fahrenD - 32)*5/9 + 273.15
console.log ('c. ' + fahrenD + 'F e ' + kelvinD + 'K')

//Escrita - Exercício 2

const nome = prompt ('Bem-vindo! Qual é seu nome?')
const idade = prompt ('Legal! Agora, qual é a sua idade?')
const signo = prompt ('Jura? Você parece mais nov@! Qual seu signo?')
const comida = prompt ('Nossa, é sua cara mesmo! Me fala sua comida favorita agora.')
const yogurt = prompt ('Temos muito em comum! Quer aproveitar e comprar uma yogurteira TopTherm?')

console.log ('1. Bem vindo! Qual é seu nome?')
console.log ('Resposta: ' + nome)
console.log ('2. Legal! Agora, qual é a sua idade?')
console.log ('Resposta: ' + idade)
console.log ('3. Jura? Você parece mais nov@! Qual seu signo?')
console.log ('Resposta: ' + signo)
console.log ('4. Nossa, é sua cara mesmo! Me fala sua comida favorita agora.')
console.log ('Resposta: ' + comida)
console.log ('5. Temos muito em comum! Quer aproveitar e comprar uma yogurteira TopTherm?')
console.log ('Resposta: ' + yogurt)

//Escrita - Exercício 3
//a. 1kw = 0.05 

let consumidor = prompt ('Quantos quilowatt-hora você consumiu?')
let consumoFinal = Number(consumidor) * 0.05
console.log ('Você pagará R$ ' + consumoFinal)

//b. 

let consumidor2 = prompt ('Quantos quilowatt-hora você consumiu?')
let desconto = prompt ('De quantos % é seu desconto?')
const valorSemDesconto = Number(consumidor2) * 0.05
let valorDoDesconto1 = 100 - Number(desconto)
const valorDoDesconto2 = valorDoDesconto1 * 0.01
const valorFinal = (valorSemDesconto)*(valorDoDesconto2)
console.log ('Você pagará R$ ' + valorFinal)