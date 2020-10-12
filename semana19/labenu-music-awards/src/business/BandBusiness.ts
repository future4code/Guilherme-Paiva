import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { BandInputDTO } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";

export class BandBusiness {

    async createBand(band: BandInputDTO, token: string) {
        if (!band.name || !band.genre || !band.responsible){
          throw new Error("Por favor informe todos os dados")
        }

        const authenticator = new Authenticator()
        const authData = authenticator.getData(token)

        if(authData.role !== "ADMIN"){
          throw new Error ("Somente ADMINS podem adicionar novas bandas.")
        }
        
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const bandDatabase = new BandDatabase();
        await bandDatabase.createBand(id, band.name, band.genre, band.responsible);
    }

    async getInfo(token: string, id: string, name: string) {
      const authenticator = new Authenticator()
      authenticator.getData(token)

      if (!id && !name){
        throw new Error("Por favor informe id ou nome da banda que deseja buscar")
      }
      
      const bandDatabase = new BandDatabase()
      const info = await bandDatabase.getInfo(id, name)

      return info
    }
}