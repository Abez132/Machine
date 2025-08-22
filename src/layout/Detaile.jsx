import { Link } from "react-router-dom";
import { motion as _motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Detail = ({ image, detail, name }) => {
  const features = detail
    .split(".")
    .filter((item) => item.trim())
    .slice(0, 3);

  return (
    <div className="container-responsive py-12">
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
              src={image}
              alt={name}
              className="w-full h-[500px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>

            {/* Floating Badge */}
            <div className="absolute top-6 left-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Premium Quality
            </div>
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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              <span className="gradient-text">{name}</span>
            </_motion.h1>

            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6"></div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">{detail}</p>

            {/* Key Features */}
            {features.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Key Features:
                </h3>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <_motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature.trim()}.</span>
                    </_motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link to="/contact" className="flex-1">
              <button className="w-full group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-cyan-500/50">
                <span className="flex items-center justify-center gap-3">
                  Get Quote Now
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>

            <button className="flex-1 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-600/50 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:border-cyan-500/50 hover:bg-gray-700/50">
              Learn More
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700/50">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">100%</div>
              <div className="text-sm text-gray-400">Quality Assured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">Fast</div>
              <div className="text-sm text-gray-400">Delivery</div>
            </div>
          </div>
        </_motion.div>
      </div>
    </div>
  );
};

export default Detail;
