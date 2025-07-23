import { useState} from "react";
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
        <div className="flex justify-between items-center p-2 transition-colors  bg-gray-800/70 text-gray-500  duration-300">
            <div className="w-1/3 px-4 flex italic items-center justify-start gap-2 text-white">
                <img src="src/assets/HABYAT LOGO3.png" alt="LOGO" loading="lazy" className="w-24   h-16 "/>
                <span> Trading PLC</span>
                </div>
            <div className=" w-1/3 h-10  rounded-3xl flex justify-center p-2 flex-wrap sticky top-4 z-50 gap-2">
                <ul className="flex space-x-4">
                    <Link to="/"><li 
                        onClick={() =>{setSelected("Home")}}
                        className={`hover:border-b-2 text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${selected === "Home" ? "border-b-2 border-blue-100" : ""}`}>Home</li>
                    </Link>
                    <Link to="/"><li 
                        onClick={() => { scrollToAbout(); setSelected("About Us")}}
                        className={`hover:border-b-2 text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${selected === "About Us" ? "border-b-2 border-blue-100" : ""}`}>About Us</li>
                    </Link>
                    
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