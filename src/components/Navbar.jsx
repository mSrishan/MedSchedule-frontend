import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBooking = () => {
    navigate('/appointment'); // Navigate to the /appointment page
  };

  return (
    <div className="bg-white shadow-md py-4">
      <nav className="flex items-center justify-between px-10">
        {/* Logo Section */}
        <div>
          <a href="/home">
            <img className="w-40 h-auto" src={logo} alt="logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-12 font-semibold text-lg text-gray-700">
          <ul className="flex space-x-10">
            <li>
              <a
                href="/"
                className="relative inline-block text-gray-800 hover:text-blue-600 group"
              >
                Home
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 transform origin-left group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="relative inline-block text-gray-800 hover:text-blue-600 group"
              >
                About
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 transform origin-left group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="/doctors"
                className="relative inline-block text-gray-800 hover:text-blue-600 group"
              >
                Doctors
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 transform origin-left group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="relative inline-block text-gray-800 hover:text-blue-600 group"
              >
                Services
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 transform origin-left group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="relative inline-block text-gray-800 hover:text-blue-600 group"
              >
                Contact Us
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 transform origin-left group-hover:scale-x-100"></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Appointment Button */}
        <div>
          <button
            onClick={handleBooking}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Appointments +
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
