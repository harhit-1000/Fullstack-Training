import mongoose from 'mongoose';
import slugify from 'slugify';
const blogSchema = mongoose.Schema({
  title:{type:String, required:true},
  description:{type:String, require:true},
  image:{type:String, required: true},
  category:[{type:String,  enum: ["tech", "lifestyle", "education", "news", "health", "other"], default:"other" }],
  slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
  author:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
  createdAt: {
    type: Date,
    default: Date.now,
  }
}
); 

blogSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true,
    });
  }
})

const Blog = mongoose.model(Blog) || mongoose.Model("Blog",userSchema);

export default Blog;
