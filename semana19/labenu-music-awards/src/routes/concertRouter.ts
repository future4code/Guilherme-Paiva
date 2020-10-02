import express from "express";
import {ConcertController} from "../controller/ConcertController";

export const concertRouter = express.Router();

const concertController = new ConcertController();

concertRouter.post("/add", concertController.addConcert);
concertRouter.get("/list", concertController.getConcerts);