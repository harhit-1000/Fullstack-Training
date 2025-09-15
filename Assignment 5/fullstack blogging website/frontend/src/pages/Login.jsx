import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        { email, password }
      );

      setToken(response.data.token);

      localStorage.setItem("authToken", response.data.token);

      navigate('/');
    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid credentials or server error");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center '>
      <div className='w-4/10 bg-white hover:shadow-2xl border-4 border-violet-300 p-5 flex flex-col  justify-center space-y-10 py-20 rounded-2xl'>
        <h2 className='font-bold text-3xl pl-10'>Login</h2>
        <form className='flex flex-col  justify-center space-y-10 mt-3' onSubmit={handleSubmit}>
          {/* email */}
        <div>
          <label className="block text-xl pl-10  " htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='example@gmail.com'
          className='w-8/10 text-xl mt-2 py-2 px-2 rounded ml-10 focus:outline-none focus:ring-2 focus:ring-violet-300   '
          required
        />
        </div>
        {/* password */}
        <div>
          <label  className="block text-xl pl-10 " htmlFor="password">Password</label>
        <input  className=" w-8/10 text-xl mt-2 ml-10 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-300    "
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='*******'
          required
        />
        </div>

        <button type="submit" className='text-white text-xl bg-violet-400 hover:transition-transform duration-300 ease-in-out  hover:bg-violet-500 rounded-sm py-3 w-9/10 mx-auto'>Login</button>
      </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-violet-600 hover:text-violet-700 font-medium"
          >
            Register here
          </Link>
        </p>
      </div>
      
    </div>
  );
};

export default Login;
