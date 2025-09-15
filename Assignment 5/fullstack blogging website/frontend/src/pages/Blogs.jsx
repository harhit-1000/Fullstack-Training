import React, {useEffect, useState} from 'react'
import BlogCard from '../components/BlogCard'
import axios from 'axios';

const Blogs = () => {

  const [blogs, setBlogs] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
  const fetchBlogs = async () =>{
    try {
    const response =  await axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog/show-blog`);
    setBlogs(response.data.blogs);

    } catch (error) {
      console.error("Error fetching Blog ",error);
    } finally{
      setLoading(false);
    }
  }  
  
  fetchBlogs();
  },[]);

  if(loading) return <p>Loading Blogs...</p>

  return (
    <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4 items-start'>
      {
        blogs.map((blog)=>(
        <BlogCard
        key={blog._id}
        title={blog.title}
        author={blog.author.name}
        description={blog.description}
        imageUrl = {blog.imageUrl}
        category = {blog.category}
        createdAt = {blog.createdAt}
        slug = {blog.slug} 
        
        />))
      }
    </div>
  )
}

export default Blogs
