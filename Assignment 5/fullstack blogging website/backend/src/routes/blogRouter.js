import { Router } from "express";
import { showBlog, createBlog, updateBlog, deleteBlog, yourBlog } from "../controllers/blogController.js";
const blogRouter = Router();

blogRouter.get("/show-blog",showBlog);
blogRouter.get("/your-blog",yourBlog);
blogRouter.post("/create-blog",createBlog);
blogRouter.put("/update-blog/:blogId",updateBlog);
blogRouter.delete("/delete-blog/:blogId",deleteBlog);

export default blogRouter;