import { BaseDatabase } from "./BaseDatabase";
import { ROLE_TYPE } from "../services/Authenticator";


export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "User_Arq";

  public async createUser(id: string, name: string, email: string, password: string, role?: ROLE_TYPE): Promise<void> {
    await this.getConnection()
    .insert({
        id,
        name,
        email,
        password,
        role
    })
    .into(UserDatabase.TABLE_NAME)
}

  public async getUserByEmail (email: string): Promise<any> {
    const response = await this.getConnection()
    .select("*")
    .from(UserDatabase.TABLE_NAME)
    .where("email", email)

    return response[0]
}

  public async get (): Promise<any> {
    const users: any = [];

    const result = await this.getConnection()
    .select("*")
    .from(UserDatabase.TABLE_NAME);

		for(let user of result){
			users.push(user);
		}

    return users;
  }

  public async deleteUser (id: string): Promise<void> {
    await this.getConnection()
        .delete()
        .from(UserDatabase.TABLE_NAME)
        .where("id", id)       
  }

}
