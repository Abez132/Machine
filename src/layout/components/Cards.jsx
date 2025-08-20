import { TfiEmail } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Cards = ({ title, description, image, detail }) => {
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate("/services", {
            state: { title, detail, image }
        });
    };

    return (
        <div className="group relative flex flex-col h-[420px] w-full md:w-80 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 m-2 ">
            {/* Image container with gradient overlay */}
            <div className="h-48 overflow-hidden relative">
                <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={image} 
                    loading="lazy" 
                    alt={title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-80"></div>
                
                {/* Email button positioned at top right */}
                <Link to="/contact" className="absolute top-4 right-4 z-10">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-xl hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-md">
                        <TfiEmail className="text-gray-700 " />
                    </div>
                </Link>
                
                {/* Title overlay on image */}
                <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold font-['poppins'] drop-shadow-md">{title}</h3>
                </div>
            </div>
            
            {/* Content area */}
            <div className="flex flex-col flex-grow p-5 bg-white">
                <p className="text-gray-600 font-['poppins'] text-sm mb-4 line-clamp-3 flex-grow">
                    {description}
                </p>
                
                <div className="mt-auto pt-2 border-t border-gray-100">
                    <button
                        className="group w-full flex justify-between items-center py-3 px-4 bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-lg transition-all duration-300 hover:from-sky-700 hover:to-blue-800 hover:shadow-md"
                        onClick={handleDetailClick}
                    >
                        <span className="font-semibold text-sm">View Details</span>
                        <FaArrowRight className="text-xs transition-transform duration-500 group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;