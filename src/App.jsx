import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import Services from "./layout/Sevices";
import Contact from "./layout/Contact"; 
import { useState,useEffect } from "react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change 50 to your desired scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="bg-gradient-to-r from-black to-zinc-700">
      <Router>
        <div className="sticky top-0 left-0 w-full z-20"><Head /></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

