import onePiece from "../../assets/gear.jpg"
import { Link } from "react-router-dom";
import { motion as _motions } from "framer-motion";
import Head from "./Header";
// filepath: c:\Users\hp\Desktop\Projects\Machine\src\layout\components\Hero.jsx
const Hero=()=>{
    return(
        <div className="flex flex-col min-h-screen w-full  items-center " 
              style={{
                  backgroundImage:`url(${onePiece})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  imageRendering: "auto"
               }}
              >
                <div className="top-0 left-0 w-full z-20"><Head /></div>
                <_motions.div animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.9 }} transition={{ duration: 1 }} className=" flex flex-col text-center m-16 mb-4  w-full h-full rounded p-4 items-center">
                <h1 className="text-7xl font-bold mb-4 text-white justify-start items-start">Delivering Excellence Since 2022 </h1>
                <p className="text-lg text-gray-50 font-medium w-1/2 h-full m-8">At HABYAT Trading PLC, we unite expertise, innovation, and integrity to deliver timely, detail-oriented solutions. By fostering a competitive edge, we import, export, and produce economic, high-quality products—breaking monopolies and setting new standards.</p>
                
                
            </_motions.div>
               {/* <div className="m-2 w-full h-xl md:h-screen rounded-lg shadow-lg overflow-hidden">
                    <img src={onePiece} loading="lazy" alt="pic" className="w-full md:w-xl md:h-screen h-full rounded" />
                </div> */}
            
             

        </div>
    )
}

export default Hero;