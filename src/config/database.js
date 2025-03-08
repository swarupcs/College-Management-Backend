import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const mongodb_uri = process.env.MONGODB_URI;

export const connect = async () => {
  await mongoose.connect(mongodb_uri);
};
