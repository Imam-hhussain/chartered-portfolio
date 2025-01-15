import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const customer = [
  {
    id: 1,
    image: "/assets/Clienttes1.jpeg",
    profession: " Davidson management consultant", 
    name:"Rajvi",
    description:
     "Our VAT Services ensure compliance with all FTA Laws while also focusing on tax savings. Contact us for refunds, reconsiderations & voluntary disclosures.",
  },
  {
    id: 2,
    image: "/assets/Clienttes2.jpg",
    profession: " Davidson management consultant", 
    name:"Rajvi",
    description:
     "Our VAT Services ensure compliance with all FTA Laws while also focusing on tax savings. Contact us for refunds, reconsiderations & voluntary disclosures.",
  },
  {
    id: 3,
    image: "/assets/Clienttes3.jpeg",
    profession: " Davidson management consultant", 
    name:"Rajvi",
    description:
      "Our VAT Services ensure compliance with all FTA Laws while also focusing on tax savings. Contact us for refunds, reconsiderations & voluntary disclosures.",
  },
 
];

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default to 3 for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2, // Show 2 testimonials
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 testimonial
        },
      },
    ],
  };
  

function CustomerTestimonials() {
  return (
    <div className="z-40 w-full mt-2 text-center  md:-mt-56">
      <h1 className="text-blue-500 text-3xl font-bold border-b-8 border-blue-500 inline-block pb-2 mb-8">
        Customer Testimonials
      </h1>

      <Slider {...sliderSettings} className="w-full">
        {customer.map((customer) => (
          <div
            key={customer.id}
            className="p-4 overflow-hidden bg-white shadow-lg rounded-lg"
          >
            <div className="flex justify-center">
              <img
                src={customer.image}
                alt={`Customer ${customer.id}`}
                className="w-20 h-20 object-cover rounded-full border-4 border-blue-500"
              />
            </div>
            <div className="mt-6 px-4 text-gray-700 text-sm">
              <p>{customer.description}</p>
              <div className="text-center font-bold">
              <p className="pt-2">{customer.profession}</p>
              <p className="pt-2">{customer.name}</p>
              </div>
             
            </div>
            <div>
           
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomerTestimonials;
