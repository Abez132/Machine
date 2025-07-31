import { useState} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import { RxHamburgerMenu } from "react-icons/rx";


const Head=({state})=>{

      const scrollToAbout = () => {
    const formSection = document.getElementById("about");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

    const [isOpen, setIsOpen] = useState(false);
    const[hide,setHide]=useState(false);
  

    return(
        <div className="flex justify-between items-center p-2 transition-colors  bg-gray-800/70 text-gray-500  duration-300">
            <div className="w-1/3 px-4 flex italic items-center justify-start gap-2 text-white">
                <img src={logo} alt="LOGO" loading="lazy" className="w-24   h-16 "/>
                <span> Trading PLC</span>
                </div>
            <div className=" w-1/3 h-10  rounded-3xl flex justify-center p-2 flex-wrap sticky top-4 z-50 gap-2">
                <ul className="space-x-4 hidden md:opacity-100 md:flex md:items-center md:justify-center">
                    <Link to="/"><li 
                        onClick={() =>{ setHide(false)}}
                        className={`hover:border-b-2 text-xs md:text-base lg:text-lg text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${state === "Home" ? "border-b-2 border-blue-100" : ""}`}>Home</li>
                    </Link>
                    <Link to="/"><li 
                        onClick={() => { scrollToAbout();  setHide(false)}}
                        className={`hover:border-b-2 text-xs md:text-base lg:text-lg text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${state === "About Us" ? "border-b-2 border-blue-100" : ""} ${hide?"hidden":""}`}>About Us</li>
                    </Link>
                    <Link to="/services"><li 
                        onClick={() => {  setHide(true)}}
                        className={`hover:border-b-2 text-xs md:text-base lg:text-lg text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${state === "Services" ? "border-b-2 border-blue-100" : ""}`}>Services</li>
                    </Link>
                    <Link to="/contact"><li 
                        onClick={() => { setHide(true)}}
                        className={`hover:border-b-2 text-xs md:text-base lg:text-lg text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${state === "Contact" ? "border-b-2 border-blue-100" : ""}`}>Contact</li>
                    </Link>
                </ul>
                <div className="flex items-center justify-center md:hidden">
                    <RxHamburgerMenu
                        className="text-3xl  text-white  cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    />
                    <div
                        className={`fixed top-0 right-0 h-full w-2/3 bg-gray-800/90 backdrop-blur-md z-50 transform transition-transform duration-300
                            ${isOpen ? "translate-x-0" : "translate-x-full"}`
                        }
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-2xl"
                            onClick={() => setIsOpen(false)}
                        >
                            &times;
                        </button>
                        <ul className="flex flex-col items-center justify-center h-full space-y-6 pt-20">
                            <Link to="/" onClick={() => setIsOpen(false)}><li className="py-2 text-white active:scale-95 active:bg-sky-800 transition rounded-2xl text-xl ">Home</li></Link>
                            <Link to="/" onClick={() => { scrollToAbout(); setIsOpen(false); }}><li className="py-2 text-white active:scale-95
                            active:bg-sky-800 rounded-2xl text-xl  ">About Us</li></Link>
                            <Link to="/services" onClick={() => setIsOpen(false)}><li className="py-2 text-white active:scale-95
                            active:bg-sky-800 rounded-2xl text-xl   ">Services</li></Link>
                            <Link to="/contact" onClick={() => setIsOpen(false)}><li className="py-2 text-white active:scale-95
                            active:bg-sky-800 rounded-2xl text-xl ">Contact</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Head;