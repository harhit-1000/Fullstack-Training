import React from 'react'
import { format } from 'date-fns'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from 'axios';
import { EditIcon } from 'lucide-react'
import { Link, Router, Route } from 'react-router-dom';
import EditBlog from '../pages/EditBlog';
const YourBlogCard = ({ title, description, imageUrl, category, createdAt, author, id, setBlogs }) => {
  const formattedDate = format(new Date(createdAt), "dd MMM yyyy");

  const handleDelete = async () => {

    const confirm = window.confirm("Do You want to delete this blog?")

    if (!confirm) return

    const response = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/blog/delete-blog/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
    }
    );
    setBlogs((prev) => prev.filter(blog => blog._id !== id));

  }


  return (
    <div className=" flex flex-col sm:w-[260px] md:w-[380px] overflow-hidden space-y-6  mb-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl rounded-md  ">
      <img className='w-full  h-[240px] object-cover transform transition duration-500 hover:scale-105 ' src={imageUrl} alt="" />
      <div className='px-2'>
        <div className='font-semibold text-[#6941C6] ' > {author} &bull; {formattedDate}</div>
        <div className='text-[#1A1A1A] font-bold text-[24px] mt-2'>{title.length>=30?title.slice(0,27)+"...":title}</div>
        <div className=' text-[#667085] text-[18px] line-clamp-2' >{description.replace(/\r?\n|\r/g, ' ').replace(/\s+/g, ' ').trim()}...</div>
      </div>
      <div className='flex flex-wrap space-x-2.5  px-2'>
        {category.map((item) =>
          <span
            key={item}
            className="bg-violet-100 text-[#6941C6] px-4 py-[1px] rounded-full font-semibold text-[14px]"
          >
            {item}
          </span>
        )}
      </div>
      <div className='flex space-x-2 pb-4 px-4'>
        <Link to="/edit-blog" state={{ title, description, imageUrl, category, author, id }}><EditIcon className='text-green-500 size-8 hover:size-9' /></Link>
        
        
        
        <DeleteOutlined onClick={handleDelete} key="delete" className='hover:scale-110' style={{ color: "red", fontSize: "30px" }} />
      </div>
    </div>
  )
}

export default YourBlogCard;
