// import { useState} from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";



const Head=()=>{

    // const [selected, setSelected] = useState("Home");
    

    return(
        <div className="flex justify-between items-center p-2 transition-colors   text-gray-100  duration-300">
            <div className="w-1/2 px-4 flex items-center justify-start gap-2 text-white">
                <Link to=""><img src="LOGO.png" alt="LOGO" loading="lazy" className="w-32 h-20 "/></Link>
                <span className="   "> Trading PLC</span>
            </div>
            <div className=" w-1/3 h-10  rounded-3xl flex justify-center p-2 flex-wrap sticky top-4 z-50 gap-2">
                <ul className="space-x-4 hidden md:opacity-100 md:flex md:items-center md:justify-center">
                    
                    
                    <Link to="/services"><li 
                        
                        className={`hover:border-b-2 text-xs md:text-base lg:text-lg text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 `}>Services</li>
                    </Link>
                    <Link to="/about"><li 
                        
                        className={`hover:border-b-2 text-xs md:text-base lg:text-lg text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100  `}>About Us</li>
                    </Link>
                    <Link to="/contact"><li 
                                               className={`hover:bg-sky-600 text-xs md:text-base lg:text-lg text-cyan-50 rounded bg-sky-700 p-1 px-4 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 }`}>Contact</li>
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