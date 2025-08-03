const Detail=({image,detail,name})=>{
    return(
        <div className="flex flex-row items-center  justify-center  w-full">

            <div className="w-1/2 m-8">
                <img src={image} alt="image" className=" object-cover h-screen rounded-lg" />
            </div>

            <div className="w-1/2 ">
                <h1 className="text-2xl text-black font-bold">{name}</h1>
                <p className="text-white">{detail}</p>
            </div>
        </div>
    )
}
export default Detail;