import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Routes from "./routes/routes";

//import schema
import ClientData from "./models/Index";

//import upload data 
import { Data } from "./data/index";

// upload data to mongodb
//ClientData.insertMany(Data);

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Database connection
const uri = "mongodb://127.0.0.1:27017/dashboard";
mongoose
  .connect(uri)
  .then(() => console.log("mongodb Connected"))
  .catch((err) => console.log("Database Connection Failed" + err));

//Routes
app.use("/dashboard", Routes);




//server connection
const port = 8001;
app.listen(port, () => console.log(`Server listen on port:${port}`));
