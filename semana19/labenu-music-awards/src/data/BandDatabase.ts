import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {

  private static TABLE_NAME = "LAMA_Bandas";

  public async createBand(id: string, name: string, genre: string, responsible: string): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          genre,
          responsible
        })
        .into(BandDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  // public async getUserByEmail(email: string): Promise<User> {
  //   const result = await this.getConnection()
  //     .select("*")
  //     .from(UserDatabase.TABLE_NAME)
  //     .where({ email });

  //   return User.toUserModel(result[0]);
  // }

}