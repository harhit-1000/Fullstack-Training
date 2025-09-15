import React from 'react'
import { Link } from 'react-router-dom';
import toggle from "../assets/toggle_mode.png" 

const Navbar = () => {
  return (
    <div className='w-full mx-0 flex justify-between items-center border-violet-300 border p-4 mt-5 mb-5 '>
      <div className='font-semibold text-[25] cursor-pointer '>Your Name</div>
      <div className='flex justify-between items-center space-x-5 text-[25] '>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">projects</Link>
        <Link to="/about">About</Link>
        <Link to="/newsletter">Newsletter</Link>
        <img className='w-[96px] h-[40px]' src={toggle}/>
      </div>
    </div>
  )
}

export default Navbar
