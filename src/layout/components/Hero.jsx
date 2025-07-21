const Hero=()=>{
    return(
        <div className="flex flex-wrap items-center justify-center lg:flex-row h-screen">
            <div className="text-center text-red-500">
                <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
                <p className="text-lg mb-8">Discover amazing content and connect with us</p>
            </div>
            <img className="w-2xl  h-96 rounded m-2 " src="https://plus.unsplash.com/premium_photo-1680608155016-3faa9cbdc236?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image" />
            

        </div>
    )
}

export default Hero;