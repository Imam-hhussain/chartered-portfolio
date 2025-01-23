import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";

const CreateBlog = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const blog = location.state?.blog || null;

  const [formData, setFormData] = useState({
    storyContent: "",
    title: "",
    description: "",
    tags: [],
    tagInput: "",
    image: null,
    preview: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8000";

  useEffect(() => {
    if (blog) {
      setFormData({
        storyContent: blog.storyContent || "",
        title: blog.title || "",
        description: blog.description || "",
        tags: blog.tags || [],
        tagInput: "",
        image: blog.productImage || null, 
        preview: blog.productImage || null, 
      });
    }
  }, [blog]);

  const handleEditorChange = (content) => {
    setFormData((prev) => ({ ...prev, storyContent: content }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagAdd = () => {
    if (
      formData.tagInput.trim() &&
      !formData.tags.includes(formData.tagInput.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, formData.tagInput.trim()],
        tagInput: "",
      }));
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleTagAdd();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          image: file,
          preview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    setIsSubmitting(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("storyContent", formData.storyContent);
    data.append("tags", JSON.stringify(formData.tags));
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      if (blog) {
        const response = await axios.put(
          `${BASE_URL}/api/v1/update-blog/${blog._id}`,
          data,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        if (response) {
          toast.success("Blog updated successfully!");
          console.log(response.data.updatedBlog);
        }
      } else {
        await axios.post(`${BASE_URL}/api/v1/createBlog`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Blog created successfully!");
      }

      navigate("/all-blogs");
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Network error, please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <div className="h-[1100px] md:w-[150px] w-[80px]  bg-blue-500 text-white md:font-bold pt-10">
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
              <a
                href="/all-contacts"
                className="text-white hover:text-gray-300"
              >
                All Contacts
              </a>
            </li>
            <li>
              <a
                href="/all-contacts"
                className="text-white hover:text-gray-300"
              >
                All Email
              </a>
            </li>
            <li>
              <a
                href="/logout"
                className="text-white bg-rose-600 p-2 rounded-lg hover:text-gray-300"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter Blog Title"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-2">
              <label className="block text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                placeholder="Enter a brief description here..."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="2"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="mb-2">
              <label className="block text-gray-700 mb-1">
                Write your story
              </label>
              <Editor
                apiKey="g6jvhe254zyhtximbtn03v8dhoodk4dp29co1ywta9xsxetd"
                value={formData.storyContent}
                init={{
                  height: 400,
                  plugins: [
                    "advlist autolink lists link image charmap preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table",
                  ],
                  toolbar:
                    "undo redo | bold italic | alignleft aligncenter alignright | link",
                }}
                onEditorChange={handleEditorChange}
              />
            </div>

            <div className="mb-2">
              <label className="block text-gray-700 mb-1">Upload Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="w-full px-3 py-2 border rounded-lg"
              />
              {formData.preview && (
                <img
                  src={formData.preview}
                  alt="Preview"
                  className="mt-2 h-40 w-auto rounded-md"
                />
              )}
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 mb-1">Tags</label>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center"
                  >
                    {tag}
                    <IoIosCloseCircle
                      onClick={() => handleTagRemove(tag)}
                      className="ml-2 cursor-pointer"
                    />
                  </span>
                ))}
                <div className="relative w-full">
                  <input
                    type="text"
                    name="tagInput"
                    placeholder="Add tags"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    value={formData.tagInput}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                  />
                  <IoIosAddCircle
                    size={32}
                    onClick={handleTagAdd}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none ${
                  isSubmitting && "opacity-50 cursor-not-allowed"
                }`}
              >
                {isSubmitting
                  ? blog
                    ? "Updating..."
                    : "Creating..."
                  : blog
                  ? "Update Blog"
                  : "Create Blog"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
