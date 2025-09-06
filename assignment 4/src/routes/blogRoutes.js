import { Router } from "express";
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  likeBlog,
  createComment,
  getComments,
} from "../controllers/blogController.js";

const blogRouter = Router();

blogRouter.get("/", getBlogs);
blogRouter.post("/", createBlog);
blogRouter.put("/:blogId", updateBlog);
blogRouter.delete("/:blogId", deleteBlog);
blogRouter.post("/:blogId/like", likeBlog);
blogRouter.post("/:blogId/comment", createComment);
blogRouter.get("/:blogId/comment", getComments);

export default blogRouter;
