import bg from "../../public/assets/bg.jpg";
import HeroSection from "./HeroSection";
const Main = () => {
  return (
    <>
      <div className=" h-[730px] bg-cover bg-center"
      style={{backgroundImage: `url(${bg})`}}
      >
      <div className="absolute top-[170px] w-full lg:px-28 px-4">
        <HeroSection />
      </div>
      </div>
    </>
  );
};

export default Main;
