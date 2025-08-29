import express from "express"
import authenticate from './authenticate.js'
import controll from "./controller.js";
const app = express();

app.use('/user/:email/:password',authenticate,controll);
// app.post('/',controll);

app.listen(5500,()=>{
  console.log("server started");
})
