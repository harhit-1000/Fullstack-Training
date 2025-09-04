import {Router} from "express";

const blogRouter = Router();

blogRouter.get("/self-blog",getBlog);
blogRouter.post("/self-blog",createBlog);
blogRouter.put("/self-blog/:id",updateBlog);
blogRouter.delete("/self-blog:id",deleteBlog);
blogRouter.get("/getAllBlog",getAllBlog);