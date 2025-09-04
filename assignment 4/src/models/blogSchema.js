import mongoose, { mongo } from "mongoose";

const blogShema = mongoose.Schema({
  title:{type:String, trim:true, required: true},
  content:{type:String, required:true , trim:true},
  author: {type: mongoose.Schema.Types.ObjectId, required:true, ref:"user" },
  likes:[{type: mongoose.Schema.Types.ObjectId, ref:"user"   }],
  Comments:[{type:mongoose.Schema.Types.ObjectId, ref:"comment", }],
},
{timestamps:{currentTime: ()=> Date.now()}}
);

const Blog = mongoose.model.BlogShema || mongoose.model("Blog", blogShema );

export default Blog;