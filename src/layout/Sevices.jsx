import Cards from "./components/Cards";
import Detail from "./Detaile";
import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
// import { cards } from "./data/cards";
import {destones} from "./data/destone.js";
// import onePiece from "../../public/img.webp";
// import onePiece2 from "../../public/dis.jpg";
import { FaChevronRight } from "react-icons/fa";

import { FaChevronLeft } from "react-icons/fa";



import {imports} from "./data/import";
import { buildings } from "./data/bulding";
import {exports} from "./data/export";
import { pulses } from "./data/pulse";
import { coffees } from "./data/coffee";
import { pluses } from "./data/pluse.js";
import { roasts } from "./data/coffeeRoast.js";
import { DiJava } from "react-icons/di";

const Services = () => {
    const { state } = useLocation();
    const[showDetail,setShowDetail]=useState(true);
    const[category,setCategory]=useState("mani");
    const[active,setActive]=useState("mani");
    const[activeImport,setActiveImport]=useState("havi");
    const[activeExport,setActiveExport]=useState("pu");
    const[activeProduction,setActiveProduction]=useState("win");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (state) setShowDetail(true);
    }, [state]);

    const images=[
        {url:'img.webp' },
        {url:'img2.jpg' },

    ];

    const goToRight = () => {
        index < images.length - 1 ? setIndex(index + 1) : setIndex(0);
    };
    const goToLeft = () => {
        index > 0 ? setIndex(index - 1) : setIndex(images.length - 1);
    };

    return (
        <div className="flex flex-col justify-center transition-all duration-300 items-center">
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
                    <button className={`hover:bg-gray-600 text-stone-200  p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${active==="mani"?"bg-gray-800 text-sky-300 ":""}`} onClick={()=>{setCategory("mani"); setActive("mani")}}>PRODUCTION</button> 
                    <button onClick={()=>{setCategory("import"); setActive("import")}} className={`hover:bg-gray-600 rounded text-stone-200 p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${active==="import"?"bg-gray-800 text-sky-300 ":""}`}>IMPORT ITEMS</button> 
                    <button onClick={()=>{setCategory("export"); setActive("export")}} className={`hover:bg-gray-600 rounded text-stone-200 p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${active==="export"?"bg-gray-800 text-sky-300":""}`}>EXPORT ITEMS</button>
                </div>
               <div className="flex  flex-row justify-center flex-wrap min-h-screen  gap-4 ">

                {
                    category==="mani" && (
                        <div className="flex flex-col w-full   h-full">
                            <div className="flex flex-wrap w-full justify-center items-center gap-4  p-4 "> 
                                <button className={`hover:bg-gray-600 text-stone-200  p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${activeProduction==="win"?"bg-gray-800 text-sky-300 ":""}`} onClick={()=>{setCategory("mani"); setActiveProduction("win")}}>WINNOWING MACHINE </button> 
                            <button onClick={()=>{setCategory("mani"); setActiveProduction("dis")}} className={`hover:bg-gray-600 rounded text-stone-200 p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${activeProduction==="dis"?"bg-gray-800 text-sky-300 ":""}`}>DISTONER</button>
                            <button onClick={()=>{setCategory("mani"); setActiveProduction("plus")}} className={`hover:bg-gray-600 rounded text-stone-200 p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${activeProduction==="plus"?"bg-gray-800 text-sky-300 ":""}`}>WINNOWING + DISTONER</button>
                            <button onClick={()=>{setCategory("mani"); setActiveProduction("cofff")}} className={`hover:bg-gray-600 rounded text-stone-200 p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${activeProduction==="cofff"?"bg-gray-800 text-sky-300 ":""}`}>COFFEE ROASTER AND GRINDER</button>
                           
                            </div>
                            <div className="flex flex-wrap w-full justify-center items-center gap-4 p-4">

                                {category==="mani" && activeProduction==="win" &&(<div className="w-full">
                                    <div className="w-full h-full  flex  flex-col md:flex-row justify-center ">
                                        <div className="relative  flex flex-col h-full w-full ">
                                            <div className="absolute z-1 opacity-0 md:opacity-100 text-2xl text-sky-950 active:scale-100 hover:scale-110 p-1 rounded-full bg-gray-600/40 cursor-pointer top-1/2 right-8" onClick={goToRight}><FaChevronRight/>
                                            </div>
                                            <div className="absolute z-1 opacity-0 md:opacity-100 text-2xl text-sky-950 active:scale-100 hover:scale-110 p-1 rounded-full bg-gray-600/40 cursor-pointer top-1/2 left-8" onClick={goToLeft}><FaChevronLeft/></div>
                                            <div className="flex flex-col transition h-full w-full md:w-2xl " 
                                                          style={{
                                                              backgroundImage:`url(${images[index].url})`,
                                                              backgroundSize: "contain",
                                                              backgroundRepeat: "no-repeat",
                                                              backgroundPosition: "center",
                                                              imageRendering: "auto",
                                                               
                                                              height: "80vh" 
                                                           }}
                                                          ></div> 
                                            <div className="flex gap-4 justify-center text-2xl">
                                                {
                                                images.map((image, idx) => (
                                                    <div key={idx}>
                                                        .
                                                    </div>
                                                ))
                                            }
                                            </div>
                                            
                                            
                                        </div>
                                        
                                        <div className="m-4">
                                            <h1>llllllll</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste praesentium amet soluta eum necessitatibus voluptatem deleniti, quo at accusantium alias placeat expedita sed dicta iure ducimus doloribus sunt ipsa cupiditate.lore Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ducimus, in eaque porro reprehenderit commodi officia aliquam non quod repellat totam accusantium ab numquam, quasi alias doloribus! Itaque, eligendi architecto? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, unde inventore. Aut, temporibus earum ex vero quos id dignissimos omnis exercitationem iure soluta perspiciatis eveniet, facilis, cumque cum natus eaque!</p>
                                            <button className="bg-sky-300 p-2">jjjjjj</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center w-full h-full items-center">
                                        <video src="vid1.MOV" className="w-full h-screen" controls></video>
                                        <video src="vid2.MOV"  className="w-full  h-screen" controls></video>
                                    </div>
                                    
                                </div>)
                                }
                                {
                                    category==="mani" && activeProduction==="dis" && destones.map((imp, index) => (
                                        <Detail
                                            key={index}
                                            image={imp.image}
                                            detail={imp.detail}
                                            name={imp.title}
                                        />
                                    ))
                                }
                                {
                                    category==="mani" && activeProduction==="plus" && pluses.map((imp, index) => (
                                        <Detail
                                            key={index}
                                            image={imp.image}
                                            detail={imp.detail}
                                            name={imp.title}
                                        />
                                    ))
                                }
                                {
                                    category==="mani" && activeProduction==="cofff" && roasts.map((imp, index) => (
                                        <Detail
                                            key={index}
                                            image={imp.image}
                                            detail={imp.detail}
                                            name={imp.title}
                                        />
                                    ))
                                }
                            </div>
                            
                        </div>
                    ) 
                    
                }
                {
                    category==="import" && (
                        <div className="flex flex-col w-full">
                            <div className="flex justify-center items-center gap-4 p-4 "> 
                                <button className={`hover:bg-gray-600 text-stone-200  p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${activeImport==="havi"?"bg-gray-800 text-sky-300 ":""}`} onClick={()=>{setCategory("import"); setActiveImport("havi")}}>HEAVEY MACHINERY </button> 
                            <button onClick={()=>{setCategory("import"); setActiveImport("bul")}} className={`hover:bg-gray-600 rounded text-stone-200 p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${activeImport==="bul"?"bg-gray-800 text-sky-300 ":""}`}>BUILDING FINISHING PRODUCT</button>
                            </div>
                            <div className="flex flex-wrap">

                                {category==="import" && activeImport==="havi" &&imports.map((imp, index) => ( 
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
                                    category==="import" && activeImport==="bul" && buildings.map((imp, index) => (
                                        <Cards 
                                            key={index}
                                            title={imp.title}
                                            description={imp.desc}
                                            image={imp.image}
                                            detail={imp.detail}
                                        />
                                    ))
                                }
                            </div>
                            
                        </div>
                    ) 
                    
                }
                {
                    category==="export" && (
                        <div>
                            <div className="flex justify-center items-center gap-4 p-4"> 
                                <button className={`hover:bg-gray-600 text-stone-200  p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${activeExport==="pu"?"bg-gray-800 text-sky-300 ":""}`} onClick={()=>{setCategory("export"); setActiveExport("pu")}}>PULSES </button> 
                    <button onClick={()=>{setCategory("export"); setActiveExport("oil")}} className={`hover:bg-gray-600 rounded text-stone-200 p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${activeExport==="oil"?"bg-gray-800 text-sky-300 ":""}`}>OIL SEEDS</button>
                    <button onClick={()=>{setCategory("export"); setActiveExport("cof")}} className={`hover:bg-gray-600 rounded text-stone-200 p-1 pr-4 rounded-tr-full rounded-bl-36 overflow-hidden ${activeExport==="cof"?"bg-gray-800 text-sky-300 ":""}`}>PROCCESSED COFFEE</button>
                            </div>
                            <div className="flex flex-wrap">

                                {category==="export" && activeExport==="pu" &&pulses.map((imp, index) => ( 
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
                                    category==="export" && activeExport==="oil" && exports.map((imp, index) => (
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
                                    category==="export" && activeExport==="cof" && coffees.map((imp, index) => (
                                        <Cards 
                                            key={index}
                                            title={imp.title}
                                            description={imp.desc}
                                            image={imp.image}
                                            detail={imp.detail}
                                        />
                                    ))
                                }
                            </div>
                            
                        </div>
                    ) 
                    
                }
                
                    
                </div> 
            </div>
            
            


        </div>
    );
}
export default Services;