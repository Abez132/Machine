import onePiece from "../../assets/gear.jpg";
import { Link } from "react-router-dom";
import { motion as _motions } from "framer-motion";
import Head from "./Header";
import {
  FaArrowRight,
  FaShieldAlt,
  FaCog,
  FaGlobe,
} from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";



const Hero = () => {
  

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Quality Assured",
      description: "Premium products with international standards",
    },
    {
      icon: <FaCog />,
      title: "Advanced Technology",
      description: "State-of-the-art machinery and processes",
    },
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      description: "Import & export services worldwide",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-950 p-2 pb-4">
      {/* Background with Overlay */}
      <div
        className="absolute inset-0 bg-cover  bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${onePiece})`,
          imageRendering: "auto",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-950/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-gray-900/50"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="relative z-20 w-full">
        <Head />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <_motions.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 font-serif"
          >
            <h1 className="text-4xl w-full text-center sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-6 leading-tight">
              Delivering {" "}
              <span className=" bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Excellence
              </span>{" "}
              Since 2022
            </h1>
          </_motions.div>

          {/* Subtitle */}
          <_motions.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium max-w-4xl mx-auto leading-relaxed font-serif">
              At{" "}
              <span className="text-cyan-400 text font-semibold">
                HABYAT Trading PLC
              </span>
              , we unite expertise, innovation, and integrity to deliver timely,
              detail-oriented solutions. By fostering a competitive edge, we
              import, export, and produce economic, high-quality
              products—breaking monopolies and setting new standards.
            </p>
          </_motions.div>

          {/* CTA Buttons */}
          <_motions.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link to="/services">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl hover:shadow-cyan-500/50 min-w-[200px]">
                <span className="flex items-center justify-center gap-3">
                  Explore Services
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            </Link>

            <Link to="/contact">
              <button
                className="group relative px-8 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-600/50 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:border-cyan-500/50 hover:bg-gray-700/50 min-w-[200px]"
              >
                <span className="flex items-center justify-center gap-3">
                  <BsFillTelephoneOutboundFill  className="group-hover:scale-110 transition-transform duration-300" />
                  Contact Us
                </span>
              </button>
            </Link>
          </_motions.div>

          {/* Feature Cards */}
          <_motions.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
              <_motions.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="group relative p-6 bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </_motions.div>
            ))}
          </_motions.div>

          
        </div>

        
      </div>
    </div>
  );
};

export default Hero;
