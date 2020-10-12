import { Concert, WeekDay } from "../model/Concert";
import { BaseDatabase } from "./BaseDatabase";

export class ConcertDatabase extends BaseDatabase {

  private static TABLE_NAME = "LAMA_Shows";

  public async addConcert(id: string, week_day: WeekDay, start_time: number, end_time: number, band_id: string): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          week_day,
          start_time,
          end_time,
          band_id
        })
        .into(ConcertDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getInfo(week_day: WeekDay): Promise<any> {
    const result = await this.getConnection()
    .raw(`
          SELECT * FROM ${ConcertDatabase.TABLE_NAME}
          JOIN LAMA_Bandas on ${ConcertDatabase.TABLE_NAME}.band_id = LAMA_Bandas.id
          WHERE week_day = "${week_day}"
          ORDER BY ${ConcertDatabase.TABLE_NAME}.start_time ASC
    `)
    return result[0]
  }
}