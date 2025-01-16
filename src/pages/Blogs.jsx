import bg from "../../public/assets/bg.jpg";

const blogs = [
  {
    id: 1,
    title: "The Top 5 Tax-Saving Strategies for Businesses in 2025",
    description:
      "Learn how to optimize your taxes with actionable strategies. From leveraging deductions to investing in tax-saving bonds, we've got you covered.",
    link: "/blogs/tax-saving-strategies",
  },
  {
    id: 2,
    title: "Why Accurate Bookkeeping Is the Backbone of Financial Success",
    description:
      "Discover the importance of accurate bookkeeping for financial health and how it ensures compliance during audits and tax filing.",
    link: "/blogs/bookkeeping-tips",
  },
  {
    id: 3,
    title: "How Startups Can Prepare for Their First Audit",
    description:
      "Preparing for your startup's first audit? Explore key steps, common pitfalls, and how to make the process seamless.",
    link: "/blogs/startup-audit-prep",
  },
  {
    id: 4,
    title: "The Future of Accounting: Trends Every Chartered Accountant Should Know",
    description:
      "Explore the latest trends in accounting, from AI and automation to blockchain and sustainability reporting.",
    link: "/blogs/future-of-accounting",
  },
];

function Blogs() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Blog Container */}
      <div className="bg-gray-50 flex justify-center items-center">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-6xl mx-4 lg:mx-28 -mt-36">
          <div className="grid grid-cols-12 gap-6">
            {/* Title Section */}
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-3xl font-bold mb-2">Blogs</h2>
              <div className="border-b-8 border-blue-500 w-40 mb-6"></div>
            </div>

            {/* Blog List */}
            <div className="col-span-12">
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="border rounded-lg p-6 shadow hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                    <p className="text-gray-700 mb-4">{blog.description}</p>
                    <a
                      href={blog.link}
                      className="text-blue-500 hover:text-blue-700 transition"
                    >
                      Read More →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
