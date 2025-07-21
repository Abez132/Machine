import Cards from "./components/Cards"
const Services=()=>{
    return(
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-400 to-indigo-800 text-gray-500">
            <h1 className="text-4xl font-bold">Services Page</h1>
            <Cards title="Card 1"
                    description="This is the description for Card 1."
                    image="https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Cards title="Card 1"
                    description="This is the description for Card 1."
                    image="https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Cards title="Card 1"
                    description="This is the description for Card 1."
                    image="https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />


        </div>
    );
}
export default Services;