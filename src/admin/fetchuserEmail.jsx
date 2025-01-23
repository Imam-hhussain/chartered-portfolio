import axios from "axios";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import Navbar from "./Navbar";
import { toast } from "react-toastify";

const FetchuserEmail = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const emailsPerPage = 9; 

  const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8000";

  const fetchEmails = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/emails`);
      if (response?.data) {
        setEmails(response.data.emails || []);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const deleteEmail = async (emailId) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/v1/delete-email/${emailId}`
      );
      if (response?.data?.success) {
        setEmails((prev) => prev.filter((email) => email._id !== emailId));
        toast.success("Email Deleted successfully");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete email.");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const indexOfLastEmail = currentPage * emailsPerPage;
  const indexOfFirstEmail = indexOfLastEmail - emailsPerPage;
  const currentEmails = emails.slice(indexOfFirstEmail, indexOfLastEmail);

  const totalPages = Math.ceil(emails.length / emailsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <div>
          <div className="lg:w-50 md:w-40 sm:w-30 w-20 h-[560px] bg-blue-500 text-white md:font-bold pt-10">
            <ul className="space-y-10 pl-2">
              <li>
                <a
                  href="/create-blog"
                  className="text-white hover:text-gray-300"
                >
                  Create Blog
                </a>
              </li>
              <li>
                <a href="/all-blogs" className="text-white hover:text-gray-300">
                  All Blogs
                </a>
              </li>
              <li>
                <a
                  href="/all-contacts"
                  className="text-white hover:text-gray-300"
                >
                  All Contacts
                </a>
              </li>
              <li>
                <a
                  href="/all-emails"
                  className="text-white hover:text-gray-300"
                >
                  All Emails
                </a>
              </li>
              <li>
                <a
                  href="/logout"
                  className="text-white bg-rose-600 p-2 rounded-lg hover:text-gray-300 md:hidden"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <h1 className="text-2xl font-bold">User Emails</h1>

          {loading && <p>Loading emails...</p>}

          {error && <p className="text-red-500">{error}</p>}

          {!loading && !error && currentEmails.length === 0 && (
            <p>No emails found.</p>
          )}

          {!loading && !error && currentEmails.length > 0 && (
            <>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      S.No
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Email
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentEmails.map((email, index) => (
                    <tr key={email._id} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">
                        {indexOfFirstEmail + index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {email.email}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => deleteEmail(email._id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-center mt-4">
                <button
                  className={`px-4 py-2 mx-1 ${
                    currentPage === 1
                      ? "bg-gray-300"
                      : "bg-blue-500 text-white hover:bg-blue-700"
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    className={`px-4 py-2 mx-1 ${
                      currentPage === i + 1
                        ? "bg-blue-700 text-white"
                        : "bg-blue-500 text-white hover:bg-blue-700"
                    }`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  className={`px-4 py-2 mx-1 ${
                    currentPage === totalPages
                      ? "bg-gray-300"
                      : "bg-blue-500 text-white hover:bg-blue-700"
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FetchuserEmail;
