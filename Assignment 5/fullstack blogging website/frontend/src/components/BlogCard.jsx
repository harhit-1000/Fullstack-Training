import React from 'react'
import {format} from 'date-fns'
const BlogCard = ({title, description, imageUrl, category, createdAt, author}) => {
  const formattedDate = format(new Date(createdAt), "dd MMM yyyy");
  return (
    <div className ="group flex flex-col sm:w-[260px] md:w-[380px] overflow-hidden space-y-6  mb-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl rounded-md  ">
      <img className='w-full  h-[240px] object-cover transform transition duration-500 hover:scale-105  group-hover:scale-105' src={imageUrl} alt="" />
      <div className='px-2'>
        <div className='font-semibold text-[#6941C6] ' > {author} &bull; {formattedDate}</div>
      <div className='text-[#1A1A1A] font-bold text-[24px] mt-2'>{title.length>=30?title.slice(0,27)+"...":title}</div>
      <div className=' text-[#667085] text-[18px] line-clamp-2' >{description.replace(/\r?\n|\r/g, ' ').replace(/\s+/g, ' ').trim()}</div>
      </div>
      <div className='flex flex-wrap space-x-2.5 pb-4 px-2'>
        {category.map((item)=>
         <span
            key={item}
            className="bg-violet-100 text-[#6941C6] px-4 py-[1px] rounded-full font-semibold text-[14px]"
          >
            {item}
          </span>
        )}
      </div>
    </div>
  )
}

export default BlogCard;
