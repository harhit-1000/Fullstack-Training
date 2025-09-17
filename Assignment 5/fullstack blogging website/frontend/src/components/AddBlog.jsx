import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import CategoryList from "./CategoryList";

const AddBlog = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "my_unsigned_preset");
    formData.append("cloud_name", "ds1by38ct");



    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ds1by38ct/image/upload",
      { method: "POST", body: formData }
    );

    const data = await res.json();
    setUrl(data.secure_url);
  };

  const handleCategory = (e) => {
    if (category.includes(e.target.value))
      toast.info("Already Selected");
    else {
      setCategory((prev) => [...prev, e.target.value]);
    }

    //  setCategory((prev) => [...prev,e.target.value]


  }

 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, category, url });
    // const res = await axios.post({title:title, description:description, imageUrl:url, category:},{})
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 py-10 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Add Blog</h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {/* Title */}
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="My Blog"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="About the Blog..."
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1" htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              // value={category}
              onChange={handleCategory}
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="other">Other</option>
              <option value="tech">Tech</option>
              <option value="lifestyle" >Lifestyle</option>
              <option value="education">Education</option>
              <option value="news">News</option>
              <option value="health">Health</option>
            </select>
          </div>
          <div className="flex space-x-2">
            
            <CategoryList  category={category} setCategory={setCategory} />    

          </div>

          {/* Image Upload */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <label className="text-lg font-medium mb-2 md:mb-0" htmlFor="image">Image</label>
            <input
              id="image"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="border-2 border-gray-300 rounded-md p-2 w-full md:w-auto"
            />
            <button
              type="button"

              onClick={handleUpload}
              className="mt-2 md:mt-0 px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors"
            >
              Upload
            </button>

          </div>

          {/* Show Uploaded Image */}
          {url && (
            <div className="flex justify-center mt-4">
              <img src={url} alt="uploaded" className="w-48 h-auto rounded-md shadow-md" />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
