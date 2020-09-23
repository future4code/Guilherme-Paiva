import { tokenToString } from "typescript";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator, ROLE_TYPE } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {

  public async createUser (name: string, email: string, password: string, role: ROLE_TYPE): Promise<string>{

    if (!name || !email || !password){
      throw new Error("Informe todos os dados!")
    }

    if(email.indexOf("@") === -1) {
        throw new Error("Email inválido.")
    }

    if (password.length < 6) {
        throw new Error("A senha precisa ter no mínimo 6 caracteres.")
    }

    if(!role) {
      role = ROLE_TYPE.NORMAL
    }
    
    if (role !== ROLE_TYPE.ADMIN && role !== ROLE_TYPE.NORMAL) {
        throw new Error ("Parâmetro ROLE precisa ser NORMAL ou ADMIN!")
    }

      const idGenerator = new IdGenerator()
      const newId = idGenerator.generate()

      const hashManager = new HashManager()
      const cypherPassword = await hashManager.hash(password)

      const userDatabase = new UserDatabase()
      await userDatabase.createUser(newId, name, email, cypherPassword, role)

      const authenticator = new Authenticator()

      const token = authenticator.generateToken({
          id: newId,
          role: role
      })

      return token;
  }

  public async login (email: string, password: string): Promise<string> {
    if (!email || !password) {
      throw new Error("Informe email e senha.")
    }

    const userDatabase = new UserDatabase()
    const user = await userDatabase.getUserByEmail(email)

    const hashManager = new HashManager()
    const validatePassword = await hashManager.compare(password, user.password)

    if(!validatePassword) {
      throw new Error("Usuário e/ou senha incorretos!")
  }
    const authenticator = new Authenticator()

    const token = authenticator.generateToken({id:user.id, role:user.role})

    return token;
  }

  public async get (token: string): Promise<string> {
    const userDatabase = new UserDatabase()

    const authenticator = new Authenticator()
    authenticator.getData(token)

    return await userDatabase.get();
  }

  public async deleteUser (token: string, id: string) {
    const authenticator = new Authenticator()
    const authData = authenticator.getData(token)

    const userDatabase = new UserDatabase()

    if(authData.role !== "ADMIN") {
        throw new Error ("Somente ADMINS tem acesso à esta funcionalidade.")
    }

    return await userDatabase.deleteUser(id)
  }
}