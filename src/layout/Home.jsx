import Hero from "./components/Hero";
import Cards from "./components/Cards";
const Home=()=>{
    return(
        <div>
            <Hero/>
            <div className="flex flex-col p-4 text-gray-100 m-16 justify-center items-center ">
                <h1 className="text-2xl font-bold m-4 italic " id="about">About Us</h1>
                <p>We are a company dedicated to providing the best services to our customers.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ea maxime porro doloribus praesentium ipsa vero possimus hic modi voluptatem esse, fugiat itaque saepe quia, obcaecati iusto quam, qui facilis.lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea maxime porro doloribus praesentium ipsa vero possimus hic modi voluptatem esse, fugiat itaque saepe quia, obcaecati iusto quam, qui facilis.
                </p>
            </div>
            <h1 className="text-2xl font-bold m-4 italic">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               

                <Cards
                    title="Card 1"
                    description="This is the description for Card 1."
                    image="https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Cards
                    title="Card 2"
                    description="This is the description for Card 2."
                    image="https://images.unsplash.com/photo-1655824467930-74d790990b4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Cards
                    title="Card 3"
                    description="This is the description for Card 3."
                    image="https://plus.unsplash.com/premium_photo-1677682553106-634b75ec1110?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </div>
        </div>
    )
}

export default Home;