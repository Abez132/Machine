import Cards from "./components/Cards";
import Detail from "./Detaile";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { cards } from "./data/cards";

const Services = () => {
    const { state } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [state]);

    return (
        <div className="flex flex-col justify-center transition-all duration-300 items-center text-gray-500">
            {state && (
                <div id="top">
                    <Detail
                        image={state.image}
                        detail={state.detail}
                        name={state.title}
                    />
                </div>
            )}
            <h1 className="text-4xl font-bold">Services Page</h1>
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