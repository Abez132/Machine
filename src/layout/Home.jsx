import Hero from "./components/Hero";
import Cards from "./components/Cards";
import image1 from "../assets/infocards1.png";
import image2 from "../assets/infocards2.png";
import image3 from "../assets/infocards3.png";
const Home=()=>{
                const cards = [
    {
      image: image1,
      title: "Great team work",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra.",
    },
    {
      image: image2,
      title: "Our vision",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      image: image3,
      title: "Our mission",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];
    return(
        <div>
            <Hero/>
            <div className="flex flex-col p-4 text-gray-100 m-16 justify-center items-center " id="about">
                <h1 className="text-2xl font-bold m-4 italic " >About Us</h1>
                <p>We are a company dedicated to providing the best services to our customers.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ea maxime porro doloribus praesentium ipsa vero possimus hic modi voluptatem esse, fugiat itaque saepe quia, obcaecati iusto quam, qui facilis.lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea maxime porro doloribus praesentium ipsa vero possimus hic modi voluptatem esse, fugiat itaque saepe quia, obcaecati iusto quam, qui facilis.
                </p>
            </div>
            <h1 className="text-2xl font-bold m-4 italic">Our Services</h1>


  
    <div className="flex flex-wrap justify-center gap-16 px-6 py-16 bg-white text-center">
      {cards.map((card, index) => (
        <div key={index} className="max-w-sm space-y-4">
          <img src={card.image} alt={card.title} className="w-16 h-16 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>
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