import { BaseDatabase } from "../data/BaseDatabase";
import { Request, Response } from "express";
import { ConcertInputDTO, WeekDay } from "../model/Concert";
import { ConcertBusiness } from "../business/ConcertBusiness";

export class ConcertController {
  async addConcert(req: Request, res: Response) {
    try {
        const input: ConcertInputDTO = {
          week_day: req.body.week_day,
          start_time: req.body.start_time,
          end_time: req.body.end_time,
          band_id: req.body.band_id
        }

        const token = req.headers.authorization as string

        const concertBusiness = new ConcertBusiness()
        await concertBusiness.addConcert(input, token)

        res.status(200).send({message: `Show adicionado com sucesso!`});

    } catch (error) {
      if(error.message.includes("truncated")){
        res.status(400).send({message: "Você só pode agendar um show em horários redondos (ex. 08h, 13h)"})
    }
        res.status(400).send({ error: error.message });
    } finally {
        BaseDatabase.destroyConnection()
    }
  }

  async getConcerts(req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string
        const week_day = req.body.week_day as WeekDay

        const concertBusiness = new ConcertBusiness()
        const info = await concertBusiness.getInfo(token, week_day)

        res.status(200).send({
          shows: info.map((show: any) => {
            return {
              name: show.name,
              genre: show.genre,
              start_time: `${show.start_time}h` 
            }
          })
        });

    } catch (error) {
        res.status(400).send({ error: error.message });
    } finally {
        BaseDatabase.destroyConnection()
    }
  }
}