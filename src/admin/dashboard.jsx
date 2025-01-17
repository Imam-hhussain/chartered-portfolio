const Dashboard = () => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <div className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <ul className="space-y-4">
            <li>
              <a href="/dashboard" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/profile" className="text-white hover:text-gray-300">
                Profile
              </a>
            </li>
            <li>
              <a href="/settings" className="text-white hover:text-gray-300">
                Settings
              </a>
            </li>
            <li>
              <a href="/logout" className="text-white hover:text-gray-300">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
  </>
  );
};

export default Dashboard;
