import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Import icons
import logo from "../../public/assets/Logo.png";
import whatapp from "../../public/assets/whatsapp.png";

const Top_Navbar = () => {
  return (
    <div className="relative top-4">
      <div>
        <div className="md:flex md:justify-between mx-4 lg:mx-28">
          <div>
            <div className="flex items-center w-full justify-between">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
              <button className="px-3 py-2 text-green-600 border border-green-600 hover:bg-green-600 hover:text-white transition rounded-md lg:hidden md:hidden">
                Free consultation
              </button>
            </div>
          </div>
          <div>
            <div className="md:flex  items-center gap-4 w-full md:mt-0 mt-20">
              <div className="text-sm">
                <div className="flex text-white mb-2">
                  <FaEnvelope className="mr-2 mt-1 text-green-600" />
                  <span>info@account.ae</span>
                </div>
                <div className="flex items-center text-white">
                  <FaPhoneAlt className="mr-2 text-green-600" />
                  <span>+(971) 34729322973 | +(971) 34729322973</span>
                </div>
              </div>
              <div className="md:flex gap-4 ">
                <button className="font-bold text-green-600 border border-green-600 p-2 hover:bg-green-600 hover:text-white transition rounded-md hidden lg:block">
                  FREE CONSULTATION
                </button>
                <img
                  className="h-10 sm:hidden hidden md:block"
                  src={whatapp}
                  alt="WhatsApp"
                />
              </div>
              <div>
               
                <button className="font-bold text-green-600 border border-green-600 p-2 hover:bg-green-600 hover:text-white transition rounded-md">
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
