import { Router } from "express";
import { register,login } from "../middleware/authenticateJWT.js";

const authRouter = Router();

authRouter.post("/register",register);
authRouter.post("/login",login);

export default authRouter;