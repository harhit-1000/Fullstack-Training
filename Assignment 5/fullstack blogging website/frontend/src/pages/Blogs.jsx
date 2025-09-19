import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/blog/show-blog`,{headers: {
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
  }, []);

  if (loading) return <p className="text-center">Loading Blogs...</p>;
  if (error) return <p className="text-center text-red-500">Error loading blogs.</p>;

  return (
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
      {blogs.map((blog, index) => (
        <Link key={index} to={`/blog-page/${blog.slug}`}  >
        <BlogCard
          key={blog._id}
          title={blog.title}
          author={blog.author.name}
          description={blog.description}
          imageUrl={blog.imageUrl}
          category={blog.category}
          createdAt={blog.createdAt}
          slug={blog.slug}
        />
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
