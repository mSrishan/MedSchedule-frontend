import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SImg1 from '../assets/SImg1.jpg';
import SImg2 from '../assets/SImg2.jpg';
import SImg3 from '../assets/SImg3.jpg';
import SImg4 from '../assets/SImg4.jpeg';
import SImg5 from '../assets/SImg5.jpg';
import SImg6 from '../assets/SImg6.jpg';
import SImg7 from '../assets/SImg7.jpg';
import SImg8 from '../assets/SImg8.jpg';
import SImg9 from '../assets/SImg9.jpg';
import SImg10 from '../assets/SImg10.jpg';
import SImg11 from '../assets/SImg11.jpg';
import SImg12 from '../assets/SImg12.jpg';
import SImg13 from '../assets/SImg13.jpg';
import SImg14 from '../assets/SImg14.jpg';
import SImg15 from '../assets/SImg15.jpg';
import SImg16 from '../assets/SImg16.jpg';

const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cardData, setCardData] = useState([]);

  // Simulate fetching data using useEffect
  useEffect(() => {
    // Simulating an API call to fetch data
    const fetchedData = [
      // Medical specialties
      {
        image: SImg1,
        heading: "Cardiology",
        description: "Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system.",
        category: "Medical"
      },
      {
        image: SImg2,
        heading: "Dermatology",
        description: "Dermatology is the branch of medicine dealing with the skin, nails, hair and its diseases.",
        category: "Medical"
      },
      {
        image: SImg3,
        heading: "Neurology",
        description: "Neurology is a branch of medicine dealing with disorders of the nervous system.",
        category: "Medical"
      },
      {
        image: SImg4,
        heading: "Orthopedics",
        description: "Orthopedics is the branch of medicine concerned with the correction of deformities or functional impairments of the bones and joints.",
        category: "Medical"
      },
      {
        image: SImg5,
        heading: "Pediatrics",
        description: "Pediatrics is a branch of medicine that involves the medical care of infants, children, and adolescents.",
        category: "Medical"
      },
      {
        image: SImg6,
        heading: "Psychiatry",
        description: "Psychiatry is a branch of medicine that focuses on the diagnosis, treatment, and prevention of mental, emotional, and behavioral disorders.",
        category: "Medical"
      },
      {
        image: SImg7,
        heading: "Oncology",
        description: "Oncology is a branch of medicine that specializes in the diagnosis, treatment, and prevention of cancer.",
        category: "Medical"
      },
      {
        image: SImg8,
        heading: "Endocrinology",
        description: "Endocrinology is the study of the endocrine system and its diseases, focusing on hormone imbalances.",
        category: "Medical"
      },
      {
        image: SImg9,
        heading: "Gastroenterology",
        description: "Gastroenterology is the branch of medicine focused on the digestive system and its disorders.",
        category: "Medical"
      },
      // Normal hospital services
      {
        image: SImg10,
        heading: "Emergency Care",
        description: "Emergency care involves immediate treatment for acute illnesses or injuries that require urgent attention.",
        category: "Services"
      },
      {
        image: SImg11,
        heading: "Laboratory Services",
        description: "Our hospital offers comprehensive lab services, including blood tests, urinalysis, and diagnostic imaging.",
        category: "Services"
      },
      {
        image: SImg12,
        heading: "Surgical Services",
        description: "We provide a wide range of surgical services, from minor procedures to complex surgeries performed by specialists.",
        category: "Services"
      },
      {
        image: SImg13,
        heading: "Radiology",
        description: "Radiology services include advanced imaging technologies like X-rays, CT scans, and MRI for accurate diagnosis.",
        category: "Services"
      },
      {
        image: SImg14,
        heading: "Physical Therapy",
        description: "Our physical therapy services are designed to help patients recover mobility and function after injuries or surgeries.",
        category: "Services"
      },
      {
        image: SImg15,
        heading: "Maternity Care",
        description: "Maternity care includes prenatal, postnatal, and labor & delivery services to ensure the well-being of both mother and baby.",
        category: "Services"
      },
      {
        image: SImg16,
        heading: "Pharmacy",
        description: "Our pharmacy provides essential medications and consultations to ensure safe and effective treatment plans.",
        category: "Services"
      },
    ];

    setCardData(fetchedData); // Update the state with fetched data
  }, []); // The empty dependency array means it runs only once when the component mounts

  // Filter card data based on search and selected category
  const filteredCards = cardData.filter(({ heading, description, category }) =>
    (heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
      description.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCategory ? category === selectedCategory : true)
  );

  // Log when searchQuery or selectedCategory changes
  useEffect(() => {
    console.log('Search query or category changed');
  }, [searchQuery, selectedCategory]);

  return (
    <div>
      <Navbar />
      <div className='bg-blue-300 text-center py-10'>
        <h1 className='text-5xl font-bold'><span className='text-gray-900'>Our</span><span className='text-gray-900'> Services</span></h1>
        <p className='text-gray-700 mt-2 tracking-wider'>Expert team committed to helping with all hope</p>
      </div>

      {/* Search Bar and Categories */}
      <div className="px-6 py-4">
        <div className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="mt-6 flex justify-center space-x-6">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${!selectedCategory ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border'}`}
            onClick={() => setSelectedCategory('')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedCategory === 'Medical' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border'}`}
            onClick={() => setSelectedCategory('Medical')}
          >
            Medical
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedCategory === 'Services' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border'}`}
            onClick={() => setSelectedCategory('Services')}
          >
            Services
          </button>
        </div>
      </div>

      {/* Display filtered cards */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCards.map(({ image, heading, description }, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={image}
                  alt={heading}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{heading}</h3>
                  <p className="text-gray-600 mt-2">{description}</p>
                  <div className="flex justify-between mt-6">
                    <button
                      className="bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-100 hover:text-black focus:outline-none"
                    >
                      See Specialist
                    </button>
                    <button
                      className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-500 focus:outline-none"
                    >
                      Connect Now

                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
