// import foot from "../assets/foot.jpg"
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import logo from "../assets/LOGO.png";

const Footer=()=>{
    return(
        
        <footer className="flex flex-col md:flex-row bottom-0 w-full justify-between bg-gradient-to-r from-sky-900 to-sky-950 p-4 text-center text-amber-50" 
        // style={{
        //     backgroundImage:`url(${foot})`,
        //     backgroundSize: "cover",
        //     backgroundRepeat: "no-repeat",
        //     backgroundPosition: "center",
        //     imageRendering: "auto"
        // }}
        >
            <div className="flex justify-center items-center mb-4 md:mb-0">
                <img className="h-16 md:h-24" src={logo} alt="logo" />
                <p className="ml-2 text-sm md:text-base lg:text-lg">HABYAT trading PLC</p>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center rounded">
                    <FaPhone className="m-2 text-base md:text-lg" />
                    <p className="m-3 text-xs md:text-sm lg:text-base">+251 912 397 422</p>
                </div>
                <div className="flex items-center rounded">
                    <FaPhone className="m-2 text-base md:text-lg" />
                    <p className="m-3 text-xs md:text-sm lg:text-base">+251 940 190 896</p>
                </div>
                <div className="flex items-center rounded">
                    <FaPhone className="m-2 text-base md:text-lg" />
                    <p className="m-3 text-xs md:text-sm lg:text-base">+251 911 649 706</p>
                </div>
                <div className="flex items-center rounded">
                    <MdEmail className="m-2 text-base md:text-lg" />
                    <p className="m-3 text-xs md:text-sm lg:text-base">habyattradingplc@gmail.com</p>
                </div>
            </div>
            <div></div>
        </footer>
    );
};

export default Footer;