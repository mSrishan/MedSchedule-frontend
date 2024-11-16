import React from 'react';
import CImg from '../assets/CImg.jpg';

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <div
        className="bg-cover bg-center text-white py-20 text-center h-[800px]"
        style={{ backgroundImage: `url(${CImg})` }}
          >
    <div className='mt-[300px]'>          
        <h1 className="text-4xl font-bold">Contact Informations</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
          Contact Us
        </button>
    </div>
      </div>

      {/* Contact Details and Form Section */}
      <div className="flex flex-wrap justify-between gap-8 py-16 px-8 bg-gray-100">
        {/* Contact Details */}
        <div className="flex-1 min-w-[300px]">
          <div className="flex items-center mb-6">
            <i className="fa fa-phone text-blue-500 text-xl mr-4"></i>
            <span>+0123 4567 9876</span>
          </div>
          <div className="flex items-center mb-6">
            <i className="fa fa-envelope text-blue-500 text-xl mr-4"></i>
            <span>example@mail.com</span>
          </div>
          <div className="flex items-center mb-6">
            <i className="fa fa-fax text-blue-500 text-xl mr-4"></i>
            <span>+0123 4567 9876</span>
          </div>
          <div className="flex items-center mb-6">
            <i className="fa fa-map-marker text-blue-500 text-xl mr-4"></i>
            <span>123 Business Avenue, NYC</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 min-w-[300px] bg-white p-8 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Send Message</h2>
          <form className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Phone number"
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="text-center py-16">
        <h2 className="text-xl font-semibold mb-4">Find Us on Google Maps</h2>
        <p className="mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096085!2d144.9537353153169!3d-37.81621897975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577fc96f74aee35!2s123%20Business%20Avenue%2C%20NYC!5e0!3m2!1sen!2s!4v1605945292645!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
