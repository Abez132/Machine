// import foot from "../assets/foot.jpg"
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer=()=>{
    return(
        
        <footer className=" flex bottom-0 w-full justify-between bg-gradient-to-r from-sky-900 to-sky-950  p-4 text-center text-amber-50" 
        // style={{
        //     backgroundImage:`url(${foot})`,
        //     backgroundSize: "cover",
        //     backgroundRepeat: "no-repeat",
        //     backgroundPosition: "center",
        //     imageRendering: "auto"
        // }}
        >
            <div className="flex justify-center items-center" >
                <img className="h-24" src="src/assets/HABYAT LOGO3.PNG" alt="logo" />
                <p>HABYAT trading PLC</p>
            </div>
            <div className="flex flex-col  ">     
            
                <div
                    className="flex items-center rounded "
                    
                >
                    <FaPhone className="m-2 text-l" />
                    <p className="m-3">+251 912 397 422</p>
                </div>
    
                
                <div
                    className="flex items-center rounded "
                    
                >
                    <FaPhone className="m-2 text-l" />
                    <p className="m-3">+251 940 190 896</p>
                </div>
                
                <div
                    className="flex items-center rounded "
                
                >
                    <FaPhone className="m-2 text-l" />
                    <p className="m-3">+251 911 649 706</p>
                </div>
                <div className="flex items-center rounded " >
                    <MdEmail className="m-2 text-l" />
                    <p className="m-3">habyattradingplc@gmail.com</p>
                </div>
            </div>
            <div>

            </div>
           
        </footer>
    );
};

export default Footer;