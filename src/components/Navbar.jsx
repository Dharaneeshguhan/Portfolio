import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-scroll';
import profileImage from "../assets/Profile.jpg";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo with animation */}
        <div className="flex items-center space-x-3">
<img
  src={profileImage}
  alt="Logo"
  className="w-10 h-10 rounded-full animate-bounce"
/>




          <span className="text-xl font-bold">Dharaneesh Guhan</span>
        </div>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex items-center"
          onClick={handleToggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6">
          {["hero", "skills", "projects", "experience", "education", "certifications", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="hidden lg:flex space-x-4 text-2xl">
          <a href="https://www.linkedin.com/in/dharaneeshguhan-t-a36140284" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Dharaneeshguhan/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 px-4 py-4">
          <ul className="flex flex-col space-y-4">
            {["hero", "skills", "projects", "experience", "education", "certifications", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-gray-400 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4 mt-4 text-2xl">
            <a href="https://www.linkedin.com/in/dharaneeshguhan-t-a36140284" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Dharaneeshguhan/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
