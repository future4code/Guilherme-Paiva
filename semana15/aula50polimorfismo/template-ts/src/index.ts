export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

const Client: Client = {
  name: "Guilherme",
  registrationNumber: 1,
  consumedEnergy: 100,
  calculateBill: () => {
    return 2
  }
}

console.log(Client)

/* 1 a) Foi possível imprimir as propriedades name, registration number e consumed energy, 
e não foi possível imprimir o método calculateBill porque essa é uma interface e ela não aceita métodos. */

export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}

// const place1: Place = new Place

// 2 a) Não é possível criar uma instância de uma classe abstrata.

// b) Para criar uma instância dessa classe, seria preciso tirar a sua definição de abstrata.

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }

  public getResidentsQuantity(): number {
    return this.residentsQuantity
  }
}

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }
  public getFloorsQuantity(): number {
    return this.floorsQuantity
  }
}

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    // Refere-se à quantidade de máquinas do local 
    
    cep: string
		) {
	    super(cep);
  }
  public getMachinesQuantity(): number {
    return this.machinesQuantity
  }
}

const place2: Place = new Residence(3, "12345000")
const place3: Place = new Commerce(2, "13200123")
const place4: Place = new Industry(5, "13677000")

console.log("CEPs:", place2.getCep(), place3.getCep(), place4.getCep())

export class ResidentialClient extends Residence implements Client {
    constructor(
    private cpf: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    residentsQuantity: number,
    cep: string
    ) {
      super(residentsQuantity, cep)
    }
    
  public calculateBill(): number {
    return this.consumedEnergy * 0.75
  }

  public getCpf(): string {
    return this.cpf
  }
}

/* 4 a) Ela tem todas as propriedades e métodos vindos da classe Residence e da interface Client: 
name, cpf, cep, registrationNumber, consumedEnergy, residentsQuantity, e calculateBill e getCPF. */

export class CommercialClient extends Commerce implements Client {
  constructor (
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep)
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53
  }

  public getCnpj(): string {
    return this.cnpj
  }
} 

// 5 a) Ambas implementam a interface Client e têm suas propriedades (name, registrationNumber, consumedEnergy, cep) e o método calculateBill, que é o mesmo porém calculado de forma diferente.

/* b) A classe ResidentialClient tem como pai a classe Residence enquanto essa tem Commerce como pai, ResidentialClient tem as propriedade de CPF e residentsQuantity,
enquanto essa tem cnpj e floorsQuantity, cada uma tem seun próprio cálculo da conta e cada uma tem seu getter de cpf ou cnpj, respectivamente; */

export class IndustrialClient extends Industry implements Client {
  constructor (
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private industryNumber: number,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep)
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
  }

  public getIndustryNumber(): number {
    return this.industryNumber
  }
} 

// 6 a) Deve ser filha da classe Industry porque é um cliente industrial e precisa das propriedades particulares de tal classe.

// 6 b) Implementa a interface Client porque é um cliente assim como todas as outras e utiliza as propriedades que todos clientes utilizam.

// 6 c) Porque precisamos apenas ler os valores e não alterá-los.

export class ClientManager {
  private clients: Client[] = []

  public getClientsQuantity(): number {
    return this.clients.length
  }

  public registerClient(client: Client): void {
    this.clients.push(client)
  }

  public calculateBillOfClient(registrationNumber: number): number {
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === registrationNumber
    })

    if(foundClient){
        return foundClient.calculateBill()
    }
    return 0;
   }

   public calculateTotalIncome(): number {
    let total: number = 0;
    this.clients.forEach((client) => {
      total += client.calculateBill();
    });
    return total;
  }

	public deleteUser(registrationNumber: number): void {
    let registrationIndex = undefined;

    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].registrationNumber === registrationNumber) {
        registrationIndex = i;
      }
    }

    if (registrationIndex !== undefined) {
      this.clients.splice(registrationIndex, 1);
    }
  }


  }

