import onePiece from "../assets/N23.jpg"
// import { Link } from "react-router-dom";
import {motion as _motion} from "framer-motion";

const AboutUs = () => {

    return(
        <div className="flex flex-col md:flex-row  w-full min-h-screen p-4 text-gray-100  justify-center items-center " id="about" 
                // style={{
                //                  backgroundImage:`url(${onePiece})`,
                //                  backgroundSize: "cover",
                //                  backgroundRepeat: "no-repeat",
                //                  backgroundPosition: "center",
                //                  imageRendering: "auto"
                //               }}
            >
                <_motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className="m-2 w-full md:w-dvw h-full md:h-svh  ">
                    <img src={onePiece} alt="picture" className="h-full w-full rounded object-cover" />
                </_motion.div>
                <_motion.div  className="p-8 ">
                    <_motion.h1 initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl text-center  font-bold m-4 mt-0 italic " >About Us</_motion.h1>
                    <p className="text-xl"><span className="text-6xl">O</span>ur company which was established in 2022 has set its self the goal of completing the works it has undertaken in a timely quality controlled & complete manner by doing the job effectively.
                        <br />
                        <br />
                        Our personal working on our organizations are experts,
                        researchers & talented people and aim to prevent
                        monopolization by providing a competitive environment
                        in the sector by producing importing & exporting quality
                        & economic products in detail solution.

                        {/* <div className="flex flex-row gap-4 justify-center items-center">
                            <Link to="/contact"><button className="bg-blue-700 text-white px-2 cursor-pointer py-1 rounded-tr-full rounded-bl-full ">Contact Us</button></Link>
                            <Link to="/services"><p className="text-blue-500  cursor-pointer ">View Products</p></Link>
                        </div> */}

                    </p>
                </_motion.div>
                
            </div>
    );
}

export default AboutUs;