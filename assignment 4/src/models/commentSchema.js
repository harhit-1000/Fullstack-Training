import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true, trim: true },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const Comment =
  mongoose.model.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
