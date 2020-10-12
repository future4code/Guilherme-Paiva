import { Request, Response } from "express";
import { BandInputDTO} from "../model/Band";
import { BaseDatabase } from "../data/BaseDatabase";
import { BandBusiness } from "../business/BandBusiness";
import { Authenticator } from "../services/Authenticator";

export class BandController {
  async register(req: Request, res: Response) {
    try {
        const input: BandInputDTO = {
            name: req.body.name,
            genre: req.body.genre,
            responsible: req.body.responsible
        }

        const token = req.headers.authorization as string

        const bandBusiness = new BandBusiness();
        await bandBusiness.createBand(input, token);

        res.status(200).send({message: `Banda cadastrada com sucesso!`});

    } catch (error) {
        res.status(400).send({ error: error.message });
    } finally {
        BaseDatabase.destroyConnection()
    }
  }

  async getInfo(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string
      const id = req.body.id
      const name = req.body.name

      const bandBusiness = new BandBusiness()
      const info = await bandBusiness.getInfo(token, id, name)

      res.status(200).send({info})
      
    } catch (error) {
        res.status(400).send({error: error.message})
    } finally {
        BaseDatabase.destroyConnection()
    }
  }
}