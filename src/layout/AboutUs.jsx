import onePiece from "../assets/N2.jpg"
import { Link } from "react-router-dom";

const AboutUs = () => {

    return(
        <div className="flex flex-col md:flex-row  w-full min-h-screen p-20 text-gray-100  justify-center items-center " id="about" 
                // style={{
                //                  backgroundImage:`url(${onePiece})`,
                //                  backgroundSize: "cover",
                //                  backgroundRepeat: "no-repeat",
                //                  backgroundPosition: "center",
                //                  imageRendering: "auto"
                //               }}
            >
                <div className="m-8 w-full  ">
                    <img src={onePiece} alt="picture" className="h-96 w-full object-cover" />
                </div>
                <div className="p-8">
                    <h1 className="text-2xl text-black font-bold m-4 italic " >About Us</h1>
                    <p><span className="text-4xl">O</span>ur company which was established in 2022 has set its self the goal of completing the works it has undertaken in a timely quality controlled & complete manner by doing the job effectively.
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
                </div>
                
            </div>
    );
}

export default AboutUs;