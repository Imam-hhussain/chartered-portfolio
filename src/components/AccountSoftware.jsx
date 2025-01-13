const software = [
    { id: 1, image: "/assets/sf1.png" },
    { id: 2, image: "/assets/sf2.jpg" },
    { id: 3, image: "/assets/sf3.png" },
    { id: 4, image: "/assets/sf4.jpg" },
    { id: 5, image: "/assets/sf5.png" },
    { id: 6, image: "/assets/sf6.jpg" },
  ];
  
  function AccountSoftware() {
    return (
      <div className="bg-gray-300 px-28 py-16 pb-[380px] ">
        <h1 className="text-green-600 text-3xl font-bold border-b-8 border-green-600 inline-block pb-2">
          Accountant Software We Use
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-6 py-8">
          {software.map((service) => (
            <div
              key={service.id}
              className=" h-[80px] w-[120px] bg-white overflow-hidden mt-8"
            >
              <img
                src={service.image}
                alt={`Software ${service.id}`}
                className="w-full h-[100px] flex justify-center items-center object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default AccountSoftware;
  