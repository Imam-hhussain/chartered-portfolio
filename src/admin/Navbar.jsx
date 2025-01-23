import { useState } from "react";
import { FaHome, FaInfoCircle, FaBlogger, FaEnvelope } from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clear all tokens or data from localStorage
    navigate("/admin"); // Navigate to /admin page
  };
  const handle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="w-full">
        <nav className="bg-blue-500 text-white py-1 font-bold shadow-md top-0 z-50 relative">
          <div className="flex justify-between items-center px-6">
            <h1 className="text-white text-lg font-bold">
              Vision Accounting Solution LLC
            </h1>

            <div className="flex justify-end items-center md:hidden">
              <button onClick={handle} className="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex justify-between items-center px-10">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `bg-blue-500 px-4 py-2 rounded-full transition-colors ${
                    isActive ? "bg-blue-500" : ""
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors ${
                    isActive ? "bg-blue-600" : ""
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors ${
                    isActive ? "bg-blue-600" : ""
                  }`
                }
              >
                Blogs
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors ${
                    isActive ? "bg-blue-600" : ""
                  }`
                }
              >
                Contact Us
              </NavLink>

              {/* Logout Button */}
              <button
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition-colors"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:hidden bg-blue-500 transition-all duration-300 right-0 w-full`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2 hover:bg-blue-600 rounded transition-colors ${
                  isActive ? "bg-blue-600" : ""
                }`
              }
            >
              <div className="inline-block mr-2 text-xl text-center">
                <FaHome />
              </div>
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `block px-4 py-2 hover:bg-blue-600 rounded transition-colors ${
                  isActive ? "bg-blue-600" : ""
                }`
              }
            >
              <div className="inline-block mr-2 text-xl text-center">
                <FaInfoCircle />
              </div>
              About Us
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `block px-4 py-2 hover:bg-blue-600 rounded transition-colors ${
                  isActive ? "bg-blue-600" : ""
                }`
              }
            >
              <div className="inline-block mr-2 text-xl text-center">
                <FaBlogger />
              </div>
              Blogs
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `block px-4 py-2 hover:bg-blue-600 rounded transition-colors ${
                  isActive ? "bg-blue-600" : ""
                }`
              }
            >
              <div className="inline-block mr-2 text-xl text-center">
                <FaEnvelope />
              </div>
              Contact Us
            </NavLink>

            {/* Mobile Logout Button */}
            <button
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition-colors"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
