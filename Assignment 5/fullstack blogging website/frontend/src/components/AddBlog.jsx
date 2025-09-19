import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRef } from "react";

const AddBlog = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("other");
  const fileInputRef = useRef(null);


  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
    if (category.includes(e.target.value))
      toast.info("Already Selected");
    else {
      setCategory((prev) => [...prev, e.target.value]);
    }




  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.info("Uploading...", {
      autoClose: false
    });
    try {
      // image upload

      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "my_unsigned_preset");
      formData.append("cloud_name", "ds1by38ct");



      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ds1by38ct/image/upload",
        { method: "POST", body: formData }
      );

      const data = await res.json();

      // form submit
      const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/blog/create-blog`, { title: title.trim(), description: description.trim(), imageUrl: data.secure_url, category: category }, { headers: { authorization: `Bearer ${localStorage.getItem("authToken")}` } })
      toast.dismiss(loadingToast);
      toast.success("Blog Added Succcessfully");
      setTitle("");
      setDescription("");
      setImage(null);
      setCategory([]);
      setSelectedCategory("other");
      fileInputRef.current.value = null;
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Failed to Add");
    }
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
              minLength={5}
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
              minLength={50}
              required
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1" htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={selectedCategory}
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
            {
              category.map((cat, index) =>
                <div key={index} className="flex mt-2 md:mt-0 px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors">
                  {cat}
                  <button type="button" onClick={() => setCategory((prev) => prev.filter((item) => item !== cat))}
                    className=" ml-2 text-md cursor-pointer">
                    x
                  </button>
                </div>)
            }

          </div>

          {/* Image Upload */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <label className="text-lg font-medium mb-2 md:mb-0" htmlFor="image">Image</label>
            <input
              id="image"
              type="file"
              ref={fileInputRef}
              onChange={(e) => setImage(e.target.files[0])}
              className="border-2 border-gray-300 rounded-md p-2 w-full md:w-auto"
            />


          </div>

          {/* Show Uploaded Image */}
          {image &&
            <div className="flex justify-center mt-4">
              <img src={URL.createObjectURL(image)} alt="uploaded" className="w-48 h-auto rounded-md shadow-md" />
            </div>}

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
