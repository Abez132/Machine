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
                <div key={index} className="group relative h-70 w-full md:w-96 overflow-hidden rounded-xl shadow-lg transition-transform duration-500 m-3">
                    <div className="w-full h-full flex items-center justify-center">
                        <img src={main.image} alt="image" />
                    </div>
                    <Link to="/contact">
                        <div
                            className="absolute top-[58%] z-10 right-4 w-10 h-10 bg-white rounded-full 
                            flex items-center justify-center text-4xl opacity-0 group-hover:opacity-100 
                            hover:scale-110 hover:text-sky-700 hover:cursor-pointer   transition-opacity duration-300">
                            <TfiEmail className="m-2 text-2xl" />
                        </div>
                    </Link>
                    <div className="flex-col font-['poppins'] text-[#000000] text-600 text-start justify-center pt-5 pl-2 h-25 absolute bottom-0 left-0 w-full bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="flex-start font-['poppins'] text-lg font-semibold text-gray-800">
                            {main.title}
                        </p>
                        <br />
                        <Link to="/sevice"></Link>
                        <button
                            className="absolute flex justify-center items-center p-1 bg-blue-300 m-3 bottom-1 opacity-0 rounded right-0 group-hover:opacity-100 hover:scale-110 active:scale-100"
                            onClick={() => {}}
                        >
                            <MdMoreVert className="m-1 text-l" /> More
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default sector;