import React from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Blogs from './Blogs'
// import BlogCard from '../components/BlogCard'

const Home = ({setToken}) => {
  return (
    <>
      <Navbar setToken={setToken}/>
      <Title/>
      {/* <RecentBlog/> */}
      <p className='mt-11 max-w-7xl mx-auto font-bold text-[24px] text-[#1A1A1A]'>All blog posts</p>
      <Blogs/>

    </>
  )
}

export default Home
