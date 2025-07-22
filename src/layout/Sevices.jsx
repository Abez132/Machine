import Cards from "./components/Cards"
const Services=()=>{
    return(
        <div className="flex flex-col justify-center items-center  text-gray-500">
            <h1 className="text-4xl font-bold">Services Page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                <Cards title="Card 1"
                    description="This is the description for Card 1."
                    image="https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Cards title="Card 2"
                    description="This is the description for Card 2."
                    image="https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Cards title="Card 3"
                    description="This is the description for Card 3."
                    image="https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Cards title="Card 3"
                    description="This is the description for Card 3."
                    image="https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Cards title="Card 3"
                    description="This is the description for Card 3."
                    image="https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Cards title="Card 3"
                    description="This is the description for Card 3."
                    image="https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Cards title="Card 3"
                    description="This is the description for Card 3."
                    image="https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Cards title="Card 3"
                    description="This is the description for Card 3."
                    image="https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            


        </div>
    );
}
export default Services;