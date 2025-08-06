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
                    <div className="absolute m-4 text-4xl text-red-100 hover:text-red-600 backdrop-blur-3xl hover:scale-105 hover:cursor-pointer transition right-4 " 
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
                    <button className={`hover:bg-gray-600 text-stone-200  p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${active==="mani"?"bg-gray-800 text-sky-300 ":""}`} onClick={()=>{setCategory("mani"); setActive("mani")}}>MANUFACTURING</button> 
                    <button onClick={()=>{setCategory("import"); setActive("import")}} className={`hover:bg-gray-600 rounded text-stone-200 p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${active==="import"?"bg-gray-800 text-sky-300 ":""}`}>IMPORT</button> 
                    <button onClick={()=>{setCategory("export"); setActive("export")}} className={`hover:bg-gray-600 rounded text-stone-200 p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${active==="export"?"bg-gray-800 text-sky-300":""}`}>EXPORT</button>
                </div>
               <div className="flex w-full flex-row justify-center items-center flex-wrap min-h-screen gap-4 ">

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