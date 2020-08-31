class Transaction {
  private date: string;
  private value: number;
  private description: string;
  
  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description
  }

  getDate(): string {
    return this.date
  }
  getValue(): number {
    return this.value
  }
  getDescription(): string {
    return this.description
  }

}

const exercicioDois: Transaction = new Transaction("31/08/2020", 20, 'mercado')


class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

  getCpf(): string {
    return this.cpf
  }
  getName(): string {
    return this.name
  }
  getAge(): number {
    return this.age
  }
  getBalance(): number {
    return this.balance
  }
  getTransactions(): Transaction[] {
    return this.transactions
  }

}