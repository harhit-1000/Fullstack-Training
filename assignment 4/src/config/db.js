import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
const connectToMongo = async function () {
  try {
    await mongoose.connect(process.env.MONGO_URI);
     console.log(" MongoDB Connected Successfully");
  } catch (error) {
    console.log("Failed to connected Mongodb", error);
  }
};

export default connectToMongo;
