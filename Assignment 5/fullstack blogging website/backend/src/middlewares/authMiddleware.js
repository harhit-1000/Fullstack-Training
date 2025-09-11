import mongoose from "mongoose";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const register = async (req, res)=>{
  try {
    const {name, email, password} = req.body;
    const result = await User.create({name:name, email:email, password:password});
    return res.status(200).json({message:"Successfully registered",result});
  } catch (error) {
    if (error.code === 11000) {
    return res.status(400).json({ message: "Email already registered" });
  }
    return res.status(500).json({message:"Failed to register",});
  }
}

export const login = async (req, res)=>{
  try {
    const {email,password} = req.body;
    const user = await User.findOne({email:email});
    if(!user)
    {
      return res.status(404).json("user not found");
    }
    const verify = await bcrypt.compare(password,user.password);
    if(!verify) 
    {
      return res.status(400).json("wrong password");
    }
    const token = jwt.sign({userId:user._id, name:user.name,email:user.email},process.env.JWT_SECRET);
    return res.status(200).json({token});

    
  } catch (error) {
    res.status(500).json({message:"Failed to login"});
    
  }
}