import bg from "../../public/assets/bg.jpg";
import Navbar from "./Navbar";
import Top_Navbar from "./Top_Navbar";
import HeroSection from "./HeroSection";

const Main = () => {
  return (
    <>
      <div className=" h-[730px] bg-cover bg-center"
      style={{backgroundImage: `url(${bg})`}}
      >
       
    
      <div className="absolute top-0 w-full z-10">
      <Top_Navbar />
      </div>
   
      <div className="absolute top-[85px] w-full md:px-4 lg:px-28 px-4 ">
        <Navbar />
      </div>
      <div className="absolute top-[170px] w-full lg:px-28 px-4">
        <HeroSection />
      </div>
      </div>
    </>
  );
};

export default Main;
