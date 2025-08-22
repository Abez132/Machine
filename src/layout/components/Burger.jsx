import { useState } from "react";
import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { TiHomeOutline } from "react-icons/ti";
import { IoPeople } from "react-icons/io5";
import { LuPackage2 } from "react-icons/lu";
import { RiContactsBook2Fill } from "react-icons/ri";
const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState("");
  return (
    <div className=" flex items-center justify-center">
      <div className="absolute z-10 top-4 right-1 md:left-1">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <RxHamburgerMenu
            className="relative text-3xl text-white m-4 cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:scale-110 active:scale-95 group-hover:rotate-90"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 md:left-0 h-full w-20 bg-gradient-to-b from-gray-900/95 to-gray-950/95 backdrop-blur-2xl border-l md:border-r border-gray-700/50 z-2 transform transition-all duration-500 ease-out shadow-2xl
                            ${isOpen ? "translate-x-0 shadow-cyan-500/20" : "translate-x-full md:-translate-x-full"}`}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-2 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 left-2 w-12 h-12 bg-blue-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute top-56 left-2 w-14 h-14 bg-purple-500/20 rounded-full blur-lg animate-pulse delay-2000"></div>
        </div>

        {/* <button
                            className="absolute top-4 right-3 cursor-pointer text-white text-2xl"
                            onClick={() => setIsOpen(false)}
                        >
                           <b>X</b>
                        </button> */}
        <ul className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 py-8">
          <div className="relative group">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <li
                className="relative flex flex-col justify-center items-center text-white active:scale-90 transition-all duration-300 hover:scale-110 rounded-2xl text-3xl p-3 group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-blue-500/20 group-hover:shadow-lg group-hover:shadow-cyan-500/30"
                onMouseEnter={() => setIsHovered("home")}
                onMouseLeave={() => setIsHovered("")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <TiHomeOutline className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300" />
                <span className="relative z-10 text-xs mt-1 group-hover:text-cyan-300 transition-colors duration-300">
                  Home
                </span>
              </li>
            </Link>
            {isHovered === "home" && (
              <span className="absolute z-20 left-full top-1/2 transform -translate-y-1/2 ml-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-xl shadow-2xl whitespace-nowrap">
                <b className="text-cyan-400">Home</b>
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-700"></div>
              </span>
            )}
          </div>
          <div className="relative group">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <li
                className="relative flex flex-col justify-center items-center text-white active:scale-90 transition-all duration-300 hover:scale-110 rounded-2xl text-3xl p-3 group-hover:bg-gradient-to-r group-hover:from-purple-500/20 group-hover:to-pink-500/20 group-hover:shadow-lg group-hover:shadow-purple-500/30"
                onMouseEnter={() => setIsHovered("about")}
                onMouseLeave={() => setIsHovered("")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <IoPeople className="relative z-10 group-hover:text-purple-400 transition-colors duration-300" />
                <span className="relative z-10 text-xs mt-1 group-hover:text-purple-300 transition-colors duration-300">
                  About
                </span>
              </li>
            </Link>
            {isHovered === "about" && (
              <span className="absolute z-20 left-full top-1/2 transform -translate-y-1/2 ml-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-xl shadow-2xl whitespace-nowrap">
                <b className="text-purple-400">About</b>
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-700"></div>
              </span>
            )}
          </div>
          <div className="relative group">
            <Link to="/services" onClick={() => setIsOpen(false)}>
              <li
                className="relative flex flex-col justify-center items-center text-white active:scale-90 transition-all duration-300 hover:scale-110 rounded-2xl text-3xl p-3 group-hover:bg-gradient-to-r group-hover:from-green-500/20 group-hover:to-emerald-500/20 group-hover:shadow-lg group-hover:shadow-green-500/30"
                onMouseEnter={() => setIsHovered("services")}
                onMouseLeave={() => setIsHovered("")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <LuPackage2 className="relative z-10 group-hover:text-green-400 transition-colors duration-300" />
                <span className="relative z-10 text-xs mt-1 group-hover:text-green-300 transition-colors duration-300">
                  Services
                </span>
              </li>
            </Link>
            {isHovered === "services" && (
              <span className="absolute z-20 left-full top-1/2 transform -translate-y-1/2 ml-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-xl shadow-2xl whitespace-nowrap">
                <b className="text-green-400">Services</b>
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-700"></div>
              </span>
            )}
          </div>
          <div className="relative group">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <li
                className="relative flex flex-col justify-center items-center text-white active:scale-90 transition-all duration-300 hover:scale-110 rounded-2xl text-3xl p-3 group-hover:bg-gradient-to-r group-hover:from-orange-500/20 group-hover:to-red-500/20 group-hover:shadow-lg group-hover:shadow-orange-500/30"
                onMouseEnter={() => setIsHovered("contact")}
                onMouseLeave={() => setIsHovered("")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <RiContactsBook2Fill className="relative z-10 group-hover:text-orange-400 transition-colors duration-300" />
                <span className="relative z-10 text-xs mt-1 group-hover:text-orange-300 transition-colors duration-300">
                  Contact
                </span>
              </li>
            </Link>
            {isHovered === "contact" && (
              <span className="absolute z-20 left-full top-1/2 transform -translate-y-1/2 ml-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-xl shadow-2xl whitespace-nowrap">
                <b className="text-orange-400">Contact</b>
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-700"></div>
              </span>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Burger;
