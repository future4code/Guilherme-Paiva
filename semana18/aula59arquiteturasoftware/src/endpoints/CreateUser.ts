import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export const createUser = async (req: Request, res: Response) => {
  try {
    
      const userData = {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role
      }

      const userBusiness = new UserBusiness();
      const token = await userBusiness.createUser(userData.name, userData.email, userData.password, userData.role)

      res.status(200).send({
          message: "Usuário cadastrado com sucesso!",
          token: token
      })
  } catch (error) {
      res.status(400).send({message: error.message})
  } finally {
      BaseDatabase.destroyConnection()
  }
}