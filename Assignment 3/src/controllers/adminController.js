import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("StudentManagementSystem");
const users = db.collection("users");
const courses = db.collection("courses");


export const viewAllCourses = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sortBy = req.query.sort || "fees";
    const order = 1;
    const skip = (page-1)* limit;
    const result = await courses.find({}).sort({[sortBy]:order}).skip(skip).limit(limit).toArray(); 
    
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


export const enrolledUserList = async (req, res) =>{
  try {

    const {title} = req.params;
    const course = await courses.findOne({title:title});
    const userIdsList = course.userIds;
    const objectIds  = userIdsList.map((id)=> new ObjectId(id));
     const usersList = await users.find({_id: { $in: objectIds } }).toArray();

    console.log(usersList);
    res.status(200).json({message:"All enrolled user listed succesfully", usersList: usersList});
  } catch (error) {
    res.status(500).json({message:"Failed to list all enrolled user"});
    
  }

}

export const enrolledUserCount = async (req, res) =>{
  try {
    const {title} = req.params;
    const course = await courses.findOne({title:title});
    const count = course.userIds.length;
    console.log("count : ",enrolledUserCount);

    res.status(200).json({message:" enrolled user Count Fetched succesfully",count: count });
  } catch (error) {
    res.status(500).json({message:"Failed to list enrolled user count"});
    
  }

}

export const courseRevenue = async (req, res) =>{
  try {
    const {title} = req.params;
    const course = await courses.findOne({title:title});
    const count = course.userIds.length;
    const courseRevenue =  course.fees*count;

    res.status(200).json({message:"Course revenue fetched succesfully", courseRevenue:courseRevenue});
  } catch (error) {
    res.status(500).json({message:"Failed to fetched course Revenue"});
    
  }

}