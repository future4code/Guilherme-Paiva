import {Request, Response} from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { BaseDatabase } from '../data/BaseDatabase'

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization!
        const id = req.params.id

        const userBusiness = new UserBusiness();

        await userBusiness.deleteUser(token, id)

        res.status(200).send({message: "Usuário deletado com sucesso!"})
    } catch (error) {
        res.status(400).send({message: error.message})
    }finally{
        BaseDatabase.destroyConnection()
    }
}