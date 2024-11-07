import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
          <nav className='flex items-center justify-between'>
              <div >
                  <a href='#home'>
                      <img className="w-40 h-22 ml-7" src={logo} alt="logo" />
                  </a>
              </div>
              <div className="flex mt-1 ml-10 font-bold text-xl text-gray-500">
  <ul className="flex space-x-16">
    <li>
      <a
        href="#home"
        className="relative inline-block text-black hover:text-blue-700"
      >
        Home
        <span className="absolute left-0 bottom-0 w-full h-[3px] bg-black scale-x-0 transition-transform duration-300 transform origin-left group-hover:scale-x-100"></span>
      </a>
    </li>
    <li>
      <a
        href="#services"
        className="relative inline-block text-black hover:text-blue-700"
      >
        Services
        <span className="absolute left-0 bottom-0 w-full h-[3px] bg-black scale-x-0 transition-transform duration-300 transform origin-left group-hover:scale-x-100"></span>
      </a>
    </li>
    <li>
      <a
        href="#about"
        className="relative inline-block text-black hover:text-blue-700"
      >
        About
        <span className="absolute left-0 bottom-0 w-full h-[3px] bg-black scale-x-0 transition-transform duration-300 transform origin-left group-hover:scale-x-100"></span>
      </a>
    </li>
    <li>
      <a
        href="#contact"
        className="relative inline-block text-black hover:text-blue-700"
      >
        Contact Us
        <span className="absolute left-0 bottom-0 w-full h-[3px] bg-black scale-x-0 transition-transform duration-300 transform origin-left group-hover:scale-x-100"></span>
      </a>
    </li>
  </ul>
</div>

              <div>
                  <button className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4  mt-1 mr-14 '>
                      Appointments +
                  </button>
              </div>
      </nav>
    </div>
  )
}

export default Navbar
