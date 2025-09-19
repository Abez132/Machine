import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaRocket } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Head from "../layout/components/Header";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-amber-50 relative overflow-hidden">
      {/* Header */}
      <Head />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-ping"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-cyan-300 rounded-full animate-bounce delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* 404 Number with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                404
              </span>
            </div>

            {/* Glitch Effect Overlay */}
            <div className="absolute inset-0 text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none opacity-20">
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                404
              </span>
            </div>

            {/* Error Icon */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -top-8 -right-8 md:-top-12 md:-right-12"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce">
                <BiError className="text-2xl md:text-3xl text-white" />
              </div>
            </motion.div>
          </motion.div>

          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Oops! Page Not Found
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
              Looks like you've ventured into uncharted territory!
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The page you're looking for might have been moved, deleted, or
              doesn't exist. Don't worry, even the best explorers sometimes take
              a wrong turn.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Go Home Button */}
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <HiOutlineArrowLeft className="relative z-10 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="relative z-10">Go Back Home</span>
                <FaHome className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </motion.button>
            </Link>

            {/* Explore Services Button */}
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaRocket className="relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Explore Services</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Fun Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600/30 backdrop-blur-sm"
          >
            <p className="text-gray-300 text-lg mb-2">
              <span className="text-cyan-400 font-semibold">Fun Fact:</span>
              The first 404 error was discovered at CERN in 1992!
            </p>
            <p className="text-gray-400">
              You're now part of internet history. 🚀
            </p>
          </motion.div>

          {/* Animated Decorative Elements */}
          <div className="absolute top-1/4 left-10 opacity-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-2 border-cyan-400 rounded-full"
            >
              <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
            </motion.div>
          </div>

          <div className="absolute bottom-1/4 right-10 opacity-20">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border-2 border-purple-400 rounded-full flex items-center justify-center"
            >
              <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
