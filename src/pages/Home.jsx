import Main from "../components/Main"
import Service from "../components/Services"
import VAccountant from "../components/VAccountant"
import AccountSoftware from "../components/AccountSoftware"
import CustomerTestomonials from "../components/CustomerTestomonials"
import TopFooter from "../components/TopFooter"
import Footer from "../components/Footer"
function Home() {
  return (
    <div>
       <Main/>
       <div className="px-4 lg:px-28">
       <Service/>
       <VAccountant/> 
       </div>
       <AccountSoftware/>
       <div className="lg:px-28 px-4">
       <CustomerTestomonials/>
       </div>
        <TopFooter/>
       <Footer/>
      
     

     

      
    </div>
  )
}

export default Home
