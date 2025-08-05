import { Link } from "react-router-dom";

const Detail=({image,detail,name})=>{
    return(
        <div className="flex flex-row items-center  justify-center  w-full">

            <div className="w-1/2 m-8">
                <img src={image} alt="image" className=" object-cover h-screen rounded-lg" />
            </div>

            <div className="w-1/2 ">
                <h1 className="text-3xl text-stone-400 font-bold">{name}</h1>
                <p className="text-stone-100">{detail}</p>
                <Link to="/contact"><button className="bg-stone-500 hover:bg-sky-700 active:scale-95 text-white px-4 py-2 m-2 rounded">Contact Us</button></Link>
            </div>
        </div>
    )
}
export default Detail;