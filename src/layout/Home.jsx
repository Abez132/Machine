import Hero from "./components/Hero";

// import { cards } from "./data/cards";
import { HiUserGroup } from "react-icons/hi";
import { GiStairsGoal } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
const Home=()=>{

    // const cards = [
    //     {
    //         image: image1,
    //         title: "Great team work",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //         detail:"lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea maxime porro doloribus praesentium ipsa vero possimus hic modi voluptatem esse, fugiat itaque saepe quia, obcaecati iusto quam, qui facilis."
    //     },
    //     {
    //         image: image2,
    //         title: "Our vision",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //         detail:"lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea maxime porro doloribus praesentium ipsa vero possimus hic modi voluptatem esse, fugiat itaque saepe quia, obcaecati iusto quam, qui facilis."
    //     },
    //     {
    //         image: image3,
    //         title: "Our mission",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //         detail:"lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea maxime porro doloribus praesentium ipsa vero possimus hic modi voluptatem esse, fugiat itaque saepe quia, obcaecati iusto quam, qui facilis."
    //     }
    // ];

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
                    <div key={index} className="max-w-sm flex  hover:shadow-stone-500 transition delay-1  shadow-lg shadow-stone-700 rounded p-2 flex-col justify-center items-center space-y-4">
                        <div className="text-6xl  ">{card.image}</div>
                            <h3 className="text-2xl  text-gray-400 font-bold">{card.title}</h3>
                            <p className=" text-sm font-medium leading-relaxed">{card.desc}</p>
                    </div>
                ))}
            </div>            
        </div>
    )
}

export default Home;