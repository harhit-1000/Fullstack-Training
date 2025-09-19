import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import { ToastContainer } from "react-toastify";
import Register from './pages/register';
import YourBlogs from './pages/YourBlogs';
import AddBlog from './components/AddBlog';
import EditBlog from './pages/EditBlog';
import Navbar from './components/Navbar'
import BlogPage from './pages/BlogPage';


function App() {

  const [token, setToken] = useState(localStorage.getItem("authToken"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [token]);

  return (
    <div className=''>
      <BrowserRouter>
      <Navbar token={token} setToken={setToken}/>
        <Routes>
          <Route
            path="/"
            element={token ? <Home setToken={setToken}/> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />}
          />
           <Route path="/register"  element={<Register  />} />
           <Route path="/your-blogs"  element={<YourBlogs  />} />
           <Route path="/create-blog"  element={<AddBlog  />} />
           <Route path="/edit-blog"  element={<EditBlog  />} />
           <Route path="/blog-page/:slug"  element={<BlogPage  />} />

        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={3000}   
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default App;
