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
    <div className="bg-gray-300 px-4 lg:px-28 py-12 md:pb-[300px] pb-6 ">
      <div className="text-center">
        <h1 className="text-green-600 text-3xl font-bold border-b-8 border-green-600 inline-block pb-2">
          Accountant Software We Use
        </h1>
      </div>
      <div className=" py-2 gap-8 md:flex flex-wrap justify-center px-0 ">
        {software.map((service) => (
          <div
            key={service.id}
            className="md:h-[100px] md:w-[160px] bg-white overflow-hidden mt-4 border border-slate-400 "
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
// grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6