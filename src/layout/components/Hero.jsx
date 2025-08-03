import onePiece from "../../assets/export.jpg"
import { Link } from "react-router-dom";
// filepath: c:\Users\hp\Desktop\Projects\Machine\src\layout\components\Hero.jsx
const Hero=()=>{
    return(
        <div className="flex flex-col md:flex-row items-center m-4 justify-between p-2" 
            //   style={{
            //      backgroundImage:`url(${onePiece})`,
            //      backgroundSize: "cover",
            //      backgroundRepeat: "no-repeat",
            //      backgroundPosition: "center",
            //      imageRendering: "auto"
            //   }}
              >
                
               <div className="m-4 w-full p-2  ">
                    <img src={onePiece} loading="lazy" alt="pic" className="w-full md:w-xl h-full rounded" />
                </div>
            <div className="text-center text-black w-8/12  rounded p-2">
                <h1 className="text-5xl font-bold mb-4 justify-start items-start">Delivering Excellence Since 2022 </h1>
                <p className="text-lg text-amber-50 font-medium  mb-8">At HABYAT Trading PLC, we unite expertise, innovation, and integrity to deliver timely, detail-oriented solutions. By fostering a competitive edge, we import, export, and produce economic, high-quality products—breaking monopolies and setting new standards.</p>
                
                
            </div>
             

        </div>
    )
}

export default Hero;