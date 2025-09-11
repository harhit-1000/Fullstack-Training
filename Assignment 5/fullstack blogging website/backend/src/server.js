import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ConnectToMongo from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
dotenv.config();
const app = express();


app.use(express.json());
morgan("dev");
app.get("/",(req,res)=>{
  res.status(200).json({message:"Api is working"});
});

app.use("/user",userRouter);
// app.use("/blog",blogRouter);

 ConnectToMongo();

app.listen(process.env.PORT,()=>{
  console.log(`sever is started on Port ${process.env.PORT}`);
})