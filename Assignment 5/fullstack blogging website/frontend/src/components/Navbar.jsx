import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full mx-0 flex justify-between border-violet-300 border p-4 mt-3 mb-5 '>
      <div>Your Name</div>
      <div className='flex justify-between space-x-5'>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">projects</Link>
        <Link to="/about">About</Link>
        <Link to="/newsletter">Newsletter</Link>
        <Link to="/newsletter">Newsletter</Link>
      </div>
    </div>
  )
}

export default Navbar
