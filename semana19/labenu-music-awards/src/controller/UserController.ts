import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO, User} from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";

export class UserController {
    async signup(req: Request, res: Response) {
        try {
            const input: UserInputDTO = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }

            const userBusiness = new UserBusiness();
            const token = await userBusiness.createUser(input);

            res.status(200).send({message: `Usuário cadastrado com sucesso! Seja bem vindo(a) ${req.body.name}, você está agora logado(a).`, token});

        } catch (error) {
            res.status(400).send({ error: error.message });
        } finally {
            BaseDatabase.destroyConnection()
        }
    }

    async login(req: Request, res: Response) {
        try {
            const loginData: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            };

            const userBusiness = new UserBusiness();
            const token = await userBusiness.getUserByEmail(loginData);

            res.status(200).send({message: `Usuário logado com sucesso!`, token});

        } catch (error) {
            res.status(400).send({ error: error.message });
        } finally {
          BaseDatabase.destroyConnection()
        }
    }

}