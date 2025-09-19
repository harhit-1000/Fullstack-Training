import React, { useEffect, useState } from 'react';
import { format, parseISO, isValid } from 'date-fns';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogPage = () => {
  const [blog, setBlog] = useState(null); 
  const { slug } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/blog/blog-page/${slug}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
          }
        );
        console.log(res.data.blog);
        setBlog(res.data.blog); 
      } catch (err) {
        console.error('Error fetching blog', err);
      }
    };
    fetchBlog();
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  // destructure safely
  const {
    title = '',
    description = '',
    imageUrl = '',
    category = [],
    createdAt = '',
    author = {},
  } = blog;

  // format date safely
  let formattedDate = 'Unknown date';
  if (createdAt) {
    const parsed = parseISO(createdAt);
    if (isValid(parsed)) {
      formattedDate = format(parsed, 'dd MMM yyyy');
    }
  }

  return (
    <div className="mx-auto w-full  group flex flex-col sm:w-7/10 md:w-9/10 overflow-hidden space-y-6 mb-4  rounded-md">
      <div className="text-[#1A1A1A] font-bold px-2  text-[30px] md:text-[45px] underline mt-2">{title}</div>
      <img
        className=" w-full md:w-6/10 mx-auto h-[250px] md:h-1/4 object-cover "
        src={imageUrl}
        alt={title}
      />
      <div className="px-2 text-[25px] md:text-[30px]">
        <div className="font-semibold text-[#6941C6]">
          {author?.name || 'Unknown'} &bull; {formattedDate}
        </div>
      <div className="flex flex-wrap space-x-2.5 pb-4 py-5 px-2">
        {category.map((item) => (
          <span
            key={item}
            className="bg-violet-100 my-2 text-[#6941C6] px-4 py-[1px] rounded-full font-semibold text-[16px] md:text-[20px]"
          >
            {item}
          </span>
        ))}
      </div>
        <div className="text-[#667085] text-[18px] md:text-[22px]">{description}</div>
      </div>
    </div>
  );
};

export default BlogPage;
