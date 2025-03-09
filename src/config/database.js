import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

export const connect = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(" MongoDB connected successfully");

    // Event listeners to handle MongoDB connection issues
    mongoose.connection.on("error", (err) => {
      console.error(" MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn(" MongoDB disconnected. Attempting to reconnect...");
    });
  } catch (error) {
    console.error(" Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process if MongoDB connection fails
  }
};
