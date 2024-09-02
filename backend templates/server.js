/*****  Packages  *****/
import cors from "cors";
import express from "express";
import winston from "winston";
import bodyParser from "body-parser";

/******* Modules ******/


const app = express()


app.listen(PORT, ()=> winston.info(`server is runing on ${PORT}`));