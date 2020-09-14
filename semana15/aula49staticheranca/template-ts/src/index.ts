// type person = {
//   name: string
// }

// function createPerson(name: string): person {
// 	return {name: name} 
// } 

// const myPerson2 = createPerson("Robson");

// console.log(myPerson2);

class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
  }
  
  public introduceYourself(): void {
    console.log(`Ola, sou ${this.name}. Bom dia!`)
  }
}

const usuario1: User = new User ("gui", "gui@gmail.com", "guilherme", "1234")

console.log(usuario1)

// 1 a) Sim, é possível imprimir o password dessa instância.

// b) A mensagem foi impressa uma vez no terminal.

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const usuario2 = new Customer ("lari", "lari@gmail.com", "larissa", "9876", "1234 5678 9012 3456")

console.log(usuario2)

usuario2.introduceYourself()

// 2 a) Foi impressa uma vez no terminal.

// b) Foi impressa duas vezes, uma do usuario1 e outra do usuario2, mesmo este sendo da classe Customer, ainda é uma extensão da classe User por isso ela também é chamada.

// 3 a) Sim, foi possível imprimir porque é uma string e está declarada no super do constructor.

class Employee extends User {
  protected admissionDate: string;
  protected baseSalary: number
  static BENEFITS_VALUE: number = 400

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: string,
    baseSalary: number
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Employee")
    this.admissionDate = admissionDate
    this.baseSalary = baseSalary
  }

  public getAdmissionDate(): string {
    return this.admissionDate
  }

  public getBaseSalary(): number {
    return this.baseSalary
  }

  public calculateTotalSalary(): void {
    console.log("Salario total: R$", this.baseSalary + Employee.BENEFITS_VALUE)
  }
}

const usuario3 = new Employee ("dudu", "dudu@gmail.com", "eduardo", "0001", "11/04/2020", 1000)

console.log(usuario3)

usuario3.calculateTotalSalary()

// 6 a) A mensagem foi impressa 3 vezes no console.

// b) Todos os dados providos são possíveis de serem impressos no console.

class Seller extends Employee {
  private salesQuantity: number = 0
  static SELLING_COMMISSION: number = 5

  setSalesQuantity(salesQuantity: number): number {
    return this.salesQuantity = salesQuantity
  }

  public calculateTotalSalary(): void {
    console.log("Salario total: R$", this.baseSalary + Employee.BENEFITS_VALUE + Seller.SELLING_COMMISSION * this.salesQuantity)
  }

}

const usuario4 = new Seller ("silvester", "frajola@gmail.com", "frajola", "9990", "05/05/2018", 700)

// 8 a) name, email, id, password, admission date e base salary, os mesmos para o employee.

console.log(usuario4.getName())
console.log(usuario4.getEmail())
console.log(usuario4.getId())
console.log(usuario4.getAdmissionDate())
console.log(usuario4.getBaseSalary())

// b) Consegui imprimir todas as informações exceto pelo password, porque não há método público para pegá-lo.

usuario4.setSalesQuantity(20)

// 9 a) Não é possível imprimir no terminal porque é um valor privado e não há uma função de get para ele.

const usuario5 = new Seller ("yellow", "amarelinho@gmail.com", "amarelo", "1144", "01/02/2018", 600)

usuario5.setSalesQuantity(10)

usuario5.calculateTotalSalary()

// 10 a) Foi impresso o salário total já calculado corretamente com a comissão porque .