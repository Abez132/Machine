import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./layout/components/Header";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import Services from "./layout/Sevices";
import Contact from "./layout/Contact";
import AboutUs from "./layout/AboutUs";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// import { Analytics } from "@vercel/analytics/next"

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);

    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollUp = () => {
    const formSection = document.getElementById("top");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-gray-700 rounded-full animate-spin border-t-cyan-500 mb-4"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent rounded-full animate-ping border-t-cyan-400 opacity-20"></div>
          </div>
          <h2 className="text-2xl font-bold gradient-text mb-2">
            HABYAT Trading PLC
          </h2>
          <p className="text-gray-400 animate-pulse">Loading Excellence...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="top"
      className="bg-blob-pattern bg-gray-950 text-amber-50 min-h-screen"
    >
      {/* <Analytics/> */}
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        {/* Enhanced Scroll to Top Button */}
        <motion.div
          onClick={scrollUp}
          className={`fixed right-4 bottom-4 z-50 group cursor-pointer transition-all duration-300 ${
            isScrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              <svg
                className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
