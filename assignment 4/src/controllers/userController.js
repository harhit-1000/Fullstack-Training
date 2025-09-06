import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
export const getProfile = async (req, res) => {
  try {
    const profile = await User.findOne({_id:req.user.id}); 
    return res.status(200).json({message:"Profile is fetched", profile});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get profile" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const {password,username} = req.body;
    let updatedPassword; 
    if(password)
     { updatedPassword =await bcrypt.hash(password,10);}

        const profile = await User.updateOne({_id:req.user.id},{$set:{user:username,password:updatedPassword}}); 
    return res.status(200).json({message:"Profile is updated", profile});


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update profile" });
  }
};
