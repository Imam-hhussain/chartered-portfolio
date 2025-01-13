  const customer = [
    {
      id: 1,
      image: "/assets/Clienttes1.jpeg",
      description:
    "We provide training to businesses for wide variety of areas including IFRS, VAT, accounting software and banking operations i.e. AML/CFT, ALM, Credit Modeling.",
    },
    {
      id: 2,
      image: "/assets/Clienttes2.jpg",
      description:
        "We provide training to businesses for wide variety of areas including IFRS, VAT, accounting software and banking operations i.e. AML/CFT, ALM, Credit Modeling.",
    },
    {
      id: 3,
      image: "/assets/Clienttes3.jpeg",
      description:
        "Our VAT Services ensure compliance with all FTA Laws while also focusing on tax savings. Contact us for refunds, reconsiderations & voluntary disclosures.",
    },
]

function CustomerTestomonials() {
  return (
    <div className="mt-[-300px] z-40">
      <h1 className="text-green-600 text-3xl font-bold border-b-8 border-green-600 inline-block pb-2">
        Customer Testomonials
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {customer.map((customer) => (
          <div
            key={customer.id}
            className="overflow-hidden border-lg bg-gray-50 mt-20"
          >
            <img
              src={customer.image}
              alt={customer.title}
              className="object-cover ml-28 absolute top-[20px]"
            />
            <div className="px-4 py-20">
              <p className="text-black">{customer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default CustomerTestomonials;
