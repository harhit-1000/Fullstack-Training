import Blog from "../models/blogModel.js";

export const showBlog = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const blogs = await Blog.find({})
      .skip(skip)
      .limit(limit)
      .populate("author");

    return res.status(200).json({ message: "Blogs fetched", blogs });
  } catch (error) {
    return res.status(500).json({ error: error.message, message: "Failed to load blogs" });
  }
};

export const yourBlog = async (req, res) =>{
  try {
    const {userId} = req.user; 
    const blogs = await Blog.find({author:userId});
    return res.status(200).json({message:"Blogs Fetched successfully", blogs:blogs});
  } catch (error) {
    return res.status(500).json({ error: error.message, message: "Failed to load blogs" });
  } 
}

export const createBlog = async (req, res) => {
  try {
    const { userId } = req.user; 
    const { title, description, category, imageUrl } = req.body;

    const blog = await Blog.create({
      title:title,
      description:description,
      category:category,
      imageUrl:imageUrl,
      author: userId,
    });

    return res.status(201).json({ message: "Blog created", blog });
  } catch (error) {
    return res.status(500).json({ error: error.message, message: "Failed to create blog" });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { title, description, category, imageUrl } = req.body;
    const update = {"title":title, "description":description, "category":category, "imageUrl":imageUrl};
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (title) blog.title = title;
    if (description) blog.description = description;
    if (category) blog.category = category;
    if (imageUrl) blog.imageUrl = imageUrl;
    await blog.save();
    
   
    return res.status(200).json({ message: "Blog updated", blog });
  } catch (error) {
    return res.status(500).json({ error: error.message, message: "Failed to update blog" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findOneAndDelete({ _id: blogId });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json({ message: "Blog deleted", blog });
  } catch (error) {
    return res.status(500).json({ error: error.message, message: "Failed to delete blog" });
  }
};
