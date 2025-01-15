 import img1 from "../../public/assets/Vmoney.png"
 import img2 from "../../public/assets/Vexperience.png"
 import img3 from "../../public/assets/Vcost.png"
 import img4 from "../../public/assets/Vmoney.png"
 import img5 from "../../public/assets/Vquality.png"
 import img6 from "../../public/assets/Vmoney.png"

 
 const services = [
    {
      id: 1,
      image: img1,
      title: "Accounting",
    },
    {
      id: 2,
      image: img2,
      title: "Training ",
    },
    {
      id: 3,
      image: img3,
      title: "Professinal Team from big",
    },
    {
      id: 4,
      image: img4,
      title: "Consultancy",
    },
    {
      id: 5,
      image: img5,
      title: "Support Services ",
    },
    {
      id: 6,
      image: img6,
      title: "Audit",
    },
  ];
const VAccountant = () => {
  return (
    <div className="text-center">
       <h1 className="text-blue-500 text-3xl font-bold border-b-8 border-blue-500 inline-block pb-2">
       Why Virtual Accountants
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 py-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-2xl border  rounded-[30px] overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-12 object-contain mt-10"
              />
              <div className="p-4">
                <h3 className="text-xl text-bold text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 tex">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>

  )
}

export default VAccountant
