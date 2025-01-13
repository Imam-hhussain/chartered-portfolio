import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Import icons
import logo from "../../public/assets/Logo.png";
import whatapp from "../../public/assets/whatsapp.png";

const Top_Navbar = () => {
  return (
    <div className="flex items-center justify-between ">

      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>

      <div className="flex items-center">
        <div className="flex flex-col text-sm mr-6">
          <div className="flex items-center text-white">
            <FaEnvelope className="mr-4 text-green-600"/> info@account.ae
          </div>
          <div className="flex items-center text-white">
            <FaPhoneAlt className="mr-4 text-green-600" /> +(971) 34729322973 |
            +(971) 34729322973
          </div>
        </div>
        <button className="ml-6 font-bold text-green-600 border border-green-600 p-2 hover:bg-green-600 hover:text-white">
          FREE CONSULTATION
        </button>
        <img className="h-10 ml-5" src={whatapp} alt="WhatsApp" />
        <button className="ml-6 font-bold text-green-600 border border-green-600 p-2 hover:bg-green-600 hover:text-white">
          CT CALCULATOR
        </button>
      </div>
    </div>
  );
};

export default Top_Navbar;
