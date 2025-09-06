import Blog from "../models/blogSchema.js";
import Comment from "../models/commentSchema.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});

    return res.status(200).json({ message: "Blogs fetch Successfully", blogs });

  } catch (error) {
    res.status(500).json({ error: "Failed to get blogs" });
  }
};

export const createBlog = async (req, res) => {
  try {

    const user = req.user;
    let blog = req.body;
    blog.author = user.id;
    blog.likes = [];
    blog.comments = [];
    console.log(blog);
    const result = await Blog.create({...blog});
    return res.status(201).json({ message: "Blog created", result });
  } catch (error) {
    res.status(500).json({ error: "Failed to create blog" });
  }
};

export const updateBlog = async (req, res) => {
  try {

    const { blogId } = req.params;
    const {title, content} = req.body; 
    const updatedBlog = await Blog.findByIdAndUpdate(blogId,{$set:{title:title, content:content}},{new:true});

    return  res.status(200).json({ message: "Blog is updated", updatedBlog });
  } catch (error) {
    res.status(500).json({ error: "Failed to update blog" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const result = await Blog.deleteOne({_id:blogId});
    if(result.acknowledged && result.deletedCount > 0 )
      return res.status(200).json({ message: "Blog deleted successfully",result});
    else
    return res.status(404).json({ message: "Blog not found or already deleteted",result});
  } catch (error) {
    res.status(500).json({ error: "Failed to delete blog" });
  }
};

export const likeBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
   const blog = await Blog.findById(blogId).select("likes");

if (!blog) return res.status(404).json({ error: "Blog not found" });

if (blog.likes.includes(req.user.id)) {
  await Blog.updateOne({ _id: blogId }, { $pull: { likes: req.user.id } });
  return res.status(200).json({ message: "Blog like removed" });
} else {
  await Blog.updateOne({ _id: blogId }, { $addToSet: { likes: req.user.id } });
  return res.status(200).json({ message: "Blog is liked" });
}

  } catch (error) {
    res.status(500).json({ error: "Failed to like blog" });
  }
};

export const createComment = async (req, res) => {
  try {
    const { blogId } = req.params;
    const {content} = req.body
    const result = await Comment.create({blog:blogId, user:req.user.id, content:content});
    const blogResult = await Blog.updateOne({_id:blogId},{$addToSet:{comments:result._id}});
    return res.status(201).json({ message:"Comment created", result , blogResult});
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment" });
  }
};

export const getComments = async (req, res) => {
  try {
    const { blogId } = req.params;
    const comments = await Comment.find({blog:blogId}).populate('user','username').exec();
    res.status(200).json({ message: "Comment Fetched successfully", comments });
  } catch (error) {
    res.status(500).json({ error: "Failed to get comments" });
  }
};
