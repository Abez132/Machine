import { FaArrowRight } from "react-icons/fa6";
const Contact=()=>{
    return(
        <div className="bg-white flex flex-wrap justify-center items-center rounded p-4">
          <div className="w-2xl">
            <form  className="w-full  ">
              <label htmlFor="comment">Contact:</label>
              <br />
              <textarea
                id="comment"
                name="comment"        
                className="w-full border border-gray-300 h-32 mb-3 rounded resize-none">
              </textarea>
              <br />

              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                className="w-full h-10 mb-3 border-gray-300 border"/>
              <br />

              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full h-10 mb-3 border-gray-300 border"/>
              <br />

              <input
                type="submit"
                className="bg-black text-white m-3 ml-0 rounded-3xl w-40 h-10 hover:bg-gray-900 hover:cursor-pointer"
                value="Post Comment"/>
            </form>
          </div>
          <div className="rounded w-xl shadow-lg mx-14 my-14 mr-0">
            <h3 className="text-left font-bold mt-3 mb-3 text-4xl">Direct Contact</h3>

            <div className="flex items-center rounded hover:bg-gray-300 hover:cursor-pointer transform hover:scale-110 transition duration-150 active:scale-100" >
              <FaArrowRight className="m-5" />
              <p className="m-3">Travel</p>
            </div>

            <hr className="opacity-15" />

            <div
              className="flex items-center rounded hover:bg-gray-300 hover:cursor-pointer transform hover:scale-110 transition duration-150 cursor-pointer active:scale-100"
              
            >
              <FaArrowRight className="m-5" />
              <p className="m-3">Tips</p>
            </div>

            <hr className="opacity-15" />
            <div
              className="flex items-center rounded hover:bg-gray-300 hover:cursor-pointer transform hover:scale-110 transition duration-150 active:scale-100"
              
            >
              <FaArrowRight className="m-5" />
              <p>Stories</p>
            </div>
            <hr className="opacity-15" />
            <div
              className="flex items-center rounded hover:bg-gray-300 hover:cursor-pointer transform hover:scale-110 transition duration-150 active:scale-100"
            
            >
              <FaArrowRight className="m-5" />
              <p>Destination</p>
            </div>
            <hr className="opacity-15" />
          </div>
        </div>
    )
}

export default Contact;