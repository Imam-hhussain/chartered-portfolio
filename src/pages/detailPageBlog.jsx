import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../admin/Navbar";

const generateSlug = (title) =>
  title
    ? title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    : "";

function BlogDetail() {
  const { slug } = useParams();
  const blogs = useSelector((state) => state.blogs.blogs);
  
  const blog = blogs.find((blog) =>
    generateSlug(blog.title) === slug
  );

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <p className="text-xl text-gray-700">Blog not found.</p>
      </div>
    );
  }

  return (
    <>  
    <Navbar/>
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-6 overflow-x-hidden">
      <h1 className="text-4xl font-bold mb-3 text-center">{blog.title}</h1>
      <img
        src={blog.productImage || "placeholder.jpg"}
        alt={blog.title || "Blog Image"}
        className="max-w-full md:h-[400px] mb-3 object-contain rounded-md"
      />
      <p className="text-lg text-gray-700 mb-6 text-center">
        {blog.description}
      </p>
      <div className="text-lg text-gray-600">
        <div dangerouslySetInnerHTML={{ __html: blog.storyContent }} />
      </div>
    </div>
    </>
  );
}

export default BlogDetail;
