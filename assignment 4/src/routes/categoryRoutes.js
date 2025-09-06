import {Router} from "express";
import { getCategories, createCategory, updateCategory, deleteCategory } from "../controllers/categoryController.js";
const categoryRouter = Router();

categoryRouter.get("/",getCategories);
categoryRouter.post("/",createCategory);
categoryRouter.put("/:categoryId",updateCategory);
categoryRouter.delete("/:categoryId",deleteCategory);

export default categoryRouter;