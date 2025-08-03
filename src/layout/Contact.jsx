import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
// import image from "../assets/cons.jpg"
const Contact=()=>{
    return(
        <div className=" flex flex-col text-gray-900 justify-center items-center  p-4">
          <div className="w-full md:w-2xl  p-4">
            <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
            <p className="text-lg text-gray-950 mb-4 font-medium">We would love to hear from you! Please reach us through the provided contact details.</p>
          </div>
          <div className="flex w-11/12 justify-center gap-4  items-center rounded p-4  m-14">
            <div className="flex flex-col  p-4">
              <h1 className="text-3xl font-extrabold justify-center flex m-2 items-center">Get In Touch</h1>
              <p className="font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, alias laborum rem deleniti distinctio voluptates amet tempore eveniet fuga? Minima numquam dolorem suscipit laudantium voluptatibus repudiandae ut dolor quas adipisci!</p>
              <div className="flex flex-col gap-2 mt-4">
                <ul>
                  <li className="flex justify-center items-center gap-x-2 font-medium"><MdEmail /><b>Email:</b>  info@habayat.com</li>
                  <li className="flex justify-center items-center gap-x-2 font-medium"><FaPhone /><b>Phone:</b>  +251 911 123 456</li>
                  <li className="flex justify-center items-center gap-x-2 font-medium"><b>Address:</b> Addis Ababa, Ethiopia</li>
                </ul>
                <hr />
                <h2><b>Follow Us:</b></h2>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center rounded-full bg-white p-2  hover:scale-120 transition  text-xl text-blue-600"><FaFacebookF /></a>
                  <a href="#" className="flex items-center rounded-full bg-white p-2  hover:scale-120 transition  text-xl"><RiTwitterXFill /></a>
                  <a href="#" className="flex items-center rounded-full bg-white p-2  hover:scale-120 transition  text-xl  text-pink-600"><FaInstagram /></a>
                </div>
              </div>
            </div>
            {/* <div>
              <img src={image} alt="contact image" />
            </div> */}
            
          </div>
        </div>
    )
}

export default Contact;