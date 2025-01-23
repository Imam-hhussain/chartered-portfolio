import { FaEye, FaEdit, FaTrash } from "react-icons/fa"; // Import React Icons
import { useBlogs } from "../customHooks/getallblogs";
import Navbar from "./Navbar";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState } from "react";

const generateSlug = (title) =>
  title
    ? title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    : "";

function AdminBlogs() {
  const { blogs, loading, error, refetch } = useBlogs();
  const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/v1/delete-blog/${id}`);
      if (response) {
        toast.success("Blog deleted successfully");
        refetch();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const totalPages = Math.ceil((blogs?.length || 0) / blogsPerPage);
  const displayedBlogs = blogs?.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <div>
          <div className="lg:h-[1100px] md:h-[1450px] h-[2750px]  md:w-[150px] w-[80px]  bg-blue-500 text-white md:font-bold pt-10">
            <ul className="space-y-10 pl-2">
              <li>
                <a href="/create-blog" className="text-white hover:text-gray-300">
                  Create Blog
                </a>
              </li>
              <li>
                <a href="/all-blogs" className="text-white hover:text-gray-300">
                  All Blogs
                </a>
              </li>
              <li>
                <a href="/all-contacts" className="text-white hover:text-gray-300">
                  All Contacts
                </a>
              </li>
              <li>
                <a href="/all-emails" className="text-white hover:text-gray-300">
                  All Email
                </a>
              </li>
              <li>
                <a href="/logout" className="text-white bg-rose-600 p-2 rounded-lg hover:text-gray-300">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center md:w-full">
          <div className="bg-white w-full px-2">
              <div className="col-span-12 md:col-span-6 my-6">
                <h2 className="text-3xl font-bold mb-2">Blogs</h2>
                <div className="border-b-8 border-blue-500 w-40"></div>
              </div>
              <div className="col-span-12">
                {loading ? (
                  <div className="flex justify-center items-center h-[200px] text-gray-600 text-xl">
                    Loading blogs...
                  </div>
                ) : error ? (
                  <div className="flex justify-center items-center h-[200px] text-red-600 text-xl">
                    Error loading blogs: {error.message}
                  </div>
                ) : Array.isArray(blogs) && blogs.length === 0 ? (
                  <div className="text-center text-gray-600 text-xl">No blogs found</div>
                ) : (
                  <>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                      {displayedBlogs.map((blog) => (
                        <div
                          key={blog.id}
                          className="relative group rounded-lg lg:p-3  h-[400px] shadow hover:shadow-lg transition flex flex-col text-center hover:bg-gray-200 hover:opacity-80"
                        >
                          <img
                            src={blog.productImage || "placeholder.jpg"}
                            alt={blog.title || "Blog Image"}
                            className="object-cover rounded-t-lg mb-4 h-[200px] border transition-all duration-300 group-hover:blur-sm group-hover:brightness-50 group-hover:opacity-70"
                            loading="lazy"
                          />
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 line-clamp-2">
                            {blog.title || "Untitled"}
                          </h3>
                          <p className="text-gray-700 mb-4 line-clamp-3 group-hover:text-gray-500">
                            {blog.description || "No description available."}
                          </p>
                          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex space-x-4">
                              <a
                                href={`/blog-detail/${generateSlug(blog.title)}`}
                                className="hover:text-black"
                              >
                                <FaEye size={24} className="text-black" />
                              </a>
                              <Link to="/create-blog" state={{ blog }}>
                                <FaEdit
                                  size={24}
                                  className="text-blue-800 hover:text-blue-700"
                                />
                              </Link>
                              <button
                                className="hover:text-blue-800 hover:text-red"
                                onClick={() => handleDelete(blog._id)}
                              >
                                <FaTrash size={24} className="text-red-800 hover:text-red-700" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center mt-4 space-x-2">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`md:px-4 px-2 md:py-2 py-1 border  ${
                          currentPage === 1
                            ? "bg-gray-300 text-gray-500"
                            : "bg-white text-blue-500 hover:bg-blue-600 hover:text-white"
                        } rounded`}
                      >
                        Previous
                      </button>
                      {Array.from({ length: totalPages }, (_, index) => (
                        <button
                          key={index}
                          onClick={() => handlePageChange(index + 1)}
                         className={`md:px-4 px-2 py-2 border  ${
                            currentPage === index + 1
                              ? "bg-blue-500 text-white"
                              : "bg-white text-blue-500"
                          } hover:bg-blue-600 hover:text-white rounded`}
                        >
                          {index + 1}
                        </button>
                      ))}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`md:px-4 px-2 md:py-2 py-1 border ${
                          currentPage === totalPages
                            ? "bg-gray-300 text-gray-500"
                            : "bg-white text-blue-500 hover:bg-blue-600 hover:text-white"
                        } rounded`}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
         
        </div>
      </div>
    </>
  );
}

export default AdminBlogs;
