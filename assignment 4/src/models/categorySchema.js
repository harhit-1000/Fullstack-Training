import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    name: { type: String, unique: true, trim: true, required: true },
    description: { type: String, trim: true },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const Category =
  mongoose.model.Category || mongoose.model("Category", categorySchema);

export default Category;
