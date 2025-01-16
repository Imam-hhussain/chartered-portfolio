function Footer() {
  return (
    <div>
       <div className="flex flex-col lg:flex-row justify-between items-center text-left bg-black text-white py-2 lg:px-28 pt-4">
            <div className="text-sm mb-4">
              <p>
                &copy; {new Date().getFullYear()} ©2024 Virtual Accountants LLC,<br/>
                Designed & Developed by <span className="text-blue-500 font-bold">TechCreator</span> 
              </p>
            </div>
            <div className="text-sm flex justify-between space-x-4">
              <p>
                <a href="/terms" className="hover:underline hover:text-blue-600">
                  Terms & Conditions
                </a>
                </p>
                <p>
                |
                <a href="/privacy" className="hover:underline pl-5 hover:text-blue-600">
          
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
    </div>
  )
}

export default Footer
