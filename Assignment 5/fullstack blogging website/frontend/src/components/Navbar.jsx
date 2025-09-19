import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({token, setToken}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full  mt-5 mb-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center p-4">
          
          {/* Logo / Name */}
          <div className={`${ token?'':'invisible'} font-semibold text-xl sm:text-2xl cursor-pointer px-2 py-1 border-2 border-black rounded-sm hover:text-white hover:bg-black transition transform duration-500 hover:shadow-2xl md:py-2`}>
            <Link  to="/your-blogs">My Blogs</Link>
          </div>

          {/* Hamburger Icon (Mobile Only) */}
          <button
            className="sm:hidden text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Links (Desktop) */}
          <div className="hidden sm:flex items-center gap-6 text-base sm:text-lg">
            
            <Link to="/"><h2 className=' mt-0 text-xl  font-bold border-3 border-black rounded-md px-1 py-1 hover:text-white hover:bg-black hover:scale-110 hover:cursor-pointer transform transition duration-500'>Home</h2></Link>
            <Link to="/create-blog"><h2 className='mt-0 text-xl  font-bold border-3 border-black rounded-md px-1 py-1 hover:text-white hover:bg-black hover:scale-110 hover:cursor-pointer transform transition duration-500'>Add Blog</h2></Link>
            <Link to="/about"><h2 className='mt-0 text-xl  font-bold border-3 border-black rounded-md px-1 py-1 hover:text-white hover:bg-black hover:scale-110 hover:cursor-pointer transform transition duration-500'>About</h2></Link>
            <Link to="/login"><button onClick={()=> setToken(null)} className="px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition">
              Logout
            </button></Link>
            
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="sm:hidden flex flex-col items-center gap-4 pb-4 text-base">
            <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/newsletter" onClick={() => setIsOpen(false)}>Newsletter</Link>
            <button
              onClick={() => {
                // Add logout logic here
                setIsOpen(false);
              }}
              className="px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
