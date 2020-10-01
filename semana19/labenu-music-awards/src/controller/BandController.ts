import { Request, Response } from "express";
import { BandInputDTO} from "../model/Band";
import { BaseDatabase } from "../data/BaseDatabase";
import { BandBusiness } from "../business/BandBusiness";
import { Authenticator } from "../services/Authenticator";

export class BandController {
  async register(req: Request, res: Response) {
    try {
        const input: BandInputDTO = {
            name: req.body.responsible,
            genre: req.body.genre,
            responsible: req.body.responsible
        }

        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const authData = authenticator.getData(token)

        if(authData.role !== "ADMIN"){
          throw new Error ("Somente ADMINS podem adicionar novas bandas.")
        }

        const bandBusiness = new BandBusiness();
        await bandBusiness.createBand(input);

        res.status(200).send({message: `Banda cadastrada com sucesso!`});

    } catch (error) {
        res.status(400).send({ error: error.message });
    } finally {
        BaseDatabase.destroyConnection()
    }
}
}