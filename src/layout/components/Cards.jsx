import { TfiEmail } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Cards = ({ title, description, image, detail }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate("/services", {
      state: { title, detail, image },
    });
  };

  return (
    <div className="group relative h-70 flex-grow w-full md:w-96 overflow-hidden rounded-2xl shadow-lg duration-500 m-2 transition hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-[1.02] border border-gray-700/30 hover:border-cyan-500/40">
      <img
        className="w-full h-full group-hover:-translate-y-12 transition object-cover"
        src={image}
        loading="lazy"
        alt="places"
      />

      {/* Enhanced Contact Button with Multiple Options */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 lg:opacity-0 md:group-hover:opacity-100 sm:opacity-100 transition-all duration-300">
        {/* WhatsApp Contact */}
        <Link to="/contact">
          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-green-500/50">
            <FaWhatsapp className="text-white text-xl" />
          </div>
        </Link>

        {/* Phone Contact */}
        <Link to="/contact">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
            <FaPhone className="text-white text-lg" />
          </div>
        </Link>

        {/* Email Contact */}
        <Link to="/contact">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
            <MdEmail className="text-white text-xl" />
          </div>
        </Link>
      </div>

      <div className="flex-col font-['poppins'] text-[#000000] text-600 text-start justify-center p-4 h-auto absolute bottom-0 left-0 w-full backdrop-blur-3xl bg-gradient-to-t from-white/95 to-white/85 lg:opacity-0 sm:opacity-100 md:group-hover:opacity-100 transition-all duration-500 rounded-b-2xl">
        <p className="flex-start  font-['poppins'] md:text-xl text-lg font-semibold">
          {title}
        </p>
        <span className="md:text-md text-l font-medium flex-start text-black ">
          {description}
        </span>
        <br />

        {/* Enhanced Action Buttons */}
        <div className="flex gap-2 mt-2">
          <button
            className="flex-1 flex justify-center items-center p-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-sky-500/50"
            onClick={handleDetailClick}
          >
            <span className="text-white font-medium">Details</span>
            <FaArrowRight className="ml-2 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <Link to="/contact" className="flex-1">
            <button className="w-full flex justify-center items-center p-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-emerald-500/50">
              <span className="text-white font-medium">Contact Now</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cards;
