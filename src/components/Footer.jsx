import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Replace with the actual path to your logo image

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-white via-gray-100 to-white py-16 px-8 text-blue-900 mt-20'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
        
        {/* Left-aligned Section with Logo, Name, and Paragraph */}
        <div className='flex flex-col items-start'>
          <div className='mb-4'>
            <a href='/home'>
              <img className='w-50 h-auto' src={logo} alt='logo' />
            </a>
          </div>
         
          <p className='text-sm mb-6 text-blue-900 text-justify'>
            Thank you for exploring MedSchedule! Stay tuned for more updates, features, and exclusive content. Connect with us on social media to stay updated.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className='flex flex-col items-start mt-10 ml-12'>
          <h2 className='text-xl font-semibold text-blue-900 mb-4'>Quick Links</h2>
          <a href='/home' className='text-blue-900 hover:text-blue-600 mb-2 transition duration-300 text-sm'>
            Home
          </a>
          <a href='/about' className='text-blue-900 hover:text-blue-600 mb-2 transition duration-300 text-sm'>
            About
          </a>
          <a href='/doctors' className='text-blue-900 hover:text-blue-600 mb-2 transition duration-300 text-sm'>
            Doctors
          </a>
          <a href='/services' className='text-blue-900 hover:text-blue-600 mb-2 transition duration-300 text-sm'>
            Services
          </a>
          <a href='/contactus' className='text-blue-900 hover:text-blue-600 mb-2 transition duration-300 text-sm'>
            Contact Us
          </a>
        </div>

        {/* Social Media Icons Section */}
        <div className='flex flex-col items-start mt-10'>
          <h2 className='text-xl font-semibold text-blue-900 mb-4'>Follow Us</h2>
          <div className='flex space-x-6'>
            <a href='#' className='text-blue-900 hover:text-blue-600 transition duration-300'>
              <FaFacebook size={30} />
            </a>
            <a href='#' className='text-blue-900 hover:text-blue-600 transition duration-300'>
              <FaTwitter size={30} />
            </a>
            <a href='#' className='text-blue-900 hover:text-blue-600 transition duration-300'>
              <FaInstagram size={30} />
            </a>
            <a href='#' className='text-blue-900 hover:text-blue-600 transition duration-300'>
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className='flex flex-col items-start mt-10'>
          <h2 className='text-xl font-semibold text-blue-900 mb-4'>Newsletter</h2>
          <p className='text-sm mb-4 text-blue-900'>
            Subscribe to our newsletter for the latest updates and exclusive offers.
          </p>
          <div className='flex'>
            <input
              type='email'
              placeholder='Enter your email'
              className='px-4 py-2 border border-blue-900 rounded-l-lg text-blue-900 focus:outline-none'
            />
            <button className='px-4 py-2 bg-blue-900 text-white rounded-r-lg hover:bg-blue-400 transition duration-300'>
              Subscribe
            </button>
          </div>
        </div>
        
      </div>

      {/* Copyright Section */}
      <div className='text-center mt-8'>
        <p className='text-sm text-gray-500'>
          &copy; {new Date().getFullYear()} MedSchedule. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
