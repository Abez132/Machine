import onePiece from "../assets/N23.jpg";
import { Link } from "react-router-dom";
import { motion as _motion } from "framer-motion";
import Burger from "./components/Burger";
import { FaAward, FaUsers, FaGlobe, FaHandshake } from "react-icons/fa";

const AboutUs = () => {
  const stats = [
    { icon: <FaAward />, number: "2+", label: "Years Excellence" },
    { icon: <FaUsers />, number: "100+", label: "Happy Clients" },
    { icon: <FaGlobe />, number: "15+", label: "Countries Served" },
    { icon: <FaHandshake />, number: "500+", label: "Successful Projects" },
  ];

  const values = [
    {
      title: "Quality Assurance",
      description:
        "We maintain the highest standards in all our products and services, ensuring customer satisfaction.",
      icon: "🏆",
    },
    {
      title: "Innovation",
      description:
        "Constantly evolving with cutting-edge technology and modern solutions for our clients.",
      icon: "💡",
    },
    {
      title: "Reliability",
      description:
        "Timely delivery and consistent performance that our partners can depend on.",
      icon: "⚡",
    },
    {
      title: "Global Reach",
      description:
        "Connecting markets worldwide through our extensive import and export network.",
      icon: "🌍",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100" id="about">
      <Burger />

      {/* Hero Section */}
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

      {/* Values Section */}
      <div className="py-20">
        <div className="container-responsive">
          <_motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that drive our commitment to excellence and guide
              every decision we make.
            </p>
          </_motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <_motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group text-center hover:shadow-cyan-500/20"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {value.description}
                </p>
              </_motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 bg-gradient-to-br from-gray-900/30 to-gray-800/30">
        <div className="container-responsive">
          <div className="grid lg:grid-cols-2 gap-12">
            <_motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="card"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl text-white mb-6">
                🎯
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-6">
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To contribute to customer satisfaction and our country's
                economic growth by conducting export, import, trade, and
                production activities in accordance with national and
                international quality standards. We ensure competition in our
                sector without compromising quality in our production and export
                operations.
              </p>
            </_motion.div>

            <_motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl text-white mb-6">
                👁️
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-6">
                Our Vision
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To become a leading force in contributing positively to our
                country's economy and employment development through effective
                trade operations. We envision creating sustainable growth and
                opportunities while maintaining our commitment to excellence and
                innovation.
              </p>
            </_motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
