type pokemon {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31 
}

const pokemon2: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// a) tsc ex4.ts

/* b) c) Estar na pasta src significa que o arquivo de configuração tsconfig.json foi criado e configurado, 
portanto para transpilar todos os arquivos .ts presentes na pasta src, basta usar o comando tsc no terminal. */

/* d) O arquivo criado pelos slides contém muito menos opções, porém todas elas são fundamentais. O arquivo tsconfig.json 
possui muitas outras configuraçãoes específicas para diversas situações. */