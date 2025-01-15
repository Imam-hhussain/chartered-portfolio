import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-[85px] w-full px-4 md:px-4 lg:px-28">
      <nav className="bg-blue-500 text-white py-1 font-bold shadow-md top-0 z-50">
        {/* Toggle Button (only visible on small screens) */}
        <div className="flex justify-end items-center px-6 sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
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
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation (visible on md and larger screens) */}
        <div className="hidden sm:flex justify-between items-center px-16">
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors"
          >
            Home
          </a>
          <a
            href="/about-us"
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

        {/* Mobile Menu (visible only when toggled and on small screens) */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:hidden bg-blue-500 transition-all duration-300`}
        >
          <a
            href="/"
            className="block px-4 py-2 hover:bg-blue-600 rounded-full transition-colors"
          >
            Home
          </a>
          <a
            href="/accounting"
            className="block px-4 py-2 hover:bg-blue-600 rounded-full transition-colors"
          >
            Accounting
          </a>
          <a
            href="/about-us"
            className="block px-4 py-2 hover:bg-blue-600 rounded-full transition-colors"
          >
            About Us
          </a>
          <a
            href="/blogs"
            className="block px-4 py-2 hover:bg-blue-600 rounded-full transition-colors"
          >
            Blogs
          </a>
          <a
            href="/contact-us"
            className="block px-4 py-2 hover:bg-blue-600 rounded-full transition-colors"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
