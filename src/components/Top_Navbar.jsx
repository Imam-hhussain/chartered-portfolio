import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; 
import Accountantlogo from "../../public/assets/logo1.png";
import { BsWhatsapp } from "react-icons/bs";
const Top_Navbar = () => {
 
  return (
    <div className="relative top-4">
      <div className="absolute top-0 w-full z-10">
        <div className="md:flex md:justify-between mx-4 lg:mx-28">
          <div>
            <div className="flex items-center w-full justify-between">
              <img src={Accountantlogo} alt="Logo" className="h-20 w-auto" />
              <button className="px-3 font-bold py-2 text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:text-white transition rounded-md lg:hidden md:hidden">
                Free Consultation
              </button>
            </div>
          </div>
          <div>
            <div className="md:flex items-center gap-4 w-full md:mt-0 mt-12">
              <div className="text-sm">
                <div className="flex text-white mb-2">
                  <FaEnvelope className="mr-2 mt-1 text-blue-500" />
                  <span>info@account.ae</span>
                </div>
                <div className="flex items-center text-white">
                  <FaPhoneAlt className="mr-2 text-blue-500" />
                  <span>+(971) 34729322973 | +(971) 34729322973</span>
                </div>
              </div>
              <div className="md:flex md:pt-0 gap-4">
                <button className="font-bold text-white bg-blue-500 border border-blue-500 p-2 hover:bg-blue-600 hover:text-white transition rounded-md hidden lg:block text-sm">
                  FREE CONSULTATION
                </button>
                <a
                  href= "https://wa.me/971589702466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded-md bg-blue-500 shadow-lg hidden md:block" // hidden on small screens, shown on medium and above
                >
                  <BsWhatsapp className="text-white" size={30} />
                </a>
              </div>
              <div className="pt-2 md:pt-0">
                <button className="font-bold text-white bg-blue-500 border border-blue-500 p-2 hover:bg-blue-600 hover:text-white transition rounded-md">
                  CT CALCULATOR 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top_Navbar;
