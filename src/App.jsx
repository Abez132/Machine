import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import Services from "./layout/Sevices";
import Contact from "./layout/Contact"; 
import { useState,useEffect } from "react";
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

    

  return (
    <div id="top" className="relative p-0 m-0 bg-gradient-to-r from-sky-950 to-sky-900">
      {/* <Analytics/> */}
      <Router>
        <div className="top-0 left-0 w-full z-20"><Head /></div>
        
        <Routes>
          <Route path="*" element={<Home />} />
          
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact/>}/>
          
          
        </Routes>
        <div onClick={scrollUp} className={`fixed right-4 bottom-4 rounded-full text-3xl z-100 backdrop-blur-3xl text-center hover:bg-blue-600 active:bg-blue-600 active:scale-x-85 active:translate-y-2/6 transition m-2 w-9  text-black opacity-0 hover:cursor-pointer
          ${isScrolled?"opacity-100":""}`}>^</div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

