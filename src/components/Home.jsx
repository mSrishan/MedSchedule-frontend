import React from 'react';
import Navbar from './Navbar';
import HeroImg from '../assets/hero.jpg';
import EcIcon from '../assets/ec.png';
import CallIcon from '../assets/call.png';
import DoctorIcon from '../assets/doctor.png';
import OhIcon from '../assets/oh.png';
import Home2 from '../assets/home2.jpg';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[653px]">
        <img src={HeroImg} className="w-full h-full object-cover" alt="background" />

        {/* Gradient Overlay with Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="ml-10 md:ml-20 lg:ml-28 p-8 max-w-lg space-y-6 animate-fadeIn">
            <p className="text-blue-300 bg-white/20 backdrop-blur-md text-center text-lg md:text-2xl lg:text-3xl px-4 py-2 rounded-md font-semibold tracking-wide shadow-md">
              Book Your Time, Simplify Your Life
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug tracking-wide">
              Orthopedic Treatment
              <br />
              <span className="text-blue-300">Acute Pain Relief</span>
            </h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out hover:scale-105">
              Read More 
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex items-center justify-between px-20 py-10 space-x-8">
        {/* Emergency Cases Card */}
        <div className="bg-blue-400 px-8 py-6 w-72 h-96 flex flex-col justify-between rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <img src={EcIcon} className="h-16 w-16 mx-auto mb-4" />
          <p className="text-white font-semibold text-xl text-center">Emergency Cases</p>
          <hr className="border-white my-4" />
          <p className="text-white font-normal text-center mb-4">
            Our team is available to handle emergency cases around the clock. Reach out to us for urgent assistance anytime.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <img src={CallIcon} className="h-8 w-8" />
            <p className="text-white font-semibold">947 643 981</p>
          </div>
        </div>

        {/* Doctors' Timetable Card */}
        <div className="bg-blue-900 px-8 py-6 w-72 h-96 flex flex-col justify-between rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <img src={DoctorIcon} className="h-16 w-16 mx-auto mb-4" />
          <p className="text-white font-semibold text-xl text-center">Doctors' Timetable</p>
          <hr className="border-white my-4" />
          <p className="text-white font-normal text-center mb-4">
            Plan your visit by checking our doctors' availability. Stay informed with real-time schedule updates.
          </p>
          <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto">
            Timetable +
          </button>
        </div>

        {/* Opening Hours Card */}
        <div className="bg-blue-400 px-8 py-6 w-72 h-96 flex flex-col justify-between rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <img src={OhIcon} className="h-16 w-16 mx-auto mb-4" />
          <p className="text-white font-semibold text-xl text-center">Opening Hours</p>
          <hr className="border-white my-4" />
          <div className="text-white font-normal text-center mb-4">
            <li>Week Days: 8:00 AM - 7:00 PM</li>
            <li>Weekend Days: 6:00 AM - 5:00 PM</li>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="flex items-center justify-between bg-slate-200 py-12 px-16">
        <img src={Home2} className="h-96 w-[600px] rounded-lg shadow-lg " alt="About Us" />
        <div className="max-w-lg ml-8 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">The Heart and Science of Medical Care</h1>
          <p className="text-gray-600">
            MedSchedule combines compassionate care with state-of-the-art medical technology to bring you a comprehensive suite of healthcare services. Our goal is to provide personalized, effective treatment tailored to each patient's needs.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mt-4">Services List:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Comprehensive Inpatient Services</li>
            <li>Medical and Surgical Services</li>
            <li>Outpatient Services</li>
            <li>Medicine and Equipment</li>
            <li>Specialized Support Services</li>
            <li>Instant Operation & Appointment</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow-md mt-6 transition duration-300 ease-in-out transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

<div className='bg-blue-900 px-10 py-12 mx-auto mt-20 rounded-lg shadow-lg max-w-3xl'>
  <div className='flex flex-col items-center'>
    <h1 className='text-white font-bold text-4xl text-center mb-6'>Subscribe for Daily Updates</h1>
    <div className='flex items-center bg-white rounded-md p-2 w-full max-w-md'>
      <input type='text' placeholder='Enter your email' className='p-2 rounded-l-md border-none outline-none flex-grow' />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-r-md shadow-lg mt-1 transition duration-300 ease-in-out transform hover:scale-105'>
        Subscribe
      </button>
    </div>
    <p className='text-white mt-6 text-center'>
      Subscribe for daily updates and get the latest news, tips, and exclusive offers right in your inbox. Stay informed and never miss a thing!
    </p>
  </div>
</div>

      <Footer />
    </div>
  );
}

export default Home;
