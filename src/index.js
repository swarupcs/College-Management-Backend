import express from "express";
import bodyParser from "body-parser";

import dotenv from "dotenv";
import { connect } from "./config/database.js";

import apiRoutes from "./routes/index.js";
import serverless from "serverless-http";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

if (process.env.NODE_ENV === "production") {
  // Connect to MongoDB Atlas before handling requests
  (async () => {
    await connect();
    console.log("MongoDB connected");
  })();
} else if (process.env.NODE_ENV === "development") {
  app.listen(PORT, async () => {
    console.log("server started on port", PORT);
    await connect();
    console.log("Mongo db connected");
  });
}

export const handler = serverless(app);
