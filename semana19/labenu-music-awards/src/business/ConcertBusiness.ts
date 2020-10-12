import { ConcertDatabase } from "../data/ConcertDatabase";
import { ConcertInputDTO, WeekDay } from "../model/Concert";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ConcertBusiness {

  async addConcert(concert: ConcertInputDTO, token: string) {
    if (!concert.week_day || !concert.start_time || !concert.end_time || !concert.band_id){
      throw new Error ("Por favor informe todos os dados")
    }

    if(concert.start_time < 8 || concert.end_time > 23){
      throw new Error ("Só é possível agendar um show das 08h às 23h")
    }

    if(concert.week_day !== "SEXTA" && concert.week_day !== "SÁBADO" && concert.week_day !== "DOMINGO"){
      throw new Error ("Só é possível agendar um show SEXTA, SÁBADO ou DOMINGO")
    }

    const authenticator = new Authenticator()
    const authData = authenticator.getData(token)

    if(authData.role !== "ADMIN"){
      throw new Error ("Somente ADMINS podem agendar shows")
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const concertDatabase = new ConcertDatabase();
    await concertDatabase.addConcert(id, concert.week_day, concert.start_time, concert.end_time, concert.band_id);
  }

  async getInfo(token: string, week_day: WeekDay) {
    const authenticator = new Authenticator()
    authenticator.getData(token)

    if(!week_day){
      throw new Error("Por favor informe o dia da semana para ver os shows agendados")
    }

    if(week_day !== "SEXTA" && week_day !== "SÁBADO" && week_day !== "DOMINGO"){
      throw new Error ("Só existem shows agendados SEXTA, SÁBADO ou DOMINGO")
    }

    const concertDatabase = new ConcertDatabase()
    const info = await concertDatabase.getInfo(week_day)

    return info
  }

}