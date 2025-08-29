import {Router} from "express"
const adminRouter = Router();
import { viewAllCourses, deleteUser, searchUser, addCourse, updateCourse, updateRole, deleteCourse } from "../controllers/adminController.js";
adminRouter.get('/view-all-Courses',viewAllCourses);
adminRouter.delete('/delete-user/:email', deleteUser);
adminRouter.delete('/delete-course/:title', deleteCourse );
adminRouter.get('/search-user/:email',searchUser);
adminRouter.post('/add-course',addCourse);
adminRouter.put('/update-course/:title',updateCourse);
adminRouter.put('/update-role/:email',updateRole);

export default adminRouter;
