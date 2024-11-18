import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from './Navbar';
import Footer from './Footer';

const BookAppointment = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
  });

  const doctors = ['Dr. John Doe', 'Dr. Jane Smith', 'Dr. Alan Brown', 'Dr. Emily White'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Appointment booked successfully!');
  };

  const handleBackToDoctors = () => {
    navigate('/doctors'); // Navigate to /doctors
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Book Your Appointment</h1>
        <p className="mt-4 text-lg">
          Schedule your appointment with ease using our seamless booking system.
        </p>
      </div>

      {/* Booking Form */}
      <div className="py-16 bg-gray-50 px-8 lg:px-20">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Fill in the Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                required
              />
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select Doctor
                </option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-bold rounded-lg"
            >
              Book Appointment
            </button>
          </form>

          {/* Back to Doctors Button */}
          <button
            onClick={handleBackToDoctors}
            className="mt-6 w-full py-3 bg-gray-500 hover:bg-gray-600 transition text-white font-bold rounded-lg"
          >
            Back to Doctors
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookAppointment;
