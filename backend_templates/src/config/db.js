/*****  Packages  *****/
import mongoose from "mongoose";
import winston from "winston";
/*****  Modules  *****/
import {getEnv} from "../utils/env.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(getEnv('MONGO_URI'), {});
    winston.info(`MongoDB Connected ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1)
  }
}

export default connectDB
