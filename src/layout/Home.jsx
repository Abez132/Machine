import Hero from "./components/Hero";
import Cards from "./components/Cards";

import { cards } from "./data/cards";
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra.",
    },
    {
      image: <FaRegEye />,
      title: "Our vision",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      image: <GiStairsGoal />,
      title: "Our mission",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];
    return(
        <div >
            <Hero/>
            <div className="flex flex-col p-4 text-gray-100 m-16 justify-center items-center " id="about">
                <h1 className="text-2xl font-bold m-4 italic " >About Us</h1>
                <p>We are a company dedicated to providing the best services to our customers.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ea maxime porro doloribus praesentium ipsa vero possimus hic modi voluptatem esse, fugiat itaque saepe quia, obcaecati iusto quam, qui facilis.lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea maxime porro doloribus praesentium ipsa vero possimus hic modi voluptatem esse, fugiat itaque saepe quia, obcaecati iusto quam, qui facilis.
                </p>
            </div>
            <h1 className="text-2xl font-bold m-4 italic">Our Services</h1>


  
    <div className="flex flex-wrap justify-center gap-16 px-6 py-16 bg-white text-center">
      {acards.map((card, index) => (
        <div key={index} className="max-w-sm flex flex-col justify-center items-center
         space-y-4">
            <div className="text-6xl">{card.image}</div>
          <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>

    <div className="flex flex-col justify-center items-center text-gray-500 m-12">
        <h2 className="text-white italic text-2xl font-bold">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 justify-center items-center ">

                {cards.slice(0, 3).map((card, index) => ( 
                    <Cards 
                        key={index}
                        title={card.title}
                        description={card.desc}
                        image={card.image}
                        detail={card.detail}
                    />
                ))}


            </div>
    </div>
            
        </div>
    )
}

export default Home;