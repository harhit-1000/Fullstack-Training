import {Router} from "express"
const adminRouter = Router();
import { viewAllCourses, deleteUser, searchUser, addCourse, updateCourse, updateRole, deleteCourse, enrolledUserList, enrolledUserCount, courseRevenue } from "../controllers/adminController.js";
adminRouter.get('/view-all-Courses',viewAllCourses);
adminRouter.delete('/delete-user/:email', deleteUser);
adminRouter.delete('/delete-course/:title', deleteCourse );
adminRouter.get('/search-user/:email',searchUser);
adminRouter.post('/add-course',addCourse);
adminRouter.put('/update-course/:title',updateCourse);
adminRouter.put('/update-role/:email',updateRole);
adminRouter.get('/enrolled-users-list/:title',enrolledUserList);
adminRouter.get('/enrolled-users-count/:title',enrolledUserCount);
adminRouter.get('/course-revenue/:title',courseRevenue);

export default adminRouter;
