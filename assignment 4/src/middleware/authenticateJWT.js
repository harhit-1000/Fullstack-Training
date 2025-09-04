import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/userSchema.js";
import dotenv from "dotenv";
dotenv.config({path:"../../.env"});
const jwt = jsonwebtoken;

 const register = async (req,res)=>{

  try {

    const user = req.body;
    if(!user.email || !user.password || !user.username )
    {
      return res.status(400).json({error:"Incomplete user Details"});
    }

    const hashed = await bcrypt.hash(user.password,10);
    user.password = hashed;
    console.log(user);
    const result = await User.create({username:user.username, email:user.email, password:user.password, role:"user"});
    return res.status(201).json("register Successfully",result);
  } catch (error) {
    return res.status(500).json({message:"Registration Failed", error:error.message});
  }

}

 const login = async (req,res) => {
  try {
    const user = req.body;
      if(!user.email || !user.password)
    {
      return res.status(400).json({error:"Incomplete user Details"});
    }
    const userDetails = await User.findOne({email:user.email});

    if(!userDetails)
        return res.status(400).json({error:"Invalid user credentails"});
    const decode = bcrypt.compare(user.password,userDetails.password)
    if(!decode)
      return res.status(400).json({error:"Invalid user credentails"});

    const token = jwt.sign({id:userDetails._id,email:userDetails.email,role:userDetails.role},process.env.JWT_SECRET_KEY);
    res.status(200).json({message:"Login Successful",token});
  } catch (error) {
    return res.status(500).json({message:"Login Failed", error:error.message});
    
  }
};

export {register,login};