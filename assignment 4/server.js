import express from "express"
import dotenv from "dotenv"
import connectToMongo from './src/config/db.js'
import morgan from "morgan"
import { roleAuth } from "./src/middleware/roleAuth.js"
import authRouter from "./src/routes/authRoutes.js"
dotenv.config()


const PORT = process.env.PORT;
const app = express();

// app.use(cors);
connectToMongo();


// create a custom token to log response time in ms
// morgan.token("response-time-ms", function (req, res) {
//   return res.getHeader("X-Response-Time");
// });

// const stream = {
//   write: async (message) => {
//     try {
//       // message looks like: 'GET /api/users 200 15 - 4.5 ms'
//       const parts = message.trim().split(" ");
      
//       const log = new Log({
//         method: parts[0],
//         url: parts[1],
//         status: parseInt(parts[2], 10),
//         responseTime: parseFloat(parts[parts.length - 2]), // last numeric part
//         userAgent: parts[parts.length - 1] || "unknown"
//       });

//       await log.save();
//     } catch (err) {
//       console.error("Error saving log:", err.message);
//     }
//   }
// };

// // use morgan middleware with custom format & stream
// app.use(morgan(":method :url :status :response-time ms", { stream }));


app.use(express.json());

app.use("/auth", authRouter);
app.use("/blogs",);
app.use("/user",)
app.get("/",(req,res)=>{
   res.status(200).json("Api is running...")
})

app.listen(PORT, ()=>{
  console.log(`server is started at Port: ${PORT}`)
})
