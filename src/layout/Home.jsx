import Hero from "./components/Hero";

// import { cards } from "./data/cards";
import { HiUserGroup } from "react-icons/hi";
import { GiStairsGoal } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { motion as _motions } from "framer-motion";

const Home=()=>{

    const acards = [
    {
      image: <HiUserGroup />,
      title: "Great team work",
      desc:
        "Our company which was established in 2022 has set its self the goal of completing the works it has undertaken in a timely quality controlled & complete manner by doing the job effectively.",
    },
    {
      image: <FaRegEye />,
      title: "Our vision",
      desc:
        "Our company aims to contribute positively to countries economy's economy & employment even to the development by making the following trades effectively.",
    },
    {
      image: <GiStairsGoal />,
      title: "Our mission",
      desc:
        "To contribute to customer satisfaction and the economy of our country by making export, Import, trade & production accordance with national and international quality standard in the sectors. In which we operate and to ensure competition In the sector without sacrificing quality in the production we made and export.",
    },
  ];
    return(
        <div className="flex flex-col" >
            <Hero/>
            <div className="grid grid-cols-1 my-8 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {acards.map((card, index) => (
            <_motions.div
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{
                duration: 0.6,
                delay: 0.2 * index,
                ease: "easeOut",
              }}
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                {/* Icon Container */}
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <div className="text-3xl text-white group-hover:scale-110 transition-transform duration-300">
                      {card.image}
                    </div>
                  </div>
                  {/* Floating particles effect */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {card.desc}
                </p>

                {/* Decorative Line */}
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-32 transition-all duration-500"></div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </_motions.div>
          ))}
        </div>          
        </div>
    )
}

export default Home;