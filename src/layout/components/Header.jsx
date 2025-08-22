// import { useState} from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";



const Head=()=>{

    // const [selected, setSelected] = useState("Home");
    

    return(
        <div className="flex justify-between items-center p-2 transition-colors   text-gray-100  duration-300">
            <div className="w-1/2 px-4 flex items-center justify-start gap-2 text-white">
                <Link to=""><img src="LOGO.png" alt="LOGO" loading="lazy" className="w-44 h-28 "/></Link>
                <span className="   "> Trading PLC</span>
            </div>
            <div className=" w-1/3 h-10  rounded-3xl flex justify-center p-2 flex-wrap sticky top-4 z-50 gap-2">
                <ul className="space-x-6 hidden md:opacity-100 md:flex md:items-center md:justify-center">
          <Link to="/services">
            <li className="group relative text-xs md:text-base lg:text-lg text-cyan-50 transition-all duration-300 hover:cursor-pointer hover:text-cyan-400 hover:scale-105">
              <span className="relative z-10">Services</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
            </li>
          </Link>
          <Link to="/about">
            <li className="group relative text-xs md:text-base lg:text-lg text-cyan-50 transition-all duration-300 hover:cursor-pointer hover:text-purple-400 hover:scale-105">
              <span className="relative z-10">About Us</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
            </li>
          </Link>
          <Link to="/contact">
            <li className="group relative">
              <div className="relative px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xs md:text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 active:scale-95">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </li>
          </Link>
        </ul>
                <div className="md:hidden flex items-center justify-center">
                    <Burger/>
                    </div>
                
            </div>
        </div>
    );
};
export default Head;