import { useBlogs } from "../customHooks/getallblogs";
import bg from "../../public/assets/bg.jpg";
import { useState } from "react";

const generateSlug = (title) =>
  title
    ? title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    : "";

function Blogs() {
  const { blogs, loading, error } = useBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const totalPages = Math.ceil((blogs?.length || 0) / blogsPerPage);
  const displayedBlogs = blogs?.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div
        className="h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="bg-gray-50 flex justify-center items-center">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-6xl mx-4 lg:mx-28 md:-mt-36">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-3xl font-bold mb-2">Blogs</h2>
              <div className="border-b-8 border-blue-500 w-40 mb-6"></div>
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
              ) : blogs?.length === 0 ? (
                <div className="flex justify-center items-center h-[200px] text-gray-600 text-xl">
                  No blogs found
                </div>
              ) : (
                <>
                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                    {displayedBlogs.map((blog) => (
                      <div
                        key={blog.id}
                        className="border rounded-lg p-3 shadow hover:shadow-lg transition h-[420px] flex flex-col text-center"
                      >
                        <img
                          src={blog.productImage || "placeholder.jpg"}
                          alt={blog.title || "Blog Image"}
                          className="object-cover rounded-t-lg mb-4 h-[200px] border"
                          loading="lazy"
                        />
                        <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                          {blog.title || "Untitled"}
                        </h3>
                        <p className="text-gray-700 mb-4 line-clamp-3">
                          {blog.description || "No description available."}
                        </p>
                        <a
                          href={`/blog-detail/${generateSlug(blog.title)}`}
                          className="text-blue-500 hover:text-blue-700 transition cursor-pointer"
                        >
                          Read More →
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-6 space-x-4">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
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
                        onClick={() => handlePageChange(index + 1)}
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
                      onClick={() => handlePageChange(currentPage + 1)}
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
