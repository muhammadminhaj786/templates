/*****  Packages  *****/
import cors from "cors";
import express from "express";
import winston from "winston";
import bodyParser from "body-parser";

import connectDB from "./src/config/db.js";
import { envConfig } from "./src/utils/env.js";
import routes from "./src/routes/index.js";

/******* Modules ******/
const PORT = process.env.PORT || 6000;

const app = express()

envConfig()
connectDB()

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "PUT"],
        allowedHeaders: ['Content-Type','Authorization'],
        optionsSuccessStatus: 200
    })
)
app.use(bodyParser.json({limit: '50mb'}))

routes(app)


app.listen(PORT, ()=> winston.info(`server is runing on ${PORT}`));