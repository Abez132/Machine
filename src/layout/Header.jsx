import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Head=()=>{

      const scrollToAbout = () => {
    const formSection = document.getElementById("about");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

    const [selected, setSelected] = useState("Home");
      

  

    return(
        <div className="flex justify-between items-center p-4 transition-colors  bg-gray-950/70 text-gray-500  duration-300">
            <div>LOGO-DESCRIPTION</div>
            <div className=" w-1/3 h-10  rounded-3xl flex justify-center p-2 flex-wrap sticky top-4 z-50 gap-2">
                <ul className="flex space-x-4">
                    <Link to="/"><li 
                        onClick={() =>{setSelected("Home")}}
                        className={`hover:border-b-2 text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${selected === "Home" ? "border-b-2 border-blue-100" : ""}`}>Home</li>
                    </Link>
                    <li 
                        onClick={() => { scrollToAbout(); setSelected("About Us")}}
                        className={`hover:border-b-2 text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${selected === "About Us" ? "border-b-2 border-blue-100" : ""}`}>About Us</li>
                    
                    <Link to="/services"><li 
                        onClick={() => setSelected("Services")}
                        className={`hover:border-b-2 text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${selected === "Services" ? "border-b-2 border-blue-100" : ""}`}>Services</li>
                    </Link>
                    <Link to="/contact"><li 
                        onClick={() => setSelected("Contact")}
                        className={`hover:border-b-2 text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${selected === "Contact" ? "border-b-2 border-blue-100" : ""}`}>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};
export default Head;