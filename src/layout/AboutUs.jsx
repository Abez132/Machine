import onePiece from "../assets/N23.jpg"
// import { Link } from "react-router-dom";
import {motion as _motion} from "framer-motion";
import Burger from "./components/Burger";

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
                <Burger/>
                <div className="container-responsive py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <_motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={onePiece}
                alt="HABYAT Trading PLC Team"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
          </_motion.div>

          <_motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <_motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                <span className="gradient-text">About</span>
                <span className="text-white"> Us</span>
              </_motion.h1>

              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p className="relative">
                <span className="text-7xl font-bold gradient-text float-left mr-4 mt-2 leading-none">
                  O
                </span>
                ur company, established in 2022, has set itself the ambitious
                goal of completing all undertaken projects in a timely,
                quality-controlled, and comprehensive manner through effective
                execution.
              </p>

              <p>
                Our team consists of experts, researchers, and talented
                professionals who aim to prevent monopolization by fostering a
                competitive environment in our sector. We achieve this by
                producing, importing, and exporting quality, economical products
                with detailed solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to="/contact">
                <button className="btn-primary w-full sm:w-auto">
                  Get In Touch
                </button>
              </Link>
              <Link to="/services">
                <button className="btn-secondary w-full sm:w-auto">
                  View Our Services
                </button>
              </Link>
            </div>
          </_motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <_motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm"
      >
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <_motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </_motion.div>
            ))}
          </div>
        </div>
      </_motion.div>
                
            </div>
    );
}

export default AboutUs;