// DoctorCard.jsx
import React from 'react';

const DoctorCard = ({ doctor, onBooking }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
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
        onClick={() => onBooking(doctor)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
