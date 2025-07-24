import Hero from "./components/Hero";
import onePiece from "../assets/N2.jpg"
import Sector from "./components/Sector";

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
        <div >
            <Hero/>
            <div className="flex flex-wrap justify-center gap-16 px-6 py-16   text-center ">
                {acards.map((card, index) => (
                    <div key={index} className="max-w-sm flex  shadow-2xl rounded p-2 flex-col justify-center items-center text-amber-400
                    space-y-4">
                        <div className="text-6xl text-gray-950 ">{card.image}</div>
                            <h3 className="text-2xl   font-bold">{card.title}</h3>
                            <p className="text-amber-50 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col md:flex-row  w-full p-20 text-gray-100  justify-center items-center " id="about" 
                // style={{
                //                  backgroundImage:`url(${onePiece})`,
                //                  backgroundSize: "cover",
                //                  backgroundRepeat: "no-repeat",
                //                  backgroundPosition: "center",
                //                  imageRendering: "auto"
                //               }}
            >
                <div className="m-8 w-full  ">
                    <img src={onePiece} alt="picture" className="h-80 w-full md:" />
                </div>
                <div className="p-8">
                    <h1 className="text-2xl text-amber-400 font-bold m-4 italic " >About Us</h1>
                    <p><span className="text-4xl">O</span>ur company which was established in 2022 has set its self the goal of completing the works it has undertaken in a timely quality controlled & complete manner by doing the job effectively.
                        <br />
                        <br />
                        Our personal working on our organizations are experts,
                        researchers & talented people and aim to prevent
                        monopolization by providing a competitive environment
                        in the sector by producing importing & exporting quality
                        & economic products in detail solution.

                    </p>
                </div>
                
            </div>
            {/* <h1 className="text-2xl font-bold m-4 italic">Our Services</h1> */}


  
    

    <div className="flex flex-col w-ful justify-center items-center text-gray-500 m-8 ">
        <h2 className="text-amber-400  italic text-4xl  font-bold">What We DO</h2>
        <Sector />
    </div>
            
        </div>
    )
}

export default Home;