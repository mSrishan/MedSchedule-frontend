import React, { useState } from "react";
import logo2 from "../assets/logo-2.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempted with Email:", email, "Password:", password);
    // Add authentication logic here
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 ">
          
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 ">
              
              <h2 className="text-2xl font-bold text-blue-900 text-center mb-6"> 
              <img src={logo2} alt="logo" className="w-24 h-auto mx-auto mb-6 " />    
          Welcome to MedSchedule
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-900"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-blue-900"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-400 text-white rounded-lg font-semibold hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-blue-700">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
