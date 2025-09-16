import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import { ToastContainer } from "react-toastify";
import Register from './pages/register';
import YourBlogs from './pages/YourBlogs';

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
