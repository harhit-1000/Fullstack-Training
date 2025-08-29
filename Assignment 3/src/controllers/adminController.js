import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("StudentManagementSystem");
const users = db.collection("users");
const courses = db.collection("courses");


export const viewAllCourses = async (req, res) => {
  try {
    const result = await courses.find({}).toArray(); 
      
    res.status(200).json({ message: 'All courses listed', result:result });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const {email} = req.params;
    const result = await users.findOneAndDelete({email:email});
    return res.status(200).json({ message: 'User deleted successfully', result:result });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to delete user' });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const {title} = req.params;
    const result = await courses.findOneAndDelete({title:title});
    return res.status(200).json({ message: 'User deleted successfully', result: result });
  } catch (err) {
     return res.status(500).json({ error: 'Failed to delete user' });
  }
};

export const searchUser = async (req, res) => {
  try {
      const {email} = req.params;
      console.log(email);
      const user = await users.findOne({email:email});
    res.status(200).json({ message: 'User search successful', user:user });
  } catch (err) {
    res.status(500).json({ error: 'Failed to search user' });
  }
};

export const addCourse = async (req, res) => {
  try {

      let dataToinsert =req.body; 
      console.log(dataToinsert);
      const result = await courses.insertOne(dataToinsert);
      return res.status(201).json({ message: 'Course added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add course' });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const {title} = req.params;
    const courseToUpdate = req.body;
    console.log(courseToUpdate,title);
    
    const result = await courses.findOneAndUpdate({title:title},{$set: courseToUpdate},{returnDocument: "after"});    
    return res.status(200).json({ message: 'Course updated successfully' });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to update course' });
  }
};

export const updateRole = async (req, res) => {
  try {
    const {email} = req.params;
    const result = await users.findOneAndUpdate({email:email},{$set : {role: "admin"}},{returnDocument:"after"});
    
     res.status(200).json({ message: 'User role updated successfully' },result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user role' });
  }
};
