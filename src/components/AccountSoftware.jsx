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
      <div className="bg-gray-300 px-4 lg:px-28 py-12 md:pb-[300px] pb-6">
        <div className="text-center">
          <h1 className="text-blue-500 text-3xl font-bold border-b-8 border-blue-500 inline-block pb-2">
            Accountant Software We Use
          </h1>
        </div>
        <div className="py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {software.map((service) => (
            <div
              key={service.id}
              className="bg-white overflow-hidden border border-slate-400"
            >
              <img
                src={service.image}
                alt={`Software ${service.id}`}
                className="w-full h-[100px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default AccountSoftware;
  