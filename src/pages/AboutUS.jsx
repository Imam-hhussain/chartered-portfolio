import bg from "../../public/assets/bg.jpg";

function AboutUs() {
  return (
    <>
      <div
        className="h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="bg-gray-50 flex justify-center items-center">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-6xl borderborder mx-4 lg:mx-28 -mt-36">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-2">About Us</h2>
            <div className="border-b-8 border-blue-500 w-40 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                Welcome to our Chartered Accountant firm! We specialize in
                providing expert financial solutions tailored to your business
                needs. With years of experience in accounting, tax compliance,
                and financial consultancy, we are dedicated to ensuring your
                financial growth and stability.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team of qualified professionals is committed to delivering
                precise, reliable, and efficient services that empower you to
                make informed decisions. Whether you are a small business owner
                or a large corporation, we offer personalized services to meet
                your unique requirements.
              </p>
              <p className="text-lg text-gray-700">
                Let us help you navigate the complexities of accounting and
                finance so you can focus on achieving your goals. Your success
                is our priority!
              </p>
            </div>

            {/* Contact Details or Highlights */}
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center bg-gray-100 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
            <div className="border-b-8 border-blue-500 w-56 mb-6"></div>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li>
                  <span className="font-semibold text-blue-600">Expertise:</span>{" "}
                  Over a decade of experience in accounting and finance.
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Tailored Solutions:</span>{" "}
                  Personalized services designed to meet your unique needs.
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Reliability:</span>{" "}
                  Accurate and timely reporting for informed decision-making.
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Comprehensive Services:</span>{" "}
                  From tax compliance to financial planning, we cover it all.
                </li>
              </ul>

              <div className="mt-6 space-y-2">
                <p className="text-lg">
                  <span className="font-semibold text-blue-600">Address:</span>{" "}
                  123 Main Street, Islamabad, Pakistan
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-blue-600">Phone:</span>{" "}
                  +971 58 970 2466
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-blue-600">Email:</span>{" "}
                  contact@yourdomain.com
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-blue-600">Working Hours:</span>{" "}
                  Mon - Fri, 9 AM - 6 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
