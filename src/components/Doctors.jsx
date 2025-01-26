// Doctors.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import doctorsData from './doctorsData';  // Import the doctors data
import DoctorCard from './DoctorCard';  // Import the DoctorCard component

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All Specializations');
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

  // Specializations for filter
  const specializations = [
    'All Specializations',
    ...new Set(doctorsData.map((doctor) => doctor.specialization)),
  ];

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    applyFilters(e.target.value, selectedSpecialization);
  };

  const handleFilter = (e) => {
    setSelectedSpecialization(e.target.value);
    applyFilters(searchQuery, e.target.value);
  };

  const applyFilters = (searchTerm, specialization) => {
    const filtered = doctorsData.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchTerm) ||
        doctor.specialization.toLowerCase().includes(searchTerm) ||
        doctor.hospital.toLowerCase().includes(searchTerm);
      const matchesSpecialization =
        specialization === 'All Specializations' || doctor.specialization === specialization;

      return matchesSearch && matchesSpecialization;
    });

    setFilteredDoctors(filtered);
  };

  const handleBooking = (doctor) => {
    // You can pass any doctor details to navigate or handle booking logic here
    console.log('Booking appointment for:', doctor.name);
    navigate('/appointment'); // Navigate to the /appointment page
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold">Find the Right Doctor</h1>
        <p className="text-lg mt-4">
          Browse our list of highly qualified specialists to get the care you need.
        </p>
      </div>

      <div className="py-8 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 mt-8">
          <input
            type="text"
            placeholder="Search by name, specialization, or hospital..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={searchQuery}
            onChange={handleSearch}
          />
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={selectedSpecialization}
            onChange={handleFilter}
          >
            {specializations.map((specialization, index) => (
              <option key={index} value={specialization}>
                {specialization}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}  // Pass doctor data to DoctorCard
                onBooking={handleBooking}  // Pass the booking handler function
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600">
              No doctors found matching your search or filter.
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Doctors;
