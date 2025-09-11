import mongoose from "mongoose"
const ConnectToMongo = async ()=>{
 try {
  await mongoose.connect(process.env.MONGO_CONNECT_URI);
  console.log("Mongodb is connected");
 } catch (error) {
  console.log("Failed To Connect Mongodb",error);
 }
 
}

export default ConnectToMongo;