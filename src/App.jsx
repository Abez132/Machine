import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import Services from "./layout/Sevices";
import Contact from "./layout/Contact"; 
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { Analytics } from "@vercel/analytics/next"

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90); // Change 50 to your desired scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const scrollUp = () => {
      const formSection = document.getElementById("top");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const [selected, setSelected] = useState("Home");
    const [currentRoute, setCurrentRoute] = useState("*"); // Track current route
  const location = useLocation(); // Get current route

  // Update `currentRoute` when route changes
  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  // Example: Change state based on route
  useEffect(() => {
    if (currentRoute === "/services") {
      console.log("Now on Services page");
      setSelected("Services");
      // Do something specific for /services
    } else if (currentRoute === "/contact") {
      console.log("Now on Contact page");
      setSelected("Contact");
      // Do something specific for /contact
    }
  }, [currentRoute]);

  return (
    <div id="top" className="relative  bg-gradient-to-r from-sky-950 to-sky-900">
      {/* <Analytics/> */}
      <Router>
        <div className="top-0 left-0 w-full z-20"><Head state={selected} /></div>
        
        <Routes>
          <Route path="*" element={<Home />} />
          
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact/>}/>
          
          
        </Routes>
        <div onClick={scrollUp} className={`fixed right-4 bottom-4 rounded-full text-3xl z-100 backdrop-blur-3xl text-center hover:bg-blue-600 active:bg-blue-600 active:scale-x-85 transition m-2 w-9  text-black opacity-0 hover:cursor-pointer
          ${isScrolled?"opacity-100":""}`}>^</div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

