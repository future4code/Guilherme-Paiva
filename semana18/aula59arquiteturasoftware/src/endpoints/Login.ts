import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export const login = async (req: Request, res: Response) => {
    try {
      
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        const userBusiness = new UserBusiness();
        const token = await userBusiness.login(userData.email, userData.password)

        res.status(200).send({
            message: "Usuário logado com sucesso!",
            token: token
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    } finally{
        BaseDatabase.destroyConnection()
    }
}