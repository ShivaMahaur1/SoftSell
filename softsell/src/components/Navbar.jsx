import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the hamburger menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
    setIsMenuOpen(false); // Close the menu after clicking
  };

  return (
    <div>
      <nav className="flex fixed w-full top-0 left-0 z-50   items-center justify-between p-4 shadow-2xl bg-white">
        {/* Logo */}
        <div className="text-black font-bold">
          <img onClick={()=>handleScroll('/')} className="h-15 w-15" src="/logo.png" alt="Logo" />
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex-col sm:flex-row sm:flex absolute sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow-lg sm:shadow-none p-4 sm:p-0 ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          
          <li
            onClick={() => handleScroll('how-it-works')}
            className="hover:text-blue-500 text-black font-medium text-lg cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-100"
          >
            How It Works
          </li>
          <li
            onClick={() => handleScroll('why-choose-us')}
            className="hover:text-blue-500 text-black font-medium text-lg cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-100"
          >
            Why Choose Us
          </li>
          <li
            onClick={() => handleScroll('testimonials')}
            className="hover:text-blue-500 text-black font-medium text-lg cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-100"
          >
            Testimonials
          </li>
          <li
            onClick={() => handleScroll('contact')}
            className="hover:text-blue-500 text-black font-medium text-lg cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-100"
          >
            Contact
          </li>
        </ul>

        {/* Get Started Button and Hamburger Menu */}
        <div className="flex items-center space-x-4">
          {/* Get Started Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Get Started
          </button>

          {/* Hamburger Menu Icon */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;