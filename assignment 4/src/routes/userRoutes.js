import {Router} from "express";
import { getProfile, updateProfile } from "../controllers/userController.js";
const userRouter = Router();
userRouter.get("/",getProfile);
userRouter.put("/",updateProfile);

export default userRouter;
