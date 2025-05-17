import React, { useState } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 fixed w-full top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold">Dharaneesh Guhan</div>
        
        {/* Hamburger Icon for Mobile */}
        <button 
          className="lg:hidden flex items-center" 
          onClick={handleToggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`lg:flex space-x-6 ${isMobileMenuOpen ? 'flex flex-col' : 'hidden'} lg:block`}>
          <li>
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
              Experience
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
              Education
            </Link>
          </li>
          <li>
            <Link to="certifications" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
              Certifications
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
