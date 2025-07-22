import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const Contact=()=>{
    return(
        <div className="bg-white flex flex-wrap justify-center items-center  p-4">
          <div className="w-2xl shadow-lg p-4">
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
          <div className="rounded w-xl p-4 shadow-lg mx-14 my-14 mr-0">
            <h3 className="text-left font-bold  m-3 text-4xl">Direct Contact</h3>

            <div className="flex items-center rounded hover:bg-gray-300 hover:cursor-pointer  transition duration-150 active:scale-95" >
              <MdEmail className="m-5 text-xl" />
              <p className="m-3">habyattradingplc@gmail.com</p>
            </div>

            

            <div
              className="flex items-center rounded hover:bg-gray-300   transition duration-150 active:scale-95"
              
            >
              <FaPhone className="m-5 text-xl" />
              <p className="m-3">+251 912 397 422</p>
            </div>

            
            <div
              className="flex items-center rounded hover:bg-gray-300   transition duration-150  active:scale-95"
              
            >
              <FaPhone className="m-5 text-xl" />
              <p className="m-3">+251 940 190 896</p>
            </div>
            
            <div
              className="flex items-center rounded hover:bg-gray-300   transition duration-150 active:scale-95"
            
            >
              <FaPhone className="m-5 text-xl" />
              <p className="m-3">+251 911 649 706</p>
            </div>
            
          </div>
        </div>
    )
}

export default Contact;