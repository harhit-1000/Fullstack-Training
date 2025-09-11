import { Router } from "express";
import {register, login} from "../middlewares/authMiddleware.js";
const userRouter = Router();

userRouter.post("/register",register);
userRouter.post("/login", login);

export default userRouter;