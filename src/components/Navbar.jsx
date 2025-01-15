import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-[85px] w-full md:px-4 lg:px-28 px-4" >
       <nav className="bg-blue-500  text-white py-1 font-bold shadow-md top-0 z-50">
      <div className="flex justify-end items-center px-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center">
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors"
        >
          Home
        </a>
        <a
          href="/aboutt-us"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors"
        >
          About Us
        </a>
        
        <a
          href="/blogs"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors"
        >
          Blogs
        </a>
        <a
          href="/contact-us"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors"
        >
          Contact Us
        </a>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-600 block px-4 py-2 rounded-full transition-colors"
          >
            Home
          </a>
          <a
            href="/about-us"
            className="bg-blue-500 hover:bg-blue-600 block px-4 py-2 rounded-full transition-colors"
          >
            About Us
          </a> 
          <a
            href="/blogs"
            className="bg-blue-500 hover:bg-blue-600 block px-4 py-2 rounded-full transition-colors"
          >
            Blogs
          </a>
          <a
            href="/contact-us"
            className="bg-blue-500 hover:bg-blue-600 block px-4 py-2 rounded-full transition-colors"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
    </div>
   
  );
};

export default Navbar;
