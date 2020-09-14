// class UserAccount {
//   private cpf: string;
//   private name: string;
//   private age: number;
//   private balance: number = 0;
//   private transactions: Transaction[] = [];

//   constructor(
//      cpf: string,
//      name: string,
//      age: number,
//   ) {
//      console.log("Chamando o construtor da classe UserAccount")
//      this.cpf = cpf;
//      this.name = name;
//      this.age = age;
//   }

// }

// a) O constructor serve para que a classe já inicialize com os atributos selecionados. Para chamá-lo, usamos o this. e o nome do atributo, dessa forma ele busca na instância corrente.

// b)  A mensagem foi impressa uma vez apenas.

const exercicioUm: UserAccount = new UserAccount('39733933899', 'guilherme', 29)

// c) Para termos acesso às propriedades privadas, usamos os getters (para pegar o atributo) e setters (para definir o atributo).