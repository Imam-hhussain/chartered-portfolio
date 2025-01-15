function Footer() {
  return (
    <div>
       <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left bg-black text-white py-2 px-28 pt-4">
            <div className="text-sm mb-4">
              <p>
                &copy; {new Date().getFullYear()} ©2024 Virtual Accountants LLC,<br/>
                Designed & Developed by <span className="text-blue-500 font-bold">TechCreator</span> 
              </p>
            </div>
            <div className="text-sm">
              <p>
                <a href="/terms" className="hover:underline">
                  Terms & Conditions
                </a>
                |
                <a href="/privacy" className="hover:underline">
          
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
    </div>
  )
}

export default Footer
