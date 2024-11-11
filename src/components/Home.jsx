import React from 'react';
import Navbar from './Navbar';
import HeroImg from '../assets/hero.jpg';
import EcIcon from '../assets/ec.png';
import CallIcon from '../assets/call.png';

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <div className="relative flex justify-end mt-10 w-full h-[653px] mr-1">
        <img src={HeroImg} className="w-full h-full object-cover" alt="background" />

        {/* Text Overlay */}
        <div className="absolute top-0 left-0 flex flex-col justify-center w-[40%] h-full bg-black bg-opacity-40 p-8 space-y-8">
          <p className="text-blue-500 bg-sky-100 text-center text-lg md:text-xl lg:text-2xl px-1 py-2 rounded bg-opacity-80 font-semibold">
            Book Your Time, Simplify Your Life
          </p>

          <h1 className="text-5xl font-semibold text-white leading-tight">
            Orthopedic Treatment
            <br />
            <span>Acute Pain Relief</span>
                  </h1>
                   <button className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4  mt-1 mr-40 ml-25'>
                      Read More 
                   </button>
        </div>
      </div>

      <div>
        <div className='bg-blue-400 ml-14 px-5 py-3 w-60'>
          <img src={EcIcon} className='h-12 w-12 ' />
          <br />
          <p className='text-white font-semibold'>Emergency Cases</p>
          <hr />
          <br />
          <p className='text-white font-normal'>Our team is available to handle emergency cases around the clock. Reach out to us for urgent assistance anytime.</p>
          <br />
          <div className='flex'>
                       <img src={CallIcon} className=' h-8 w-8 ' />
                       <p className='relative font-semibold'>  947 643 981</p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
