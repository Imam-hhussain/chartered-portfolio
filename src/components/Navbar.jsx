import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white font-bold shadow-md sticky top-0 z-50">
      <div className="py-2">
        <div className="hidden md:flex justify-between w-full px-4">
          <a
            href="/"
            className="hover:bg-green-500 px-4 py-2 rounded-full transition-colors"
          >
            Home
          </a>
          <a
            href="/about-us"
            className="hover:bg-green-500 px-4 py-2 rounded-full transition-colors"
          >
           About Us
          </a>
          <a
            href="/accounting"
            className="hover:bg-green-500 px-4 py-2 rounded-full transition-colors"
          >
            Accounting
          </a>
          <a
            href="/consultancy"
            className="hover:bg-green-500 px-4 py-2 rounded-full transition-colors"
          >
            Consultancy
          </a>
          <a
            href="/Support Services"
            className="hover:bg-green-500 px-4 py-2 rounded-full transition-colors"
          >
           Support Services
          </a>
          <a
            href="/traning"
            className="hover:bg-green-500 px-4 py-2 rounded-full transition-colors"
          >
            Traning
          </a>
          <a
            href="/blogs"
            className="hover:bg-green-500 px-4 py-2 rounded-full transition-colors"
          >
            Blogs
          </a>
          <a
            href="/contact-us"
            className="hover:bg-green-500 px-4 py-2 rounded-full transition-colors"
          >
            Contact US
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-green-600">
          <a
            href="/"
            className="block px-4 py-2 hover:bg-green-500 transition-colors rounded"
          >
            Home
          </a>
          <a
            href="/services"
            className="block px-4 py-2 hover:bg-green-500 transition-colors rounded"
          >
            Services
          </a>
          <a
            href="/about"
            className="block px-4 py-2 hover:bg-green-500 transition-colors rounded"
          >
            About
          </a>
          <a
            href="/resume"
            className="block px-4 py-2 hover:bg-green-500 transition-colors rounded"
          >
            Resume
          </a>
          <a
            href="/projects"
            className="block px-4 py-2 hover:bg-green-500 transition-colors rounded"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 hover:bg-green-500 transition-colors rounded"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;