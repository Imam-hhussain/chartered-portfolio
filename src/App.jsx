import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ContactIcons from "./components/ContactIcons";
import ContactUs from "./pages/ContactUs";
import TopFooter from "./components/TopFooter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Top_Navbar from "./components/Top_Navbar";
import AboutUs from "./pages/AboutUS";
import Blogs from "./pages/Blogs";
import LoginForm from "./admin/loginForm";
import Dashboard from "./admin/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();  // Get the current route

  return (
    <>
      {location.pathname !== "/dashboard" && <Top_Navbar />}
      {location.pathname !== "/dashboard" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/admin" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <TopFooter />
      <Footer />
      {location.pathname !== "/dashboard" &&  <ContactIcons />}
     
      <ToastContainer />
    </>
  );
}

export default App;
