import { Router } from "express";
import { updateInfo, enrollCourse, studentView, viewAllEnrollCourse } from "../controllers/studentController.js";
const studentRouter = Router();

studentRouter.put("/updateInfo",updateInfo);
studentRouter.get("/view-all-courses",studentView);
studentRouter.post("/enroll-course/:title",enrollCourse);
studentRouter.get("/view-all-enroll-course/",viewAllEnrollCourse);

// studentRouter.get("/console",()=>{console.log("hi harshit great job!"); res.status(200).json({message:"all well"})})
export default studentRouter;
