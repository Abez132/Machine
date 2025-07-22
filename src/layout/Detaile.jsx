const Detail=({image,description,name})=>{
    return(
        <div>
            <img src={image} alt="image" />
            <h1>{name}</h1>
            <p>{description}</p>


        </div>
    )
}
export default Detail;