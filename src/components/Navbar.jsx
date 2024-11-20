import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md py-4">
      <nav className="flex items-center justify-between px-10">
        {/* Logo Section */}
        <div>
          <button onClick={() => navigate('/')} className="focus:outline-none">
            <img className="w-40 h-auto" src={logo} alt="logo" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-12 font-semibold text-lg text-gray-700">
          <ul className="flex space-x-10">
            <li>
              <button
                onClick={() => navigate('/')}
                className="relative inline-block text-gray-800 hover:text-blue-600 group focus:outline-none"
              >
                Home
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 transform origin-left group-hover:scale-x-100"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/about')}
                className="relative inline-block text-gray-800 hover:text-blue-600 group focus:outline-none"
              >
                About
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 transform origin-left group-hover:scale-x-100"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/doctors')}
                className="relative inline-block text-gray-800 hover:text-blue-600 group focus:outline-none"
              >
                Doctors
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 transform origin-left group-hover:scale-x-100"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/services')}
                className="relative inline-block text-gray-800 hover:text-blue-600 group focus:outline-none"
              >
                Services
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 transform origin-left group-hover:scale-x-100"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/contact')}
                className="relative inline-block text-gray-800 hover:text-blue-600 group focus:outline-none"
              >
                Contact Us
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 transform origin-left group-hover:scale-x-100"></span>
              </button>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
