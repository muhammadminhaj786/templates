
import express from 'express'
import { imageUpload } from '../controllers/upload.controller.js'
import upload from "../middlewares/fileUpload.js";

const uploadRoute = express.Router()

uploadRoute.post("/upload", upload.array("files", 10), imageUpload);

export default uploadRoute;