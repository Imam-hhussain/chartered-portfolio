import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import CreateBlog from "./admin/CreateBlog";
import BlogDetail from "./pages/detailPageBlog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Contacts from "./admin/allContacts";
import AdminBlogs from "./admin/allBlogs";
import FetchuserEmail from "./admin/fetchuserEmail.jsx";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("Token");

  const [warningShown, setWarningShown] = useState(false);
  useEffect(() => {
    if (location.pathname === "/dashboard" && !token && !warningShown) {
      setWarningShown(true);
      toast.warning("You must be logged in to access this page.");
      navigate("/admin");
    }
  }, [location.pathname, token, warningShown, navigate]);

  const requireAuth = (element) => {
    if (!token) {
      return null;
    }
    return element;
  };

  const isBlogDetailPage = location.pathname.startsWith("/blog-detail");

  return (
    <>
      {!isBlogDetailPage &&
        location.pathname !== "/dashboard" &&
        location.pathname !== "/all-contacts" &&
        location.pathname !== "/create-blog" &&
        location.pathname !== "/all-blogs" &&
        location.pathname !== "/all-emails" &&
         <Top_Navbar />}
      {!isBlogDetailPage &&
        location.pathname !== "/dashboard" &&
        location.pathname !== "/all-contacts" &&
        location.pathname !== "/create-blog" &&
        location.pathname !== "/all-blogs" &&
        location.pathname !== "/all-emails" &&
        <Navbar />}
      {!isBlogDetailPage &&
        location.pathname !== "/dashboard" &&
        location.pathname !== "/all-contacts" &&
        location.pathname !== "/create-blog" &&
        location.pathname !== "/all-blogs" &&
        location.pathname !== "/all-emails" &&
       <ContactIcons />}
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/admin" element={<LoginForm />} />
        <Route path="/all-contacts" element={<Contacts />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/all-blogs" element={<AdminBlogs />} />
        <Route path="/blog-detail/:slug" element={<BlogDetail />} />
        <Route path="/all-emails" element={<FetchuserEmail />} />
        <Route path="/dashboard" element={requireAuth(<Dashboard />)} />
      </Routes>
      <TopFooter />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
