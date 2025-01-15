
import bg from "../../public/assets/bg.jpg";

function Blogs() {

  return (
    <>
      <div
        className="h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-6xl">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
            <h2 className="text-3xl font-bold mb-2">Blogs</h2>
            <div className="border-b-8 border-blue-500 w-40 mb-6"></div>
             
            </div>
              <p>Blog....</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
