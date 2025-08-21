import mongoose from "mongoose";
import { ExpressError } from "../utils/ExpressError";

const MAX_RETRIES = 5;
const RETRY_DELAY = 5000;

export const connectDB = async (
  retries: number = MAX_RETRIES
): Promise<void> => {
  try {
    const connect_url = process.env.CONNECTURL;
    if (!connect_url) {
      throw new ExpressError(500, "MongoDB connection URL not found");
    }

    await mongoose.connect(connect_url as string, {
      dbName: "portfolio",
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error(`❌ MongoDB Connection Failed: ${err}`);

    if (retries > 0) {
      console.log(
        `🔄 Retrying to connect... (${
          MAX_RETRIES - retries + 1
        }/${MAX_RETRIES})`
      );
      setTimeout(() => connectDB(retries - 1), RETRY_DELAY);
    } else {
      console.error("🚨 All retries exhausted. Exiting process...");
      process.exit(1);
    }
  }
};
