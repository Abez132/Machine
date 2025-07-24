import Cards from "./components/Cards";
import Detail from "./Detaile";
import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import { cards } from "./data/cards";

const Services = () => {
    const { state } = useLocation();
    const[showDetail,setShowDetail]=useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (state) setShowDetail(true);
    }, [state]);

    return (
        <div className="flex flex-col justify-center transition-all duration-300 items-center text-amber-400">
            {state && showDetail && (
                <div id="top" className="transition-all">
                    <div className="absolute m-4 text-4xl backdrop-blur-3xl hover:scale-105 hover:cursor-pointer right-4 " 
                    onClick={()=>setShowDetail(false)}
                    >x</div>Thank you. Nothing. I. 
                    <Detail
                        image={state.image}
                        detail={state.detail}
                        name={state.title}
                    />
                </div>
            )}
            <h1 className="text-4xl font-extrabold italic">OUR PRODUCTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                {cards.map((card, index) => ( 
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
    );
}
export default Services;