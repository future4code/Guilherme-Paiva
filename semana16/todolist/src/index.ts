import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

// app.get("/teste", async (req: Request, res: Response) => {
//   try {
//     res.status(200).send("Deu certo!");
//   } catch (error) {
//     res.status(400).send("Deu errado!")
//   }
// });

async function createToDoListUser(
  nickname: string,
  name: string,
  email: string
  ): Promise<void> {
    try {
      await connection.insert({
        id: Date.now().toString(),
        nickname,
        name,
        email
      })
      .into("ToDoListUser")
    } catch (error) {
      console.log("Deu erro: ", error)
    }
  }

  async function getToDoListUsers(): Promise<any> {
    try {
      const result = await connection
      .select("*")
      .from("ToDoListUser")

      console.log(result)
      return result

    } catch (error) {
      console.log("Deu erro: ", error)
    }
  }

  app.put("/user", async (req: Request, res: Response) => {
    try {
      await createToDoListUser(
        req.body.nickname,
        req.body.name,
        req.body.email
      )
    } catch (error) {
      res.status(400).send({message: error.message})
    }
  })

  // createToDoListUser('002', 'lari', 'Larissa Corrocher', 'lari@gmail.com')

  // getToDoListUsers()

  async function createToDoListTask(
    id: string,
    title: string,
    description: string,
    limit_date: string,
    status: string,
    user_id: string
  ): Promise<void> {
    try { 
      await connection.insert({
        id,
        title,
        description,
        limit_date,
        status,
        user_id
      })
      .into("ToDoListTask")
    } catch (error) {
      console.log("Deu erro: ", error)
    }
  }

  async function getToDoListTasks(): Promise<any> {
    try {
      const result = await connection
      .select("*")
      .from("ToDoListTask")

      console.log(result)
      return result
    } catch (error) {
      console.log("Deu erro: ", error)
    }
  }

  // getToDoListTasks()

  // createToDoListTask('005', 'Comprar limão', 'Ir no mercado e comprar 2 limões', '2020-09-20', 'doing', '001')