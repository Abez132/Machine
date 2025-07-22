import Detail from "../Detaile";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
const Cards=({ title, description, image }) => {
    // const detailed=()=>{
    //     return(
    //         <div className="border-2 absolute">
    //             <Detail 
    //                 image={image}
    //                 description={description}
    //                 name={title}/>
    //         </div>
    //     )
    // }
    return (

        <div className="group relative h-70 w-100 overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 m-3">

            <img className="w-full h-full object-cover" src={image} alt="places" />
            <Link to="/contact"><div
                className="absolute top-[58%] z-10 right-4 w-10 h-10 bg-white rounded-full 
                flex items-center justify-center text-4xl opacity-0 group-hover:opacity-100 
                hover:scale-110 hover:text-sky-700 hover:cursor-pointer   transition-opacity duration-300">
                    <TfiEmail className="m-2 text-2xl" />
                </div>
            </Link>
            <div className="flex-col font-['poppins'] text-[#000000] text-600 text-start justify-center pt-5 pl-2 h-25 absolute bottom-0 left-0 w-full bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="flex-start font-['poppins'] text-lg font-semibold text-gray-800">
                    {title}
                </p>
                <span className="text-xs font-['poppins'] flex-start text-gray-400">
                    {description}
                </span>
                <br />
                <button className="absolute bg-blue-300 m-3 bottom-1 opacity-0 rounded right-0 group-hover:opacity-100 hover:scale-110 active:scale-100" onClick={()=>{<Detail 
                    image={image}
                    description={description}
                    name={title}/>}}>Detail</button>
            </div>
        </div>
    );
}
export default Cards;