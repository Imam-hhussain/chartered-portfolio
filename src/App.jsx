import Home from "./pages/Home";
import ContactIcons from "./components/ContactIcons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import TopFooter from "./components/TopFooter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Top_Navbar from "./components/Top_Navbar";
import AboutUs from "./pages/AboutUS";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
      <Router>
        <Top_Navbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/aboutt-us" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <TopFooter />
        <Footer />
        <ContactIcons />
      </Router>
      
    </>
  );
}

export default App;
