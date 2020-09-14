import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { connect } from "http2";

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

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

/**************************************************************/

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)
	return result[0][0]
}

//getActorById("001")

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)
  return result[0][0]
}

//getActorByName('Moacyr Franco')

const getActorsByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
  `)
  return result[0]
}

//getActorsByGender('female')

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: string,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

//createActor('008', 'Regina Cazé', 1200000, '1954-02-25', 'female')

async function getAllActors(): Promise<any> {
  try {
    const result = await connection.raw(`
      SELECT * from Actor
    `)
    console.log(result[0])
  } catch(error) {
    console.log(error)
  }
}

// getAllActors()

const updateSalaryById = async (
  id: string,
  salary: number,
): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary
    })
    .where("id", id);
};

// updateSalaryById('008', 1250000)

const deleteActor = async (
  id: string,
): Promise<void> => {
  await connection("Actor")
  .delete()
  .where("id", id)
};

// deleteActor('008')

const salaryAverageByGender = async (
  gender: string
): Promise<any> => {
  const result = await connection("Actor")
  .avg("salary as average")
  .where({gender})

  console.log(result)
 
};

// salaryAverageByGender('female')

