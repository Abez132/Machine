import Detail from "../Detaile";
const Cards=({ title, description, image }) => {
    const detailed=()=>{
        return(
            <div className="border-2 absolute">
                <Detail 
                    image={image}
                    description={description}
                    name={title}/>
            </div>
        )
    }
    return (
        <div className="bg-white rounded-lg shadow-md hover:cursor-pointer  m-4 "
             onClick={detailed}>
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold m-4">{title}</h2>
            <p className="text-gray-600 m-4">{description}</p>
        </div>
    );
}
export default Cards;