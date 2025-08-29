import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });


const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("StudentManagementSystem");
const users = db.collection("users");


export const register = async (req, res, next) => {
  try{

    let {email, password, age, name, mobile} = req.body;
    age = parseInt(age,10);

    if(isNaN(age))
    {res.status(400).json({error:"age must be a number"});}

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {name, email, password: hashedPassword, age, mobile, role:"student"};
  await users.insertOne(newUser);
  res.status(201).json({message: "User register successfully"});
  }catch(err){
    res.status(500).json({error:err, message:"Registration failed"});
  }

 }

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await users.findOne({ email });
    if (!user){ return res.status(400).json({ error: "Invalid credentials" });}

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {return res.status(400).json({ error: "Invalid credentials" });}

    console.log(user._id );
    const token = jwt.sign({ email: user.email, role: user.role, id:user._id }, process.env.JWT_SECRET);



    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
};