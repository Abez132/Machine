// import foot from "../assets/foot.jpg"
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import logo from "../assets/LOGO.png";
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

const Footer=()=>{
    return(
        
        <footer className="flex  md:flex-row bottom-0 w-full text-xs  justify-between border-t-2 border-stone-800 p-4 text-center text-amber-50" 
        // style={{
        //     backgroundImage:`url(${foot})`,
        //     backgroundSize: "cover",
        //     backgroundRepeat: "no-repeat",
        //     backgroundPosition: "center",
        //     imageRendering: "auto"
        // }}
        >
            <div className="flex justify-center items-center  md:mb-0">
                <img className="h-12 md:h-24" src={logo} alt="logo" />
                <p className="ml-2 text-sm md:text-base lg:text-lg"> Trading PLC</p>
            </div>
            
            <div className="md:mr-16 mr-12">
                <h1 className="m-2"><b>Follow Us On:</b></h1>
                    <div className="flex gap-4">
                  <a href="#" className="flex items-center rounded-full bg-white md:p-2 p-0.5  hover:scale-120 transition  md:text-l text-xs text-blue-600"><FaFacebookF /></a>
                  <a href="#" className="flex items-center rounded-full bg-white md:p-2 p-0.5  hover:scale-120 transition  md:text-l text-xs text-black"><RiTwitterXFill /></a>
                  <a href="#" className="flex items-center rounded-full bg-white md:p-2 p-0.5  hover:scale-120 transition  md:text-l text-xs text-pink-600"><FaInstagram /></a>
                </div>

            </div>
            {/* <div className="flex flex-col">
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
            </div> */}
            
        </footer>
    );
};

export default Footer;