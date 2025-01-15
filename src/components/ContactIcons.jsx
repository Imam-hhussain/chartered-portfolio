import { BsWhatsapp,BsTelephoneForward } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const ContactIcons = () => {
    const navigate = useNavigate();
  return (
    <div className="relative">
      <div
        className="fixed top-[200px] right-0 flex bg-gray-300 p-2 rounded-md flex-col justify-center items-center gap-4"
        style={{ zIndex: 50 }}
      >
        <a
          href= "https://wa.me/971589702466"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md bg-blue-500 shadow-lg"
        >
       <BsWhatsapp className="text-white" size={30}/>
        </a>

        <button
         onClick={() => navigate("/contact-us")}
          className="p-2 rounded-md bg-blue-500 shadow-lg "
        >
        <BsTelephoneForward className="text-white" size={30}/>
        </button>
      </div>
    </div>
  );
};

export default ContactIcons;

