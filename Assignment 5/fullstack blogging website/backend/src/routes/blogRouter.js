import { Router } from "express";

const blogRouter = Router();

blogRouter.get("/show-blog",showBlog);
blogRouter.post("/create-blog",createBlog);
blogRouter.put("/update-blog",updateBlog);
blogRouter.delete("/delete-blog",deleteBlog);

export default blogRouter;