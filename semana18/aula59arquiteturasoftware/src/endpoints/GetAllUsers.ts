import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const userBusiness = new UserBusiness();

        const token = req.headers.authorization!;
        const users = await userBusiness.get(token);

        res.send(users).status(200);
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    } finally {
        BaseDatabase.destroyConnection()
    }
}