import { useState } from "react";
import { FaHome, FaInfoCircle, FaBlogger, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // Import NavLink

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-[85px] w-full px-4 md:px-4 lg:px-28">
      <nav className="bg-blue-500 text-white py-1 font-bold shadow-md top-0 z-50">
        {/* Hamburger menu button, visible only on screens smaller than 768px */}
        <div className="flex justify-end items-center px-6 md:hidden">
          <button onClick={handle} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Navigation links visible on medium screens and above */}
        <div className="hidden md:flex justify-between items-center px-6">
          <NavLink
            to="/"
            className={({ isActive }) => `bg-blue-500 px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-blue-500' : ''}`}
          >
            Vision Accounting Solution LLC
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => `bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-blue-600' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => `bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-blue-600' : ''}`}
          >
            About Us
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => `bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-blue-600' : ''}`}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => `bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-blue-600' : ''}`}
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile menu, visible only below 768px */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-blue-500 transition-all duration-300`}>
          <NavLink
            to="/"
            className={({ isActive }) => `px-4 py-1 hover:bg-blue-600 rounded-full transition-colors flex items-center ${isActive ? 'bg-blue-600' : ''}`}
          >
            <div className="mr-2 mb-1 text-xl text-center">
              <FaHome />
            </div>
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => `px-4 py-1 hover:bg-blue-600 rounded-full transition-colors flex items-center ${isActive ? 'bg-blue-600' : ''}`}
          >
            <div className="mr-2 mb-1 text-xl text-center">
              <FaInfoCircle />
            </div>
            About Us
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => `px-4 py-1 hover:bg-blue-600 rounded-full transition-colors flex items-center ${isActive ? 'bg-blue-600' : ''}`}
          >
            <div className="mr-2 mb-1 text-xl text-center">
              <FaBlogger />
            </div>
            Blogs
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => `px-4 py-1 hover:bg-blue-600 rounded-full transition-colors flex items-center ${isActive ? 'bg-blue-600' : ''}`}
          >
            <div className="mr-2 mb-1 text-xl text-center">
              <FaEnvelope />
            </div>
            Contact Us
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
