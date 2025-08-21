import Cards from "./components/Cards";
import Detail from "./Detaile";


import Burger from "./components/Burger";
import { useLocation,Link } from "react-router-dom";
import { useEffect,useState } from "react";
import {motion as _motions} from "framer-motion";
import { AnimatePresence } from "framer-motion";

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
           <div className="m-4 my-8 md:my-2"><Burger /></div> 
            {state && showDetail && (
                <div id="top" className="transition-all">
                    <div className="absolute m-4 text-4xl z-10 text-red-100 hover:text-red-600 backdrop-blur-3xl hover:scale-105 hover:cursor-pointer transition right-4 " 
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
                <div className="flex w-full justify-center items-center gap-4 p-4">
                    <button className={` cursor-pointer hover:text-shadow-sm rounded hover:text-shadow-stone-300 text-stone-200 z-10 p-1  ${active==="mani"?"bg-gray-800 text-sky-300 ":""}`} onClick={()=>{setCategory("mani"); setActive("mani");}}>PRODUCTION</button> 
                    <button onClick={()=>{ console.log('import clicked'); setCategory("import"); setActive("import");}} className={`z-10 cursor-pointer hover:text-shadow-sm hover:text-shadow-stone-300 transition rounded text-stone-200 p-1  ${active==="import"?"bg-gray-800 text-sky-300 ":""}`}>IMPORT ITEMS</button> 
                    <button onClick={()=>{setCategory("export"); setActive("export")}} className={` z-10 cursor-pointer hover:text-shadow-sm hover:text-shadow-stone-300 transition rounded text-stone-200 p-1  ${active==="export"?"bg-gray-800 text-sky-300":""}`}>EXPORT ITEMS</button>
                </div>
                <AnimatePresence mode="wait">
                    
               <div className="flex  flex-row justify-center flex-wrap min-h-screen  gap-4 ">

                {
                    category==="mani" && (
                        <_motions.div initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration:0.8 }}
                            className="flex flex-col w-full   h-full">
                            <div className="flex flex-wrap w-full justify-center items-center gap-4  p-4 "> 
                                <button className={` cursor-pointer hover:text-shadow-sm hover:text-shadow-stone-300 transition text-stone-200 rounded border-b-2  p-1  ${activeProduction==="win"?"bg-gray-800 text-sky-300 border-none transition":""}`} onClick={()=>{setCategory("mani"); setActiveProduction("win")}}>WINNOWING MACHINE </button> 
                            <button onClick={()=>{setCategory("mani"); setActiveProduction("dis")}} className={` cursor-pointer hover:text-shadow-sm hover:text-shadow-stone-300 transition rounded text-stone-200 p-1 border-b-2   ${activeProduction==="dis"?"bg-gray-800 text-sky-300 border-none transition":""}`}>DISTONER</button>
                            <button onClick={()=>{setCategory("mani"); setActiveProduction("plus")}} className={` cursor-pointer hover:text-shadow-sm hover:text-shadow-stone-300 transition rounded text-stone-200 p-1 border-b-2 ${activeProduction==="plus"?"bg-gray-800 text-sky-300 border-none transition":""}`}>WINNOWING + DISTONER</button>
                            <button onClick={()=>{setCategory("mani"); setActiveProduction("cofff")}} className={` cursor-pointer hover:text-shadow-sm hover:text-shadow-stone-300 transition rounded text-stone-200 p-1 border-b-2 ${activeProduction==="cofff"?"bg-gray-800 text-sky-300 border-none transition":""}`}>COFFEE ROASTER AND GRINDER</button>
                           
                            </div>
                            <div className="flex flex-wrap w-full justify-center items-center gap-4 p-4">

                                {category==="mani" && activeProduction==="win" &&(<div className="w-full">
                                    <div className="w-full h-full  flex  flex-col md:flex-row justify-center ">
                                        <div className="relative  flex flex-col h-full w-full ">
                                            <div className="absolute z-1 opacity-0 md:opacity-100 text-2xl text-sky-950 active:scale-100 hover:scale-110 p-1 rounded-full bg-gray-600/40 cursor-pointer top-1/2 right-8" onClick={goToRight}><FaChevronRight/>
                                            </div>
                                            <div className="absolute z-1 opacity-0 md:opacity-100 text-2xl text-sky-950 active:scale-100 hover:scale-110 p-1 rounded-full bg-gray-600/40 cursor-pointer top-1/2 left-8" onClick={goToLeft}><FaChevronLeft/></div>
                                            <div className="flex flex-col transition h-full w-full ld:w-2xl " 
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

                                        <div className="flex justify-center flex-col  m-4 w-full">

                                            <h1 className="text-4xl text-amber-300"><b>Winnowing Machine</b></h1>

                                            <p>A specialized seed-cleaning machine that uses controlled airflow and vibration to separate seeds from lighter impurities such as husks, dried leaves, broken shells, and dust. The process works by allowing lighter materials to be blown away while the heavier, clean seeds fall into a collection chamber. This ensures high-quality seed output, reduces contamination, and prepares seeds for further processing, storage, or packaging. It is widely used for grains, pulses, and oil seeds to maintain purity and improve market value.</p>
                                            <Link to="/contact"><button className="bg-sky-700 hover:bg-sky-400 hover:scale-105 active:scale-95 transition text-white px-4 py-2 m-2 rounded">Contact Us</button></Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-center m-4 w-full h-full items-start">
                                        <div>
                                            <video src="vid1.MOV" className="w-124 h-96" controls></video>
                                            <video src="vid2.MOV"  className="w-124  h-96" controls></video>
                                        </div>
                                        <div>
                                            <p>This are a demo of our winnowing machine in action</p>
                                        </div>
                                        
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
                            
                        </_motions.div>
                    ) 
                    
                }
                {
                    category==="import" && (
                        <_motions.div initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration:0.8 }}
                            className="flex flex-col w-full">
                            <div className="flex justify-center items-center gap-4 p-4 "> 
                                <button className={` cursor-pointer hover:text-shadow-sm hover:text-shadow-stone-300 transition text-stone-200  p-1 border-b-2  rounded ${activeImport==="havi"?"bg-gray-800 text-sky-300 border-none":""}`} onClick={()=>{setCategory("import"); setActiveImport("havi")}}>HEAVEY MACHINERY </button> 
                            <button onClick={()=>{setCategory("import"); setActiveImport("bul")}} className={` cursor-pointer hover:text-shadow-sm hover:text-shadow-stone-300 transition rounded text-stone-200 p-1 border-b-2 ${activeImport==="bul"?"bg-gray-800 text-sky-300 border-none":""}`}>BUILDING FINISHING PRODUCT</button>
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
                            
                        </_motions.div>
                    ) 
                    
                }
                {
                    category==="export" && (
                        <_motions.div initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration:0.8 }}>

                            <div className="flex justify-center items-center gap-4 p-4"> 
                                <button className={` cursor-pointer border-b-2  hover:text-shadow-sm rounded hover:text-shadow-stone-300 text-stone-200  p-1  ${activeExport==="pu"?"bg-gray-800 text-sky-300 border-none":""}`} onClick={()=>{setCategory("export"); setActiveExport("pu")}}>PULSES </button> 
                    <button onClick={()=>{setCategory("export"); setActiveExport("oil")}} className={` cursor-pointer  border-b-2  hover:text-shadow-sm hover:text-shadow-stone-300 transition rounded text-stone-200 p-1  ${activeExport==="oil"?"bg-gray-800 text-sky-300 border-none":""}`}>OIL SEEDS</button>
                    <button onClick={()=>{setCategory("export"); setActiveExport("cof")}} className={` cursor-pointer hover:text-shadow-sm border-b-2  hover:text-shadow-stone-300 transition rounded text-stone-200 p-1  ${activeExport==="cof"?"bg-gray-800 text-sky-300 border-none":""}`}>PROCCESSED COFFEE</button>
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
                            
                        </_motions.div>
                    ) 
                    
                }
                
                    
                </div> 
                </AnimatePresence>
            </div>
            
            


        </div>
    );
}
export default Services;