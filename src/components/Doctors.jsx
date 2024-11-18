import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

// Sample data for doctors (expanded list)
const doctorsData = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    phone: '+1 234 567 890',
    address: '123 Heart Avenue, NYC',
    hospital: 'Heart Care Hospital',
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialization: 'Dermatologist',
    phone: '+1 987 654 321',
    address: '456 Skin Street, Boston',
    hospital: 'Skin Solutions Clinic',
  },
  {
    id: 3,
    name: 'Dr. Robert Brown',
    specialization: 'Orthopedic Surgeon',
    phone: '+1 555 987 654',
    address: '789 Bone Blvd, Chicago',
    hospital: 'Orthopedic Clinic',
  },
  {
    id: 4,
    name: 'Dr. Emily Davis',
    specialization: 'Neurologist',
    phone: '+1 212 555 1234',
    address: '101 Brain St, LA',
    hospital: 'NeuroHealth Institute',
  },
  {
    id: 5,
    name: 'Dr. Michael Wilson',
    specialization: 'Pediatrician',
    phone: '+1 313 555 4321',
    address: '202 Child St, Miami',
    hospital: 'Pediatrics Care Center',
  },
  {
    id: 6,
    name: 'Dr. Sarah Johnson',
    specialization: 'Ophthalmologist',
    phone: '+1 404 555 6789',
    address: '303 Vision Ave, Dallas',
    hospital: 'Eye Care Clinic',
  },
  {
    id: 7,
    name: 'Dr. William Martinez',
    specialization: 'Gynecologist',
    phone: '+1 505 555 2345',
    address: '404 Women’s Way, Phoenix',
    hospital: 'Women’s Health Hospital',
  },
  {
    id: 8,
    name: 'Dr. Elizabeth Lee',
    specialization: 'Dentist',
    phone: '+1 606 555 3456',
    address: '505 Smile Blvd, San Francisco',
    hospital: 'Bright Smiles Dentistry',
  },
  {
    id: 9,
    name: 'Dr. James Taylor',
    specialization: 'Psychiatrist',
    phone: '+1 707 555 5678',
    address: '606 Peace Path, Seattle',
    hospital: 'Mental Health Institute',
  },
  {
    id: 10,
    name: 'Dr. Linda Walker',
    specialization: 'General Surgeon',
    phone: '+1 808 555 7890',
    address: '707 Surgery St, Boston',
    hospital: 'Surgical Care Center',
  },
  {
    id: 11,
    name: 'Dr. David Clark',
    specialization: 'Endocrinologist',
    phone: '+1 909 555 1234',
    address: '808 Hormone Ave, Atlanta',
    hospital: 'Endocrine Solutions Clinic',
  },
  {
    id: 12,
    name: 'Dr. Patricia Allen',
    specialization: 'Infectious Disease Specialist',
    phone: '+1 101 555 5678',
    address: '909 Infection Blvd, New York',
    hospital: 'Infection Care Clinic',
  },
  {
    id: 13,
    name: 'Dr. Steven Scott',
    specialization: 'Urologist',
    phone: '+1 112 555 2345',
    address: '1001 Urinary St, LA',
    hospital: 'Urology Center',
  },
  {
    id: 14,
    name: 'Dr. Jessica Adams',
    specialization: 'Rheumatologist',
    phone: '+1 213 555 3456',
    address: '1112 Joint St, Miami',
    hospital: 'Rheumatic Care Center',
  },
  {
    id: 15,
    name: 'Dr. Daniel Harris',
    specialization: 'Pulmonologist',
    phone: '+1 314 555 4567',
    address: '1213 Air Ave, Dallas',
    hospital: 'Lung Health Center',
  },
  {
    id: 16,
    name: 'Dr. Maria Lewis',
    specialization: 'Oncologist',
    phone: '+1 415 555 5678',
    address: '1314 Cancer Rd, Chicago',
    hospital: 'Cancer Care Institute',
  },
  {
    id: 17,
    name: 'Dr. Brian Robinson',
    specialization: 'Gastroenterologist',
    phone: '+1 516 555 6789',
    address: '1415 Digestion Dr, San Francisco',
    hospital: 'Gastro Center',
  },
  {
    id: 18,
    name: 'Dr. Nancy Thompson',
    specialization: 'Hematologist',
    phone: '+1 617 555 7890',
    address: '1516 Blood Blvd, Phoenix',
    hospital: 'Hematology Clinic',
  },
  {
    id: 19,
    name: 'Dr. Christopher Moore',
    specialization: 'Plastic Surgeon',
    phone: '+1 718 555 8901',
    address: '1617 Beauty Ave, Seattle',
    hospital: 'Aesthetic Surgery Center',
  },
  {
    id: 20,
    name: 'Dr. Dorothy Green',
    specialization: 'Radiologist',
    phone: '+1 819 555 9012',
    address: '1718 Scan St, LA',
    hospital: 'Radiology Clinic',
  },
  {
    id: 21,
    name: 'Dr. Kevin White',
    specialization: 'Nephrologist',
    phone: '+1 920 555 0123',
    address: '1819 Kidney Rd, Boston',
    hospital: 'Kidney Care Center',
  },
  {
    id: 22,
    name: 'Dr. Betty Hall',
    specialization: 'Allergist',
    phone: '+1 102 555 1234',
    address: '1920 Allergy Ave, Miami',
    hospital: 'Allergy Relief Clinic',
  },
  {
    id: 23,
    name: 'Dr. Joseph Young',
    specialization: 'Geriatrician',
    phone: '+1 203 555 2345',
    address: '2021 Senior St, Chicago',
    hospital: 'Senior Care Center',
  },
  {
    id: 24,
    name: 'Dr. Helen King',
    specialization: 'Emergency Medicine Specialist',
    phone: '+1 304 555 3456',
    address: '2122 Emergency Rd, San Francisco',
    hospital: 'Emergency Care Clinic',
  },

  // Add the rest of the doctor data...
];

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All Specializations');
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

  // Specializations for filter
  const specializations = [
    'All Specializations',
    ...new Set(doctorsData.map((doctor) => doctor.specialization)),
  ];

  // Initialize useNavigate hook
  const navigate = useNavigate();

  // Handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    applyFilters(e.target.value, selectedSpecialization);
  };

  // Handle filter
  const handleFilter = (e) => {
    setSelectedSpecialization(e.target.value);
    applyFilters(searchQuery, e.target.value);
  };

  // Apply filters
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

  // Handle booking appointment (navigation)
  const handleBooking = () => {
    navigate('/appointment'); // Navigate to the /appointment page
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold">Find the Right Doctor</h1>
        <p className="text-lg mt-4">
          Browse our list of highly qualified specialists to get the care you need.
        </p>
      </div>

      {/* Filters and Search Bar */}
      <div className="py-8 px-6 lg:px-20 bg-white ">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 mt-8">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by name, specialization, or hospital..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={searchQuery}
            onChange={handleSearch}
          />

          {/* Filter Dropdown */}
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

      {/* Doctors List */}
      <div className="py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
                <p className="text-blue-600">{doctor.specialization}</p>
                <p className="mt-2 text-gray-600">
                  <strong>Phone:</strong> {doctor.phone}
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> {doctor.address}
                </p>
                <p className="text-gray-600">
                  <strong>Hospital:</strong> {doctor.hospital}
                </p>
                <button
                  onClick={handleBooking}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Book Appointment
                </button>
              </div>
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
