import dotenv from "dotenv";
import {AddressInfo} from "net";
import express, {Request, Response} from "express";
import {userRouter} from "./routes/userRouter";
import {bandRouter} from "./routes/bandRouter";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/band", bandRouter);

const server = app.listen(3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });

  app.get("/teste", async (req: Request, res: Response) => {

    try {
        res.status(200).send("Oi, seu server está funcionando!");
    } catch (error) {
  
        res.status(400).send("ERRO");
  
    }
  });

  