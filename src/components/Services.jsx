import img1 from "../../public/assets/service-img1.jpeg";
import img2 from "../../public/assets/service-img2.jpg";
import img3 from "../../public/assets/service-img3.jpg";
import img4 from "../../public/assets/service-img4.jpg";
import img5 from "../../public/assets/service-img5.jpg";
import img6 from "../../public/assets/service-img6.jpeg";

const Service = () => {
  const services = [
    {
      id: 1,
      image: img1,
      title: "Accounting",
      description:
        "Our professional team of accountants at VA, can assist in all your accounting needs ranging from monthly bookkeeping to financial reporting and IFRS.",
    },
    {
      id: 2,
      image: img2,
      title: "Training ",
      description:
        "We provide training to businesses for wide variety of areas including IFRS, VAT, accounting software and banking operations i.e. AML/CFT, ALM, Credit Modeling.",
    },
    {
      id: 3,
      image: img3,
      title: "VAT/TAX",
      description:
        "Our VAT Services ensure compliance with all FTA Laws while also focusing on tax savings. Contact us for refunds, reconsiderations & voluntary disclosures.",
    },
    {
      id: 4,
      image: img4,
      title: "Consultancy",
      description:
        "We provide wide range of corporate advisory services for SMEs including transactional advisory & restructuring, business valuation and liquidation.",
    },
    {
      id: 5,
      image: img5,
      title: "Support Services ",
      description:
        "We can support businesses in wide range of services such as payable, payroll and receivable management, bulk data entry and general advice.",
    },
    {
      id: 6,
      image: img6,
      title: "Audit",
      description:
        "One of core areas where our unmatchable expertise from Big 4 audit firms can assist SMEs especially in Internal Audit and Financial Investigations.",
    },
     {
      id: 6,
      image: img6,
      title: "Audit",
      description:
        "One of core areas where our unmatchable expertise from Big 4 audit firms can assist SMEs especially in Internal Audit and Financial Investigations.",
    },
  ];

  return (
    <div className="md:-mt-52 mt-4">
      <div className=" ">
        <h1 className="text-blue-500 sm:text-blue-500 text-3xl font-bold border-b-8 border-blue-500 inline-block pb-1">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 2xl:grid-col-5 gap-6 py-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-300 shadow-sm overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-500 text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-black">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
