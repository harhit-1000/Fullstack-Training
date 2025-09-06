import {Router} from "express";
import { deleteComment, updateComment } from "../controllers/commentController.js";

const commentRouter = Router();

commentRouter.put("/:commentId", updateComment);
commentRouter.delete("/:commentId" , deleteComment);


export default commentRouter;