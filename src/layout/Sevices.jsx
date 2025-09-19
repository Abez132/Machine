import Cards from "./components/Cards";
import Detail from "./Detaile";

import Burger from "./components/Burger";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion as _motions } from "framer-motion";
import { AnimatePresence } from "framer-motion";

// import { cards } from "./data/cards";
import { destones } from "./data/destone.js";
// import onePiece from "../../public/img.webp";
// import onePiece2 from "../../public/dis.jpg";
import { FaChevronRight } from "react-icons/fa";

import { FaChevronLeft } from "react-icons/fa";

import { imports } from "./data/import";
import { buildings } from "./data/bulding";
import { exports } from "./data/export";
import { pulses } from "./data/pulse";
import { coffees } from "./data/coffee";
import { pluses } from "./data/pluse.js";
import { roasts } from "./data/coffeeRoast.js";

const Services = () => {
  const { state } = useLocation();
  const [showDetail, setShowDetail] = useState(true);
  const [category, setCategory] = useState("mani");
  const [active, setActive] = useState("mani");
  const [activeImport, setActiveImport] = useState("havi");
  const [activeExport, setActiveExport] = useState("pu");
  const [activeProduction, setActiveProduction] = useState("win");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (state) setShowDetail(true);
  }, [state]);

  const images = [{ url: "img.webp" }, { url: "img2.jpg" }];

  const goToRight = () => {
    index < images.length - 1 ? setIndex(index + 1) : setIndex(0);
  };
  const goToLeft = () => {
    index > 0 ? setIndex(index - 1) : setIndex(images.length - 1);
  };

  return (
    <div className="flex flex-col justify-center transition-all duration-300 items-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen">
      <div className="m-4 my-8 md:my-2">
        <Burger />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Main Category Navigation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gray-900/60 backdrop-blur-2xl border border-gray-700/50 rounded-3xl p-2">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
              <button
                className={`group relative cursor-pointer px-4 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-sm md:text-lg transition-all duration-500 transform hover:scale-105 active:scale-95 ${
                  active === "mani" 
                    ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-2xl shadow-sky-500/50 scale-105" 
                    : "bg-gray-800/30 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-sky-400 hover:to-cyan-400 hover:text-white hover:shadow-xl hover:shadow-sky-400/30"
                }`}
                onClick={() => {
                  setCategory("mani");
                  setActive("mani");
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                  PRODUCTION
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </button>
              
              <button
                onClick={() => {
                  setCategory("import");
                  setActive("import");
                }}
                className={`group relative cursor-pointer px-4 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-sm md:text-lg transition-all duration-500 transform hover:scale-105 active:scale-95 ${
                  active === "import" 
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-2xl shadow-emerald-500/50 scale-105" 
                    : "bg-gray-800/30 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-teal-400 hover:text-white hover:shadow-xl hover:shadow-emerald-400/30"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                  IMPORT ITEMS
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </button>
              
              <button
                onClick={() => {
                  setCategory("export");
                  setActive("export");
                }}
                className={`group relative cursor-pointer px-4 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-sm md:text-lg transition-all duration-500 transform hover:scale-105 active:scale-95 ${
                  active === "export" 
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 scale-105" 
                    : "bg-gray-800/30 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:text-white hover:shadow-xl hover:shadow-purple-400/30"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                  EXPORT ITEMS
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <div className="flex flex-row justify-center flex-wrap min-h-screen gap-4">
            {category === "mani" && (
              <_motions.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col w-full h-full"
              >
                {/* Enhanced Sub-Navigation for Production */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-red-500/10 rounded-2xl blur-lg"></div>
                  <div className="relative bg-gray-800/40 backdrop-blur-xl border border-gray-600/40 rounded-2xl p-3">
                    <div className="flex flex-wrap justify-center items-center gap-3">
                      <button
                        className={`group relative cursor-pointer px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-400 transform hover:scale-105 active:scale-95 ${
                          activeProduction === "win" 
                            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xl shadow-amber-500/50" 
                            : "bg-gray-700/40 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 hover:text-white hover:shadow-lg hover:shadow-amber-400/30"
                        }`}
                        onClick={() => {
                          setCategory("mani");
                          setActiveProduction("win");
                        }}
                      >
                        <span className="relative z-10">WINNOWING MACHINE</span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity duration-400"></div>
                      </button>
                      
                      <button
                        onClick={() => {
                          setCategory("mani");
                          setActiveProduction("dis");
                        }}
                        className={`group relative cursor-pointer px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-400 transform hover:scale-105 active:scale-95 ${
                          activeProduction === "dis" 
                            ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-xl shadow-blue-500/50" 
                            : "bg-gray-700/40 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 hover:text-white hover:shadow-lg hover:shadow-blue-400/30"
                        }`}
                      >
                        <span className="relative z-10">DISTONER</span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-400"></div>
                      </button>
                      
                      <button
                        onClick={() => {
                          setCategory("mani");
                          setActiveProduction("plus");
                        }}
                        className={`group relative cursor-pointer px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-400 transform hover:scale-105 active:scale-95 ${
                          activeProduction === "plus" 
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl shadow-green-500/50" 
                            : "bg-gray-700/40 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:text-white hover:shadow-lg hover:shadow-green-400/30"
                        }`}
                      >
                        <span className="relative z-10">WINNOWING + DISTONER</span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-20 transition-opacity duration-400"></div>
                      </button>
                      
                      <button
                        onClick={() => {
                          setCategory("mani");
                          setActiveProduction("cofff");
                        }}
                        className={`group relative cursor-pointer px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-400 transform hover:scale-105 active:scale-95 ${
                          activeProduction === "cofff" 
                            ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-xl shadow-red-500/50" 
                            : "bg-gray-700/40 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-red-400 hover:to-pink-400 hover:text-white hover:shadow-lg hover:shadow-red-400/30"
                        }`}
                      >
                        <span className="relative z-10">COFFEE ROASTER & GRINDER</span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-400"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Enhanced Winnowing Machine Section */}
                {category === "mani" && activeProduction === "win" && (
                  <div className="w-full">
                    {/* Hero Section for Winnowing Machine */}
                    <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-600/50">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></div>
                      <div className="relative z-10 p-8 md:p-12">
                        <div className="text-center mb-8">
                          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
                            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                              Winnowing Machine
                            </span>
                          </h1>
                          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Revolutionary seed cleaning technology that transforms agricultural processing with precision and efficiency
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Image Gallery */}
                    <div className="relative mb-12">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                        <div className="relative bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-6 border border-gray-600/50 hover:border-amber-500/50 transition-all duration-500">
                          <div className="relative overflow-hidden rounded-2xl">
                            <div
                              className="w-full h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat transition-all duration-700 hover:scale-105"
                              style={{
                                backgroundImage: `url(${images[index].url})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                              }}
                            >
                              {/* Enhanced Navigation Arrows */}
                              <div
                                className="absolute z-10 top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
                                onClick={goToRight}
                              >
                                <FaChevronRight className="text-white text-lg" />
                              </div>
                              <div
                                className="absolute z-10 top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
                                onClick={goToLeft}
                              >
                                <FaChevronLeft className="text-white text-lg" />
                              </div>
                            </div>
                            
                            {/* Enhanced Image Indicators */}
                            <div className="flex justify-center gap-3 mt-6">
                              {images.map((_, idx) => (
                                <div
                                  key={idx}
                                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                                    idx === index 
                                      ? "bg-gradient-to-r from-amber-400 to-orange-400 scale-125 shadow-lg shadow-amber-400/50" 
                                      : "bg-gray-600 hover:bg-gray-500"
                                  }`}
                                  onClick={() => setIndex(idx)}
                                ></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Product Information */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-8 border border-gray-600/50 hover:border-amber-500/40 transition-all duration-500">
                          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-6 flex items-center gap-3">
                            <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                            Product Overview
                          </h2>
                          <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            A specialized seed-cleaning machine that uses controlled airflow and vibration to separate seeds from lighter impurities such as husks, dried leaves, broken shells, and dust. The process works by allowing lighter materials to be blown away while the heavier, clean seeds fall into a collection chamber.
                          </p>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                              <span className="text-amber-300 font-medium">High-quality seed output</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
                              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                              <span className="text-orange-300 font-medium">Reduces contamination</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              <span className="text-red-300 font-medium">Improves market value</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-8 border border-gray-600/50 hover:border-blue-500/40 transition-all duration-500">
                          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6 flex items-center gap-3">
                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                            Applications
                          </h2>
                          <div className="space-y-4">
                            <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                              <h3 className="text-blue-300 font-semibold mb-2">Grains Processing</h3>
                              <p className="text-gray-300 text-sm">Perfect for wheat, rice, barley, and other cereal grains</p>
                            </div>
                            <div className="p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                              <h3 className="text-cyan-300 font-semibold mb-2">Pulses Cleaning</h3>
                              <p className="text-gray-300 text-sm">Ideal for lentils, chickpeas, beans, and peas</p>
                            </div>
                            <div className="p-4 bg-teal-500/10 rounded-xl border border-teal-500/20">
                              <h3 className="text-teal-300 font-semibold mb-2">Oil Seeds</h3>
                              <p className="text-gray-300 text-sm">Excellent for sunflower, sesame, and other oil-bearing seeds</p>
                            </div>
                          </div>
                          
                          <div className="mt-8">
                            <Link to="/contact">
                              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/50">
                                Get Quote Now
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Keep existing video section with enhanced styling */}
                    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 m-8 w-full">
                      <div className="flex flex-col w-full justify-center items-center gap-4 p-6">
                        <button
                          className={`group relative cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${activeProduction === "win" ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/50" : "bg-gray-700/50 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 hover:text-white hover:shadow-lg hover:shadow-amber-400/30"}`}
                          onClick={() => {
                            setCategory("mani");
                            setActiveProduction("win");
                          }}
                        >
                          <span className="relative z-10">WINNOWING MACHINE</span>
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </button>
                        <button
                          onClick={() => {
                            setCategory("mani");
                            setActiveProduction("dis");
                          }}
                          className={`group relative cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${activeProduction === "dis" ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/50" : "bg-gray-700/50 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 hover:text-white hover:shadow-lg hover:shadow-blue-400/30"}`}
                        >
                          <span className="relative z-10">DISTONER</span>
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </button>
                        <button
                          onClick={() => {
                            setCategory("mani");
                            setActiveProduction("plus");
                          }}
                          className={`group relative cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${activeProduction === "plus" ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/50" : "bg-gray-700/50 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:text-white hover:shadow-lg hover:shadow-green-400/30"}`}
                        >
                          <span className="relative z-10">WINNOWING + DISTONER</span>
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </button>
                        <button
                          onClick={() => {
                            setCategory("mani");
                            setActiveProduction("cofff");
                          }}
                          className={`group relative cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${activeProduction === "cofff" ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/50" : "bg-gray-700/50 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-red-400 hover:to-pink-400 hover:text-white hover:shadow-lg hover:shadow-red-400/30"}`}
                        >
                          <span className="relative z-10">
                            COFFEE ROASTER AND GRINDER
                          </span>
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </button>
                      </div>
                      <div className="flex flex-col w-full justify-center items-center gap-4 p-4">
                        {category === "mani" && activeProduction === "win" && (
                          <div className="w-full">
                            <div className="w-full h-full  flex  flex-col md:flex-row justify-center ">
                              <div className="relative  flex flex-col h-full w-full ">
                                <div
                                  className="absolute z-1 opacity-0 md:opacity-100 text-2xl text-sky-950 active:scale-100 hover:scale-110 p-1 rounded-full bg-gray-600/40 cursor-pointer top-1/2 right-8"
                                  onClick={goToRight}
                                >
                                  <FaChevronRight />
                                </div>
                                <div
                                  className="absolute z-1 opacity-0 md:opacity-100 text-2xl text-sky-950 active:scale-100 hover:scale-110 p-1 rounded-full bg-gray-600/40 cursor-pointer top-1/2 left-8"
                                  onClick={goToLeft}
                                >
                                  <FaChevronLeft />
                                </div>
                                <div
                                  className="flex flex-col transition h-full w-full ld:w-2xl "
                                  style={{
                                    backgroundImage: `url(${images[index].url})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    imageRendering: "auto",

                                    height: "80vh",
                                  }}
                                ></div>
                                <div className="flex gap-4 justify-center text-2xl">
                                  {images.map((image, idx) => (
                                    <div key={idx}>.</div>
                                  ))}
                                </div>
                              </div>

                              <div className="flex justify-center flex-col  m-4 w-full">
                                <h1 className="text-4xl text-amber-300">
                                  <b>Winnowing Machine</b>
                                </h1>

                                <p>
                                  A specialized seed-cleaning machine that uses
                                  controlled airflow and vibration to separate seeds
                                  from lighter impurities such as husks, dried leaves,
                                  broken shells, and dust. The process works by
                                  allowing lighter materials to be blown away while
                                  the heavier, clean seeds fall into a collection
                                  chamber. This ensures high-quality seed output,
                                  reduces contamination, and prepares seeds for
                                  further processing, storage, or packaging. It is
                                  widely used for grains, pulses, and oil seeds to
                                  maintain purity and improve market value.
                                </p>
                                <Link to="/contact">
                                  <button className="bg-sky-700 hover:bg-sky-400 hover:scale-105 active:scale-95 transition text-white px-4 py-2 m-2 rounded">
                                    Contact Us
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-center items-start gap-8 m-8 w-full">
                              <div className="flex flex-col gap-6 lg:w-2/3">
                                <div className="relative group">
                                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/25 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                  <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-6 border border-gray-600/50 hover:border-blue-500/60 transition-all duration-500 hover:scale-[1.02]">
                                    <div className="flex items-center gap-3 mb-3">
                                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                      <h3 className="text-xl font-semibold text-white">
                                        Live Demo - Winnowing Process
                                      </h3>
                                    </div>
                                    <video
                                      src="vid1.MOV"
                                      className="w-full h-80 rounded-xl object-cover shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                                      controls
                                      poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23fff' font-size='16'%3EWinnowing Machine Demo%3C/text%3E%3C/svg%3E"
                                    ></video>
                                    <div className="mt-3 flex items-center justify-between">
                                      <span className="text-sm text-gray-400">
                                        Duration: 2:30
                                      </span>
                                      <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm text-green-400">
                                          HD Quality
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="relative group">
                                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/25 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                  <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-6 border border-gray-600/50 hover:border-green-500/60 transition-all duration-500 hover:scale-[1.02]">
                                    <div className="flex items-center gap-3 mb-3">
                                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                      <h3 className="text-xl font-semibold text-white">
                                        Advanced Cleaning Technology
                                      </h3>
                                    </div>
                                    <video
                                      src="vid2.MOV"
                                      className="w-full h-80 rounded-xl object-cover shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
                                      controls
                                      poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23fff' font-size='16'%3EAdvanced Cleaning Demo%3C/text%3E%3C/svg%3E"
                                    ></video>
                                    <div className="mt-3 flex items-center justify-between">
                                      <span className="text-sm text-gray-400">
                                        Duration: 1:45
                                      </span>
                                      <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm text-green-400">
                                          HD Quality
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="lg:w-1/3 space-y-6">
                                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                                  <h3 className="text-2xl font-bold text-amber-300 mb-4 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                                    Machine Demonstrations
                                  </h3>
                                  <p className="text-gray-300 leading-relaxed mb-4">
                                    Watch our winnowing machine in action! These live
                                    demonstrations showcase the precision and
                                    efficiency of our seed cleaning technology.
                                  </p>
                                  <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">
                                          1
                                        </span>
                                      </div>
                                      <span className="text-blue-300 font-medium">
                                        Seed Separation Process
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">
                                          2
                                        </span>
                                      </div>
                                      <span className="text-green-300 font-medium">
                                        Advanced Cleaning Technology
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                                  <h4 className="text-lg font-semibold text-amber-300 mb-3">
                                    Key Features Demonstrated:
                                  </h4>
                                  <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                      High-efficiency seed cleaning
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                      Precision airflow control
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                      Minimal seed damage
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                                      Easy operation & maintenance
                                    </li>
                                  </ul>
                                </div>

                                <div className="text-center">
                                  <Link to="/contact">
                                    <button className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-sky-500/50">
                                      Request Live Demo
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {category === "mani" &&
                          activeProduction === "dis" &&
                          destones.map((imp, index) => (
                            <Detail
                              key={index}
                              image={imp.image}
                              detail={imp.detail}
                              name={imp.title}
                            />
                          ))}
                        {category === "mani" &&
                          activeProduction === "plus" &&
                          pluses.map((imp, index) => (
                            <Detail
                              key={index}
                              image={imp.image}
                              detail={imp.detail}
                              name={imp.title}
                            />
                          ))}
                        {category === "mani" &&
                          activeProduction === "cofff" &&
                          roasts.map((imp, index) => (
                            <Detail
                              key={index}
                              image={imp.image}
                              detail={imp.detail}
                              name={imp.title}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                )}

                {category === "mani" &&
                  activeProduction === "dis" &&
                  destones.map((imp, index) => (
                    <Detail
                      key={index}
                      image={imp.image}
                      detail={imp.detail}
                      name={imp.title}
                    />
                  ))}
                {category === "mani" &&
                  activeProduction === "plus" &&
                  pluses.map((imp, index) => (
                    <Detail
                      key={index}
                      image={imp.image}
                      detail={imp.detail}
                      name={imp.title}
                    />
                  ))}
                {category === "mani" &&
                  activeProduction === "cofff" &&
                  roasts.map((imp, index) => (
                    <Detail
                      key={index}
                      image={imp.image}
                      detail={imp.detail}
                      name={imp.title}
                    />
                  ))}
              </_motions.div>
            )}
            {category === "import" && (
              <_motions.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col w-full"
              >
                <div className="flex justify-center items-center gap-6 p-6">
                  <button
                    className={`group relative cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${activeImport === "havi" ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50" : "bg-gray-700/50 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-teal-400 hover:text-white hover:shadow-lg hover:shadow-emerald-400/30"}`}
                    onClick={() => {
                      setCategory("import");
                      setActiveImport("havi");
                    }}
                  >
                    <span className="relative z-10">HEAVY MACHINERY</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                  <button
                    onClick={() => {
                      setCategory("import");
                      setActiveImport("bul");
                    }}
                    className={`group relative cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${activeImport === "bul" ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/50" : "bg-gray-700/50 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-violet-400 hover:to-purple-400 hover:text-white hover:shadow-lg hover:shadow-violet-400/30"}`}
                  >
                    <span className="relative z-10">
                      BUILDING FINISHING PRODUCTS
                    </span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                </div>
                <div className="flex flex-wrap">
                  {category === "import" &&
                    activeImport === "havi" &&
                    imports.map((imp, index) => (
                      <Cards
                        key={index}
                        title={imp.title}
                        description={imp.desc}
                        image={imp.image}
                        detail={imp.detail}
                      />
                    ))}
                  {category === "import" &&
                    activeImport === "bul" &&
                    buildings.map((imp, index) => (
                      <Cards
                        key={index}
                        title={imp.title}
                        description={imp.desc}
                        image={imp.image}
                        detail={imp.detail}
                      />
                    ))}
                </div>
              </_motions.div>
            )}
            {category === "export" && (
              <_motions.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex justify-center items-center gap-6 p-6">
                  <button
                    className={`group relative cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${activeExport === "pu" ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50" : "bg-gray-700/50 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:text-white hover:shadow-lg hover:shadow-purple-400/30"}`}
                    onClick={() => {
                      setCategory("export");
                      setActiveExport("pu");
                    }}
                  >
                    <span className="relative z-10">PULSES</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                  <button
                    onClick={() => {
                      setCategory("export");
                      setActiveExport("oil");
                    }}
                    className={`group relative cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${activeExport === "oil" ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/50" : "bg-gray-700/50 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 hover:text-white hover:shadow-lg hover:shadow-yellow-400/30"}`}
                  >
                    <span className="relative z-10">OIL SEEDS</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                  <button
                    onClick={() => {
                      setCategory("export");
                      setActiveExport("cof");
                    }}
                    className={`group relative cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${activeExport === "cof" ? "bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg shadow-amber-500/50" : "bg-gray-700/50 backdrop-blur-sm text-stone-200 hover:bg-gradient-to-r hover:from-amber-400 hover:to-red-400 hover:text-white hover:shadow-lg hover:shadow-amber-400/30"}`}
                  >
                    <span className="relative z-10">PROCESSED COFFEE</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-600 to-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                </div>
                <div className="flex flex-wrap">
                  {category === "export" &&
                    activeExport === "pu" &&
                    pulses.map((imp, index) => (
                      <Cards
                        key={index}
                        title={imp.title}
                        description={imp.desc}
                        image={imp.image}
                        detail={imp.detail}
                      />
                    ))}
                  {category === "export" &&
                    activeExport === "oil" &&
                    exports.map((imp, index) => (
                      <Cards
                        key={index}
                        title={imp.title}
                        description={imp.desc}
                        image={imp.image}
                        detail={imp.detail}
                      />
                    ))}
                  {category === "export" &&
                    activeExport === "cof" &&
                    coffees.map((imp, index) => (
                      <Cards
                        key={index}
                        title={imp.title}
                        description={imp.desc}
                        image={imp.image}
                        detail={imp.detail}
                      />
                    ))}
                </div>
              </_motions.div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Services;