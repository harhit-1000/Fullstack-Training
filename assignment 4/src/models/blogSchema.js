import mongoose, { mongo } from "mongoose";


const blogShema = mongoose.Schema({
  title:{type:String, trim:true, required: true},
  content:{type:String, required:true , trim:true},
  author: {type: mongoose.Schema.Types.ObjectId, required:true, ref:"User" },
  likes:[{type: mongoose.Schema.Types.ObjectId, ref:"User"   }],
  comments:[{type:mongoose.Schema.Types.ObjectId, ref:"Comment", }],
  category:{type: String}
},
{timestamps:{currentTime: ()=> Date.now()}}
);

const Blog = mongoose.model.BlogShema || mongoose.model("Blog", blogShema );

export default Blog;