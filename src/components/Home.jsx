import React from 'react';
import Navbar from './Navbar';
import HeroImg from '../assets/hero.png';
import h from '../assets/h.png';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative flex justify-end mr-1 mt-10 w-full h-auto">
        <img src={h} className="w-full h-full object-cover" alt="background" />
        
        {/* Text Overlay */}
        <div className="absolute top-0 left-0 flex items-center justify-left w-[46%] h-full bg-black bg-opacity-30">
          <p className="text-white text-center text-xl md:text-2xl lg:text-3xl px-4">
            This is a paragraph overlay on the image. You can add more text here, and it will center nicely on the image.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
