import { useState } from "react";
import bg from "../../public/assets/bg.jpg";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div
        className="h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="bg-gray-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-6xl border mx-4 lg:mx-28 -mt-36">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
            <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
            <div className="border-b-8 border-blue-500 w-40 mb-6"></div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-200 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-200 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full p-3 bg-gray-200 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center bg-gray-100 p-6 rounded-lg">
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="mb-6 text-lg">
                We’d love to hear from you! Reach out to us for any queries or
                assistance.
              </p>
              <div className="space-y-4">
                <p className="text-lg">
                  <span className="font-semibold">Address:</span> 123 Main
                  Street, Islamabad, Pakistan
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Phone:</span> +971 58 970 2466
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Email:</span>{" "}
                  contact@yourdomain.com
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Working Hours:</span> Mon -
                  Fri, 9 AM - 6 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
