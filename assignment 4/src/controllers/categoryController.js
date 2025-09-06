import Category from "../models/categorySchema.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({message:"Category fetched successfully ",categories});  
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

export const createCategory = async (req, res) => {
  try {
    const {name, description} = req.body;
    const result = await Category.create({name, description});
    res.status(201).json({message:"Category is created",result});  
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create category" });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const {categoryId} = req.params;
    const {name, description} = req.body;
    const result = await Category.updateOne({_id:categoryId},{$set:{name, description}});
    res.status(201).json({message:"Category is updated",result});  
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update category" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
     const {categoryId} = req.params;
     const result = await Category.deleteOne({_id:categoryId});
    res.status(200).json({message:"Category is deleted",result});  

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete category" });
  }
};
