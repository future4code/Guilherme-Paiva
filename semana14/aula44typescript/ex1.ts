// a)

const minhaString: string = "1"

// O código dá erro, por determinar a variável como string não podemos passar um número a ela

// b)

const meuNumero: any = "um"

// Para que a variável aceite tanto número quanto string, podemos declará-la como any

// c)

const gui: {nome: string, idade: number, corFavorita: string} = {
  nome: "Guilherme",
  idade: 29,
  corFavorita: "cinza"
}

// d)

type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: string
}

const pessoa1: Pessoa = {
  nome: "pessoa 1",
  idade: 10,
  corFavorita: "azul"
}

const pessoa2: Pessoa = {
  nome: "pessoa 2",
  idade: 20,
  corFavorita: "verde"
}

const pessoa3: Pessoa = {
  nome: "pessoa 3",
  idade: 30,
  corFavorita: "amarelo"
}

// e)

enum CoresArcoIris   {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta"
}

type NovaPessoa = {
  nome: string,
  idade: number,
  corFavorita: CoresArcoIris
}

const pessoa4: NovaPessoa = {
  nome: "pessoa 4",
  idade: 40,
  corFavorita: CoresArcoIris.VERMELHO
}