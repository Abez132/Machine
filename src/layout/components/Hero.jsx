import onePiece from "../../assets/onePiece.jpg"
// filepath: c:\Users\hp\Desktop\Projects\Machine\src\layout\components\Hero.jsx
const Hero=()=>{
    return(
        <div className="flex  flex-wrap items-center justify-center lg:flex-row h-screen " 
            //   style={{
            //     backgroundImage:`url(${onePiece})`,
            //     backgroundSize: "cover",
            //     backgroundRepeat: "no-repeat",
            //     backgroundPosition: "center",
              //}}
              >
                <img src={onePiece} alt="pic" className="w-2xl m-7 rounded" />
            <div className="text-center text-zinc-400">
                <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
                <p className="text-lg mb-8">Discover amazing content and connect with us</p>
            </div>
            

        </div>
    )
}

export default Hero;