import { TfiEmail } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const Cards=({ title, description, image, detail }) => {
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate("/services", {
            state: { title, detail, image }
        });
    };

    return (

        <div className="group relative h-70 md:w-100 sm:w-72 overflow-hidden rounded-xl shadow-lg transition-transform duration-500 m-3">

            <img className="w-full h-full object-cover" src={image} loading="lazy" alt="places" />
            <Link to="/contact"><div
                className="absolute top-[43%] z-10 right-4 w-10 h-10 bg-cyan-100 rounded-full 
                flex items-center justify-center text-4xl opacity-0 group-hover:opacity-100 
                hover:scale-110 hover:text-sky-700 hover:cursor-pointer  transition duration-300">
                    <TfiEmail className="m-2 text-gray-900 font-extrabold text-4xl" />
                </div>
            </Link>
            <div className="flex-col font-['poppins'] text-[#000000] text-600 text-start justify-center p-4 h-auto  absolute bottom-0 left-0 w-full backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="flex-start font-['poppins'] text-lg font-semibold text-gray-800">
                    {title}
                </p>
                <span className="text-xs font-['poppins'] flex-start text-gray-400">
                    {description}
                </span>
                <br />
                <button
                    className=" w-full flex justify-center items-center p-1 bg-blue-300 mt-4 mb-2 opacity-0 rounded right-0 group-hover:opacity-100 transition hover:scale-105 active:scale-100"
                    onClick={handleDetailClick}
                >
                    More  <FaArrowRight className="right-0 text-l" />
                </button>
            </div>
        </div>
    );
}
export default Cards;