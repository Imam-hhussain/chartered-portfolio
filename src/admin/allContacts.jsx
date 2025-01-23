import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { toast } from "react-toastify";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);  // Track current page
  const contactsPerPage = 5;  // 6 contacts per page
  const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8000";

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/all-contact`);
      setContacts(response.data.contacts);
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data.message);
      setError("Failed to fetch contacts");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(contacts.length / contactsPerPage);
  const displayedContacts = contacts.slice(
    (currentPage - 1) * contactsPerPage,
    currentPage * contactsPerPage
  );

  const deleteContact = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/v1/delete-contact/${id}`);
      if (response.data.success) {
        fetchContacts();
        toast.success(response.data.message);
      }
    } catch (err) {
      console.error("Failed to delete contact:", err);
      alert("Failed to delete contact");
    }
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-4">{error}</div>;

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-center my-3">All Contacts</h1>
          <div className="bg-white shadow-md rounded-lg overflow-hidden h-[350px]  md:h-[350px] lg:h-[450px]">
            <div className="grid grid-cols-5 bg-gray-200 text-gray-700 font-semibold py-2 px-4">
              <div>S.No</div>
              <div>Name</div>
              <div>Email</div>
              <div>Message</div>
              <div>Action</div>
            </div>

            <div className="h-full overflow-y-auto">
              {displayedContacts.map((contact, index) => (
                <div
                  key={contact._id}
                  className="grid grid-cols-5 items-center border-b last:border-none py-2 px-4 hover:bg-gray-50"
                >
                  <div>{(currentPage - 1) * contactsPerPage + index + 1}</div>
                  <div>{contact.fullName}</div>
                  <div>{contact.email}</div>
                  <div className="truncate">{contact.message}</div>
                  <div className="flex gap-2">
                    <button
                      className="flex items-center justify-center gap-1 text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md"
                      onClick={() => setSelectedContact(contact)}
                    >
                      <AiFillEye />
                    </button>

                    <button
                      className="flex items-center justify-center gap-1 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md"
                      onClick={() => deleteContact(contact._id)}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-blue-500 hover:bg-blue-600 hover:text-white"
              }`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border rounded ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-blue-500 hover:bg-blue-600 hover:text-white"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
            <div className="space-y-4">
              <div>
                <strong>Name:</strong> {selectedContact.fullName}
              </div>
              <div>
                <strong>Email:</strong> {selectedContact.email}
              </div>
              <div>
                <strong>Message:</strong>
                <p className="mt-2 p-2 bg-gray-100 rounded">{selectedContact.message}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                onClick={() => setSelectedContact(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contacts;
