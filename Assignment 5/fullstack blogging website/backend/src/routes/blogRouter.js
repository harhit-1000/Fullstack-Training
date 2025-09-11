import { Router } from "express";
import { showBlog, createBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";
const blogRouter = Router();

blogRouter.get("/show-blog",showBlog);
blogRouter.post("/create-blog",createBlog);
blogRouter.put("/update-blog/:blogId",updateBlog);
blogRouter.delete("/delete-blog/:blogId",deleteBlog);

export default blogRouter;