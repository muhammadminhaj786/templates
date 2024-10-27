/*****  Packages  *****/
import cors from "cors";
import express from "express";
import winston from "winston";
import bodyParser from "body-parser";

import connectDB from "./src/config/db.js";
import { envConfig } from "./src/utils/env.js";

/******* Modules ******/
const PORT = process.env.PORT || 5000;

const app = express()

envConfig()
connectDB()


app.listen(PORT, ()=> winston.info(`server is runing on ${PORT}`));