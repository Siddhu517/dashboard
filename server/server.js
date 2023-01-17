import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Routes from "./routes/routes";
import dotenv from "dotenv";

dotenv.config();

//import schema
import ClientData from "./models/Index";

//import upload data
import { Data } from "./data/index";

// upload data to mongodb
//ClientData.insertMany(Data);

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT_URL }));

//Database connection

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("mongodb Connected"))
  .catch((err) => console.log("Database Connection Failed" + err));

//Routes
app.use("/api", Routes);

//server connection
const port = process.env.PORT;
app.listen(port, () => console.log(`Server listen on port:${port}`));
