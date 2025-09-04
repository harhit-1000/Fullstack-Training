import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username:{type: String, unique: true, required:true, trim:true},
  email:{type: String, unique:true, required:true, lowercase:true, trim: true},
  password:{type: String, required:true },
  role:{type:String, enum:["user","admin"], required:true},
},{timestamps:{currentTime: ()=> Date.now()}}
)

 const User = mongoose.model.User ||mongoose.model("User", userSchema);

 export default User;