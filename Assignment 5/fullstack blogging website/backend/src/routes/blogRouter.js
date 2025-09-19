import { Router } from "express";
import { showBlog, createBlog, updateBlog, deleteBlog, yourBlog, blogPage } from "../controllers/blogController.js";
const blogRouter = Router();

blogRouter.get("/show-blog",showBlog);
blogRouter.get("/blog-page/:slug",blogPage);
blogRouter.get("/your-blog",yourBlog);
blogRouter.post("/create-blog",createBlog);
blogRouter.put("/update-blog/:blogId",updateBlog);
blogRouter.delete("/delete-blog/:blogId",deleteBlog);

export default blogRouter;