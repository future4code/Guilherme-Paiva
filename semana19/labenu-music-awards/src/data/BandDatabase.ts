import { Band } from "../model/Band";
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

  public async getInfo(id: string, name: string): Promise<Band> {
    const result = await this.getConnection()
    .raw(`
          SELECT * FROM ${BandDatabase.TABLE_NAME}
          WHERE ID = "${id}" or NAME = "${name}"
    `)

    return result[0][0]
  }
}