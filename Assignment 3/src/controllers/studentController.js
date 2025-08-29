import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("StudentManagementSystem");
const users = db.collection("users");
const courses = db.collection("courses");

import util from "util";

const updateInfo = async (req, res) => {
  const { id } = req.user;
  let userDataToUpdate = req.body;
  if (userDataToUpdate.age) {
    userDataToUpdate.age = parseInt(userDataToUpdate.age, 10);
    if (isNaN(userDataToUpdate.age)) {
      return res.status(400).json({ error: "age must be a number" });
    }
  }
  // let objectId = new ObjectId(`${id}`);
  // console.log(objectId);
  try {
    const result = await users.findOneAndUpdate(
      { _id: new ObjectId(`${id}`) },
      { $set: userDataToUpdate },
      { returnDocument: "after" }
    );

    return res.status(200).json({ message: "Information Updated" });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: "An error occur during user Information update",
    });
  }
};

const studentView = async (req, res) => {
  try {
    const result = await courses.find({}).toArray();

    res.status(200).json({ message: "All courses listed", result: result });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
};

export const enrollCourse = async (req, res) => {
  try {
    const { title } = req.params;
    const { email } = req.user;
    const courseDetails = await courses.findOne({title});
     if (!courseDetails) {
      return res.status(404).json({ error: "Course not found" });
    }
    
    const user = await users.findOne({ email: email });
    if (!user) {
   return res.status(404).json({ error: "User not found" });
 }

    const updatedCourseIds = user.courseIds || [];
    if (!updatedCourseIds.includes(courseDetails._id)) {
      updatedCourseIds.push(courseDetails._id);
    }
    const enrolledResult = await users.findOneAndUpdate(
      { email },
      { $set: { courseIds: updatedCourseIds } },
      { returnDocument: "after" }
    );
    return res
      .status(200)
      .json({
        message: "Successfully enrolled in  course",
        result: enrolledResult,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to enrolled in  course", error: error });
  }
};
export const viewAllEnrollCourse = async (req, res) => {
  try {
    const {email} = req.user;
    const user = await users.findOne({email});
    const courseIds = user.courseIds;
  if(!courseIds)
  {
    return res.status(200).json("not enrolled in any course");
  }

    const objectIds = courseIds.map((id)=> new ObjectId(id) );
     const coursesList = await courses.find({ _id: { $in: objectIds } }).toArray();
     return res.status(200).json({ courses: coursesList });


  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch courses", error: err.message });
  }
};

export { updateInfo, studentView };
