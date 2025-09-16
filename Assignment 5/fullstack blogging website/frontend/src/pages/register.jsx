import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = ({ setToken }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/register`,
        { name, email, password }
      );
      toast.success("Registered Successfully");
      navigate("/");
    } catch (error) {
      console.error("Register failed", error);
      toast.error("Register failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white hover:shadow-2xl border-2 border-violet-300 p-8 flex flex-col justify-center space-y-6 rounded-2xl">
        <h2 className="font-bold text-2xl sm:text-3xl text-center">Register</h2>

        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="flex flex-col space-y-2">
            <label
              className="text-lg sm:text-xl font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="example1"
              className="w-full text-lg sm:text-xl py-2 px-3 rounded border focus:outline-none focus:ring-2 focus:ring-violet-300"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label
              className="text-lg sm:text-xl font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full text-lg sm:text-xl py-2 px-3 rounded border focus:outline-none focus:ring-2 focus:ring-violet-300"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-2">
            <label
              className="text-lg sm:text-xl font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*******"
              className="w-full text-lg sm:text-xl py-2 px-3 rounded border focus:outline-none focus:ring-2 focus:ring-violet-300"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="text-white text-lg sm:text-xl bg-violet-400 hover:bg-violet-500 rounded-md py-3 w-full transition duration-300 ease-in-out"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-violet-600 hover:text-violet-700 font-medium"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
