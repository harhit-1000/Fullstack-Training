import React, { useEffect, useState } from 'react';
import YourBlogCard from '../components/YourBlogCard';
import axios from 'axios';
import {Link} from 'react-router-dom'

const YourBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/blog/your-blog`,{headers: {
      authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },}
        );
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error('Error fetching Blog ', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [blogs]);

  if (loading) return <p className="text-center">Loading Blogs...</p>;
  if (error) return <p className="text-center text-red-500">Error loading blogs.</p>;

  return (
    <div>
      <div className='flex justify-between items-center px-10'>
      <h2 className='mt-3 text-3xl font-bold'>Your Blogs</h2>
      <Link to="/create-blog"><h2 className='mt-3 text-2xl  font-bold border-3 border-black rounded-md px-1 py-1 hover:text-white hover:bg-black hover:scale-110 hover:cursor-pointer transform transition duration-500'>Add Blog</h2></Link>
      </div>
      <div
      className="
        max-w-7xl 
        mx-auto 
        mt-5 
        px-4
        sm:px-6
        lg:px-8
        grid
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        gap-6
        items-start
      "
    >
      {blogs.map((blog) => (
        <YourBlogCard setBlogs={setBlogs}
          key={blog._id}
          id={blog._id}
          title={blog.title}
          author={blog.author.name}
          description={blog.description}
          imageUrl={blog.imageUrl}
          category={blog.category}
          createdAt={blog.createdAt}
          slug={blog.slug}
        />
      ))}
    </div>
    </div>
  );
};

export default YourBlogs;
