
function Sidebar() {
  return (
    <div>
        <div className="flex flex-1 h-screen">
          <div className="lg:w-50 md:w-40 sm:w-30 w-20 bg-blue-500 text-white md:font-bold pt-10">
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
    </div>
  )
}

export default Sidebar
