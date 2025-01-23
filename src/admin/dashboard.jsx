import Navbar from "./Navbar";
import Sidebar from "./sidebar";
const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar/>
        <div className="flex-1 p-6 flex items-center justify-center">
            <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-gray-800">
              Welcome to Dashboard
            </h2>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Dashboard;
