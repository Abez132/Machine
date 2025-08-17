import { useState} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiHomeOutline } from "react-icons/ti";
import { IoPeople } from "react-icons/io5";
import { LuPackage2 } from "react-icons/lu";
import { RiContactsBook2Fill } from "react-icons/ri";


const Head=()=>{

    const [selected, setSelected] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState("");

    return(
        <div className="flex justify-between items-center p-2 transition-colors   text-gray-100  duration-300">
            <div className="w-1/2 px-4 flex items-center justify-start gap-2 text-white">
                <Link to=""><img src={logo} alt="LOGO" loading="lazy" className="w-32 h-20 "/></Link>
                <span className="   "> Trading PLC</span>
            </div>
            <div className=" w-1/3 h-10  rounded-3xl flex justify-center p-2 flex-wrap sticky top-4 z-50 gap-2">
                <ul className="space-x-4 hidden md:opacity-100 md:flex md:items-center md:justify-center">
                    <Link to="/"><li 
                        onClick={() =>{setSelected("Home"); }}
                        className={`hover:border-b-2 text-xs md:text-base lg:text-lg text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${selected === "Home" ? "border-b-2 border-blue-100" : ""}`}>Home</li>
                    </Link>
                    
                    <Link to="/services"><li 
                        onClick={() => { setSelected("Services"); }}
                        className={`hover:border-b-2 text-xs md:text-base lg:text-lg text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${selected === "Services" ? "border-b-2 border-blue-100" : ""}`}>Services</li>
                    </Link>
                    <Link to="/about"><li 
                        onClick={() => { setSelected("About Us"); }}
                        className={`hover:border-b-2 text-xs md:text-base lg:text-lg text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${selected === "About Us" ? "border-b-2 border-blue-100" : ""} `}>About Us</li>
                    </Link>
                    <Link to="/contact"><li 
                        onClick={() => {setSelected("Contact"); }}
                        className={`hover:bg-sky-600 text-xs md:text-base lg:text-lg text-cyan-50 rounded bg-sky-700 p-1 px-4 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${selected === "Contact" ? "" : ""}`}>Contact</li>
                    </Link>
                </ul>
                <div className="flex items-center justify-center md:hidden">
                    <RxHamburgerMenu
                        className="text-3xl  text-white  cursor-pointer"
                        onClick={() => setIsOpen(true)}/>
                    <div
                        className={`fixed top-0 right-0 h-full w-10  bg-gray-950/90 z-50 transform transition-transform duration-300
                            ${isOpen ? "translate-x-0" : "translate-x-full"}`
                        }
                    >
                        <button
                            className="absolute top-4 right-3 cursor-pointer text-white text-2xl"
                            onClick={() => setIsOpen(false)}
                        >
                           <b>X</b>
                        </button>
                        <ul className="flex flex-col items-center justify-center h-full space-y-4 ">
                            
                            <div className="relative">
                                <Link to="/" onClick={() => setIsOpen(false)}><li className=" text-white active:scale-95 active:bg-sky-800 transition rounded-2xl text-3xl m-2 "onMouseEnter={() => setIsHovered("home")} onMouseLeave={() => setIsHovered("")}><TiHomeOutline/></li></Link>
                                {isHovered === 'home' && (
                            <span className="absolute z-10 right-full top-3 ml-3 px-3 py-1 text-sm font-medium bg-gray-700  rounded-lg shadow-lg whitespace-nowrap">
                             <b>Home</b>
                            </span>
                        )}
                            </div>
                            <div className="relative">
                                <Link to="/about" onClick={() => setIsOpen(false)}><li className="text-white active:scale-95
                            active:bg-sky-800 rounded-2xl text-3xl m-2  "onMouseEnter={() => setIsHovered("about")} onMouseLeave={() => setIsHovered("")}><IoPeople/></li></Link>
                            {isHovered === 'about' && (
                            <span className="absolute z-10 right-full top-3 ml-3 px-3 py-1 text-sm font-medium bg-gray-700  rounded-lg shadow-lg whitespace-nowrap">
                            <b>About</b>
                            </span>
                        )}
                            </div>
                            <div className="relative">
                                <Link to="/services" onClick={() => setIsOpen(false)}><li className="text-white active:scale-95
                            active:bg-sky-800 rounded-2xl text-3xl m-2   "onMouseEnter={() => setIsHovered("services")} onMouseLeave={() => setIsHovered("")}><LuPackage2/></li></Link>
                            {isHovered === 'services' && (
                                <span className="absolute z-10 right-full top-3 ml-3 px-3 py-1 text-sm font-medium bg-gray-700  rounded-lg shadow-lg whitespace-nowrap">
                                    <b>Services</b>
                                </span>
                            )}
                            </div>
                            <div className="relative">
                                <Link to="/contact" onClick={() => setIsOpen(false)}><li className="text-white active:scale-95
                            active:bg-sky-800 rounded-2xl text-3xl m-2 "onMouseEnter={() => setIsHovered("contact")} onMouseLeave={() => setIsHovered("")}><RiContactsBook2Fill/></li></Link>
                                {isHovered === 'contact' && (
                                <span className="absolute z-10 right-full top-3 ml-3 px-3 py-1 text-sm font-medium bg-gray-700  rounded-lg shadow-lg whitespace-nowrap">
                                    <b>Contact</b>
                                </span>
                            )}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Head;