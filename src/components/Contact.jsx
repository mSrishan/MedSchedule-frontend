import React from 'react';
import CImg from '../assets/CImg.jpg';
import Navbar from './Navbar';
import Footer from './Footer';


const Contact = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${CImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-5xl font-extrabold">Contact MedSchedule</h1>
          <p className="mt-4 text-lg max-w-xl">
            Need help managing your medical schedules? Have questions? Reach out to
            us, and we’ll assist you promptly!
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-lg font-semibold">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="bg-gray-50 py-16 px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-center">
                <i className="fa fa-phone text-blue-600 text-2xl mr-4"></i>
                <span className="text-lg">+0123 4567 9876</span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-envelope text-blue-600 text-2xl mr-4"></i>
                <span className="text-lg">support@medschedule.com</span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-map-marker text-blue-600 text-2xl mr-4"></i>
                <span className="text-lg">456 MedPark Avenue, Health City</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-bold rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="bg-gray-100 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Location</h2>
          <p className="mt-2 text-lg text-gray-600">
            Visit our office at 456 MedPark Avenue, Health City.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096085!2d144.9537353153169!3d-37.81621897975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577fc96f74aee35!2s456%20MedPark%20Avenue%2C%20Health%20City!5e0!3m2!1sen!2s!4v1605945292645!5m2!1sen!2s"
            className="w-[90%] md:w-[75%] h-[400px] border-0 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
