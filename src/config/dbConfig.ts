import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConfig: any = process.env.MONGODB_URI;

const connection = mongoose.connect(dbConfig);

export default connection;
