import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGODB_URL!;

export const connectToDatabase = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URL, {
      tls: true,
      ssl: true,
    });
    console.log("Database connect successfully");
  } catch (error) {
    console.log("Database connection error", error);
  }
};
