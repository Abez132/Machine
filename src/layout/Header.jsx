import { useState } from "react";

const Head=()=>{
    const [selected, setSelected] = useState("Home");

    return(
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-400 to-indigo-800  text-gray-500">
            <div>LOGO-DESCRIPTION</div>
            <div className=" w-1/3 h-10  backdrop-blur-3xl rounded-3xl flex justify-center p-2 flex-wrap sticky top-4 z-50 gap-2">
                <ul className="flex space-x-4">
                    <li 
                        onClick={() => setSelected("Home")}
                        className={`hover:border-b-2 text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${selected === "Home" ? "border-b-2 border-blue-100" : ""}`}>Home</li>
                    <li 
                        onClick={() => setSelected("About Us")}
                        className={`hover:border-b-2 text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${selected === "About Us" ? "border-b-2 border-blue-100" : ""}`}>About Us</li>
                    <li 
                        onClick={() => setSelected("Services")}
                        className={`hover:border-b-2 text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${selected === "Services" ? "border-b-2 border-blue-100" : ""}`}>Services</li>
                    <li 
                        onClick={() => setSelected("Contact")}
                        className={`hover:border-b-2 text-cyan-50 transition-colors origin-left transform rounded-l ease-in-out hover:cursor-pointer hover:border-blue-100 ${selected === "Contact" ? "border-b-2 border-blue-100" : ""}`}>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Head;