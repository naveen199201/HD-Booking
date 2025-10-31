import mongoose from "mongoose";
import dotenv from "dotenv";
import Experience from "../models/Experience.js";
import { placesData } from "./placesData.js";
import connectDB from "../config/db.js";

dotenv.config();

await connectDB();

await Experience.deleteMany();
await Experience.insertMany(placesData);

console.log("✅ Data Seeded Successfully");
mongoose.connection.close();
