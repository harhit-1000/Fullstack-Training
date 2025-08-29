import {Router} from "express";
import { register, login } from "../controllers/authcontroller.js";

const authRouter = Router();

authRouter.post('/user/register',register);
authRouter.post('/user/login', login);

export default authRouter;
