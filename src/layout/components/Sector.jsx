import { TfiEmail } from "react-icons/tfi";

import { MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import image1 from "../../assets/IMG_7658.webp";
import image2 from "../../assets/cat.jpg";
import image3 from "../../assets/export.jpg";

const sector = () => {
    const mains = [
        {
            image:image1,
            title: "Manifacturing"
        },
        {
            image: image2,
            title: "Import"
        },
        {
            image: image3,
            title: "Export"
        },
    ];

    return (
        <div className="flex flex-col md:flex-row sm:flex-col justify-center  items-center  w-full p-2">
            {mains.map((main, index) => (
                <div key={index} className="group relative h-70 w-full md:w-96 overflow-hidden rounded-xl shadow-lg transition-transform duration-500 m-3"
                
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <img src={main.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="image" />
                    </div>
                    
                    <div className="flex-col font-['poppins'] text-[#000000] text-600 text-start justify-center  p-4 h-25 absolute bottom-0 left-0 w-full backdrop-blur-2xl bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        
                        <p className="flex justify-center font-['poppins'] text-lg font-semibold text-gray-800">
                            {main.title}
                        </p>
                        
                        
                        <div className="flex justify-between items-center">
                            <Link to="/contact">
                                <button className="p-2 rounded-2xl bg-amber-500 ">
                                    <TfiEmail className="text-2xl text-gray-900 font-extrabold" />
                                </button>
                            </Link>
                            <Link to="/services">
                                <button>
                                    <TfiEmail className="text-2xl text-gray-900 font-extrabold" />
                                </button>    
                            </Link>  

                        </div>
                       
                    </div>
                </div>
            ))}
            
        </div>
    );
};

export default sector;