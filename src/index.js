import express from "express";
import bodyParser from "body-parser";

import dotenv from "dotenv";
import { connect } from "./config/database.js";

import apiRoutes from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log("server started on port", PORT);
  await connect();
  console.log("Mongo db connected");
});