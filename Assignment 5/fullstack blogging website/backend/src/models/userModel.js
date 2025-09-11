import mongoose from "mongoose";
import bcrpyt from "bcrypt";
const userSchema = mongoose.Schema({
  name:{type: String, required:[true,"name is required"]},
  email:{type: String, required:true,
      unique:true,
      lowercase: true, 
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address",
    ],},
  password:{type: String, required:true}
},
{
  timestamps:true
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); 
  this.password = await bcrpyt.hash(this.password, 10);
  next();
});

const User = mongoose.models.User || mongoose.model("User",userSchema);

export default User;
