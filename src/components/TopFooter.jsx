import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import AccountantLogo from "../../public/assets/logo.png"

import footerImg from "../../public/assets/footerImg.jpg";

function TopFooter() {
  return (
    <footer className="bg-gray-800 text-white py-8 rounded-t-[25px] mt-10 px-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-4 mx-4 md:mx-16 mb-8">
          <div className="px-6 lg:px-0">
            <h3 className="text-xl font-bold mb-4 text-blue-500 flex justify-start items-center">
              <img src={AccountantLogo} className="h-20 w-auto" alt="" />
            </h3>
            <p className="text-sm mb-4 text-white">
              The Premium Accounting and Bookkeeping Services for Small and
              Medium-Sized Enterprises and Start-ups.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 text-blue-500">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          <div className="px-6 lg:px-0">
            <h3 className="text-xl font-bold mb-4 text-blue-500">Contact</h3>
            <p className="font-bold mb-2 text-white">
              MOB: +(971) 34729322973 <br />Tel: +(971) 34729322973
            </p>
            <p className="font-bold mb-2 text-white">Email: info@mywebsite.com</p>
          </div>

          {/* Navigation Links */}
          <div className="px-2">
            <h3 className="text-xl font-bold mb-4 text-blue-500">Navigation</h3>
            <div className="flex flex-col space-y-2 mx-6">
              <a
                href="/"
                className="hover:text-blue-500 transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="/about"
                className="hover:text-blue-500 transition-colors text-sm"
              >
                About US
              </a>
              <a
                href="/services"
                className="hover:text-blue-500 transition-colors text-sm"
              >
                Support Services
              </a>
              <a
                href="/accounting"
                className="hover:text-blue-500 transition-colors text-sm"
              >
                Accounting
              </a>
              <a
                href="/consultancy"
                className="hover:text-blue-500 transition-colors text-sm"
              >
                Consultancy
              </a>
              <a
                href="/traning"
                className="hover:text-blue-500 transition-colors text-sm"
              >
                Training
              </a>
              <a
                href="/contact-us"
                className="hover:text-blue-500 transition-colors text-sm"
              >
                Contact US
              </a>
            </div>
          </div>

          <div className="px-6 lg:px-0">
            <img src={footerImg} alt="" />
            <div className="mt-2 bg-gray-800 p-4">
              <h1 className="py-4 text-xl font-bold text-blue-500">Free Consultation</h1>
              <p className="text-white">
                For initial free consultation please enter your email below.
              </p>
              <form className="flex items-center justify-center pt-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[300px] px-3 py-2 text-sm rounded-l bg-gray-700 text-white"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-1.5 px-3 sm:px-4 rounded-r"
                >
                  Enter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default TopFooter;
