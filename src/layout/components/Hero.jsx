import onePiece from "../../assets/N1.webp"
import { Link } from "react-router-dom";
// filepath: c:\Users\hp\Desktop\Projects\Machine\src\layout\components\Hero.jsx
const Hero=()=>{
    return(
        <div className="flex  flex-wrap items-center justify-center lg:flex-row  h-screen " 
              style={{
                 backgroundImage:`url(${onePiece})`,
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 backgroundPosition: "center",
                 imageRendering: "auto"
              }}
              >
                {/* <img src={onePiece} loading="lazy" alt="pic" className="w-2xl m-7 rounded" /> */}
            <div className="text-center text-amber-400 w-8/12 bg-sky-950/25 rounded p-4">
                <h1 className="text-5xl font-bold mb-4 justify-start items-start">Delivering Excellence Since 2022 </h1>
                <p className="text-lg text-amber-50 font-medium  mb-8">At HABYAT Trading PLC, we unite expertise, innovation, and integrity to deliver timely, detail-oriented solutions. By fostering a competitive edge, we import, export, and produce economic, high-quality products—breaking monopolies and setting new standards.</p>
                <div className="flex flex-row gap-4 justify-center items-center">
                    <Link to="/contact"><button className="bg-blue-700 text-white px-2 cursor-pointer py-1 rounded-tr-full rounded-bl-full ">Contact Us</button></Link>
                    <Link to="/services"><p className="text-blue-500  cursor-pointer ">View Products</p></Link>
                </div>
                
            </div>
            

        </div>
    )
}

export default Hero;