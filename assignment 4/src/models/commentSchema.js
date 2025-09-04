import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    blog: { type: mongoose.Schema.Types.ObjectId, ref: "blog" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    content: { type: String, required: true, trim: true },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const Comment =
  mongoose.model.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
