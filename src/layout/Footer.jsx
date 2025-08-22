import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { motion as _motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900/95 to-gray-950/95 backdrop-blur-xl border-t border-gray-700/50 text-amber-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <_motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start"
          >
            <div className="flex items-center mb-4">
              <img
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
                src="LOGO.png"
                alt="HABYAT Trading PLC Logo"
              />
              <div className="ml-3">
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  HABYAT
                </h3>
                <p className="text-sm md:text-base text-gray-300">
                  Trading PLC
                </p>
              </div>
            </div>
            {/* <p className="text-sm md:text-base text-gray-300 text-center lg:text-left leading-relaxed max-w-xs">
              Delivering excellence in import, export, and production since
              2022. Quality products, competitive prices.
            </p> */}
          </_motion.div>

          {/* Contact Information */}
          <_motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg md:text-xl font-semibold text-center lg:text-left mb-6 text-amber-300">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-3 p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-white text-sm" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-sm font-medium">+251 94 019 0896</p>
                  <p className="text-sm font-medium">+251 91 164 9706</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MdEmail className="text-white text-sm" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-sm font-medium break-all">
                    habyattradingplc@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center lg:justify-start gap-3 p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaLocationDot className="text-white text-sm" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xs text-gray-400">Address</p>
                  <p className="text-sm font-medium leading-relaxed">
                    Addis Ababa Around Wingete,
                    <br />
                    Hewan Building
                  </p>
                </div>
              </div>
            </div>
          </_motion.div>

          {/* Quick Links */}
          <_motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg md:text-xl font-semibold text-center lg:text-left mb-6 text-amber-300">
              Quick Links
            </h4>
            <div className="flex flex-col items-center lg:items-start space-y-3">
              <a
                href="/"
                className="text-sm md:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-sm md:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform"
              >
                About Us
              </a>
              <a
                href="/services"
                className="text-sm md:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-sm md:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform"
              >
                Contact
              </a>
            </div>
          </_motion.div>

          {/* Social Media */}
          <_motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg md:text-xl font-semibold text-center lg:text-left mb-6 text-amber-300">
              Follow Us
            </h4>
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="group w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                <FaFacebookF className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="group w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-gray-500/50"
              >
                <RiTwitterXFill className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="group w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
              >
                <FaInstagram className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-600/30">
              <p className="text-xs text-gray-400 text-center lg:text-left leading-relaxed">
                Stay connected for the latest updates on our products and
                services.
              </p>
            </div>
          </_motion.div>
        </div>

        {/* Bottom Section */}
        <_motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2024 HABYAT Trading PLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </_motion.div>
      </div>
    </footer>
  );
};

export default Footer;
