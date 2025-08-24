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
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center z-50">
        <div className="text-center relative">
          {/* Animated background elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="relative z-10">
            <div className="relative mb-8">
              <div className="w-24 h-24 border-4 border-gray-700 rounded-full animate-spin border-t-cyan-500 mb-4 mx-auto"></div>
              <div className="absolute inset-0 w-24 h-24 border-4 border-transparent rounded-full animate-ping border-t-cyan-400 opacity-20 mx-auto"></div>
              <div className="absolute inset-0 w-24 h-24 border-2 border-transparent rounded-full animate-pulse border-t-blue-500 opacity-30 mx-auto"></div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2 text-shadow">
                HABYAT Trading PLC
              </h2>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
              </div>
              <p className="text-gray-300 animate-pulse text-lg">
                Loading Excellence...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="top"
      className="bg-blob-pattern bg-mesh-gradient bg-gray-950 text-amber-50 min-h-screen relative overflow-x-hidden"
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
