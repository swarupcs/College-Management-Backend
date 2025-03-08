import express from "express";
import bodyParser from "body-parser";

import dotenv from "dotenv";
import { connect } from "./config/database.js";

const PORT = process.env.PORT || 8000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, async () => {
  console.log("server started");
  await connect();
  console.log("Mongo db connected");
});