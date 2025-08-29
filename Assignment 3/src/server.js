import express from "express"
import {MongoClient} from "mongodb"
import dotenv from "dotenv"
import userSchema from "./models/userSchema.js";
import courseSchema from "./models/courseSchema.js";
import adminRouter from "./routes/adminRoutes.js";
import userRouter from "./routes/studentRoutes.js";
import {studentVerifyToken, adminVerifyToken} from "./middleware/userAuth.js"
// import { register, login } from "./controllers/authcontroller.js";
import authRouter from "./routes/authRoutes.js";
dotenv.config({ path: "./.env" });


const app = express();
const MONGO_URI = process.env.MONGO_URI;
let client = new MongoClient(MONGO_URI);


async function connectToMongo(){
  try{
      await client.connect();
      const db = client.db("StudentManagementSystem");

       // Courses
const coursesCollection = await db.createCollection("courses", courseSchema)
  .catch(() => console.log("Courses collection already exists"));
if (coursesCollection) {
  await coursesCollection.createIndex({ title: 1 }, { unique: true });
}

// Users
const usersCollection = await db.createCollection("users", userSchema)
  .catch(() => console.log("Users collection already exists"));
if (usersCollection) {
  await usersCollection.createIndex({ email: 1 }, { unique: true });
}

  }
  catch(err){
    console.log("MongoDb connection error",err);
  }
}

app.use(express.json());

app.use('/',authRouter)
app.use('/student',studentVerifyToken,userRouter);
app.use('/admin',adminVerifyToken,adminRouter);



connectToMongo().then(()=>{
  app.listen(process.env.PORT,(req,res)=>{
  console.log("server started");
})

})


