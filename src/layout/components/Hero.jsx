import onePiece from "../../assets/gear1.jpg"
import { Link } from "react-router-dom";
// filepath: c:\Users\hp\Desktop\Projects\Machine\src\layout\components\Hero.jsx
const Hero=()=>{
    return(
        <div className="flex flex-col h-screen md:flex-row items-center m-2 justify-between p-2" 
              style={{
                  backgroundImage:`url(${onePiece})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  imageRendering: "auto"
               }}
              >
                <div className="text-center m-16 mb-4 bg-cyan-800/20 w-full rounded p-2">
                <h1 className="text-5xl font-bold mb-4 text-white justify-start items-start">Delivering Excellence Since 2022 </h1>
                <p className="text-lg text-gray-50 font-medium  mb-8">At HABYAT Trading PLC, we unite expertise, innovation, and integrity to deliver timely, detail-oriented solutions. By fostering a competitive edge, we import, export, and produce economic, high-quality products—breaking monopolies and setting new standards.</p>
                
                
            </div>
               {/* <div className="m-2 w-full h-xl md:h-screen rounded-lg shadow-lg overflow-hidden">
                    <img src={onePiece} loading="lazy" alt="pic" className="w-full md:w-xl md:h-screen h-full rounded" />
                </div> */}
            
             

        </div>
    )
}

export default Hero;