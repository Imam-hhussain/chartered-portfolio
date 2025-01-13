import bg from "../../public/assets/bg.jpg";
import Navbar from "./Navbar";
import Top_Navbar from "./Top_Navbar";
import HeroSection from "./HeroSection";

const Main = () => {
  return (
    <div className="">
    <img className="h-[127vh]" src={bg} alt=" bg image" />
      <div className="absolute w-full top-4 px-28">
        <Top_Navbar/>
    </div>
      <div className="absolute top-[85px] w-full px-28">
        <Navbar/>
      </div> 
      <div className="absolute top-[215px] w-full px-28">
        <HeroSection/>
      </div>
   
    </div>
  )
}

export default Main
