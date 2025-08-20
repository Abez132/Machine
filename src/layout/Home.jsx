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
            <div className="flex flex-wrap justify-center gap-16 px-6 py-16 text-center ">
                {acards.map((card, index) => (
                  <_motions.div whileInView={{ opacity: 1 , scale:1}} initial={{ opacity: 0, scale:0.9 }} transition={{duration:0.3,delay:0.1 * index, ease: "linear", type: "tween"}} key={index} className="max-w-sm flex  hover:scale-110 border-r-4 border-b-2 border-r-gray-200 border-b-gray-200 transition delay-1 rounded p-2 flex-col justify-center items-center space-y-4">
                        <div className="text-6xl  ">{card.image}</div>
                            <h3 className="text-3xl   font-bold">{card.title}</h3>
                            <p className=" text-sm font-medium leading-relaxed">{card.desc}</p>
                    </_motions.div>
                ))}
            </div>          
        </div>
    )
}

export default Home;