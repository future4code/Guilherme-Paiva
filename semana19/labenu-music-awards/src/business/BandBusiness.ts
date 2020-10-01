import { UserInputDTO, LoginInputDTO, UserRole } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { BandInputDTO } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";

export class BandBusiness {

    async createBand(band: BandInputDTO) {
        if (!band.name || !band.genre || !band.responsible){
          throw new Error("Por favor informe todos os dados")
        }
        
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const bandDatabase = new BandDatabase();
        await bandDatabase.createBand(id, band.name, band.genre, band.responsible);
    }

    // async getUserByEmail(user: LoginInputDTO) {

    //     const userDatabase = new UserDatabase();
    //     const userFromDB = await userDatabase.getUserByEmail(user.email);

    //     const hashManager = new HashManager();
    //     const hashCompare = await hashManager.compare(user.password, userFromDB.getPassword());

    //     const authenticator = new Authenticator();
    //     const accessToken = authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

    //     if (!hashCompare) {
    //         throw new Error("Invalid Password!");
    //     }

    //     return accessToken;
    // }
}