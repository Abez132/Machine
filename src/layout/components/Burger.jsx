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
            <div className="absolute z-10 top-4 left-1">
               <RxHamburgerMenu
                className="text-3xl  text-white m-4 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)} /> 
            </div>
            
                    <div
                        className={`fixed top-0 left-0 h-full w-16  backdrop-blur-2xl z-1 transform transition-transform duration-300
                            ${isOpen ? "translate-x-0" : "-translate-x-full"}`
                        }
                    >
                        
                        {/* <button
                            className="absolute top-4 right-3 cursor-pointer text-white text-2xl"
                            onClick={() => setIsOpen(false)}
                        >
                           <b>X</b>
                        </button> */}
                        <ul className="flex flex-col items-center justify-center h-full space-y-4 ">
                            
                            <div className="relative">
                                <Link to="/" onClick={() => setIsOpen(false)}><li className=" text-white active:scale-95 active:bg-sky-800 transition rounded-2xl text-3xl m-2 "onMouseEnter={() => setIsHovered("home")} onMouseLeave={() => setIsHovered("")}><TiHomeOutline/></li></Link>
                                {isHovered === 'home' && (
                            <span className="absolute z-10 left-full top-3 ml-3 px-3 py-1 text-sm font-medium bg-gray-700  rounded-lg shadow-lg whitespace-nowrap">
                             <b>Home</b>
                            </span>
                        )}
                            </div>
                            <div className="relative">
                                <Link to="/about" onClick={() => setIsOpen(false)}><li className="text-white active:scale-95
                            active:bg-sky-800 rounded-2xl text-3xl m-2  "onMouseEnter={() => setIsHovered("about")} onMouseLeave={() => setIsHovered("")}><IoPeople/></li></Link>
                            {isHovered === 'about' && (
                            <span className="absolute z-10 left-full top-3 ml-3 px-3 py-1 text-sm font-medium bg-gray-700  rounded-lg shadow-lg whitespace-nowrap">
                            <b>About</b>
                            </span>
                        )}
                            </div>
                            <div className="relative">
                                <Link to="/services" onClick={() => setIsOpen(false)}><li className="text-white active:scale-95
                            active:bg-sky-800 rounded-2xl text-3xl m-2   "onMouseEnter={() => setIsHovered("services")} onMouseLeave={() => setIsHovered("")}><LuPackage2/></li></Link>
                            {isHovered === 'services' && (
                                <span className="absolute z-10 left-full top-3 ml-3 px-3 py-1 text-sm font-medium bg-gray-700  rounded-lg shadow-lg whitespace-nowrap">
                                    <b>Services</b>
                                </span>
                            )}
                            </div>
                            <div className="relative">
                                <Link to="/contact" onClick={() => setIsOpen(false)}><li className="text-white active:scale-95
                            active:bg-sky-800 rounded-2xl text-3xl m-2 "onMouseEnter={() => setIsHovered("contact")} onMouseLeave={() => setIsHovered("")}><RiContactsBook2Fill/></li></Link>
                                {isHovered === 'contact' && (
                                <span className="absolute z-10 left-full top-3 ml-3 px-3 py-1 text-sm font-medium bg-gray-700  rounded-lg shadow-lg whitespace-nowrap">
                                    <b>Contact</b>
                                </span>
                            )}
                            </div>
                        </ul>
                    </div>
                </div>
    );
};

export default Burger;