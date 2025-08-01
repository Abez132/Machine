import Cards from "./components/Cards";
import Detail from "./Detaile";
import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import { cards } from "./data/cards";
import {imports} from "./data/import";
import {exports} from "./data/export";

const Services = () => {
    const { state } = useLocation();
    const[showDetail,setShowDetail]=useState(true);
    const[category,setCategory]=useState("mani");
    const[active,setActive]=useState("mani");

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
                    >x</div>
                    <Detail
                        image={state.image}
                        detail={state.detail}
                        name={state.title}
                    />
                </div>
            )}
            
            <div>
                <div className="flex justify-center items-center gap-4 p-4">
                    <button className={`hover:bg-gray-400 rounded p-1 ${active==="mani"?"bg-gray-600 ":""}`} onClick={()=>{setCategory("mani"); setActive("mani")}}>production</button> 
                    <button onClick={()=>{setCategory("import"); setActive("import")}} className={`hover:bg-gray-400 rounded p-1 ${active==="import"?"bg-gray-600 ":""}`}>import</button> 
                    <button onClick={()=>{setCategory("export"); setActive("export")}} className={`hover:bg-gray-400 rounded p-1 ${active==="export"?"bg-gray-600 ":""}`}>export</button>
                </div>
               <div className="flex w-screen flex-row flex-wrap gap-4 p-2">

                {
                    category==="mani" && cards.map((card, index) => ( 
                        <Cards 
                            key={index}
                            title={card.title}
                            description={card.desc}
                            image={card.image}
                            detail={card.detail}
                        />
                ))
                    
                }
                {
                    category==="import" && imports.map((imp, index) => ( 
                        <Cards 
                            key={index}
                            title={imp.title}
                            description={imp.desc}
                            image={imp.image}
                            detail={imp.detail}
                        />
                ))
                    
                }
                {
                    category==="export" && exports.map((exp, index) => ( 
                        <Cards 
                            key={index}
                            title={exp.title}
                            description={exp.desc}
                            image={exp.image}
                            detail={exp.detail}
                        />
                ))
                    
                }
                
                    
                </div> 
            </div>
            
            


        </div>
    );
}
export default Services;