import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
// import image from "../assets/cons.jpg"
const Contact=()=>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ti545rg', 'template_fyqgezd', form.current, {
        publicKey: 'mLlDs01dae9N7lk9L',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          alert('Failed to send: ' + error.text);
          console.log('FAILED...', error.text);
        },
      );
  };
    const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    return(
        <div className=" flex flex-col justify-center items-center  p-4">
          <div className="w-full md:w-2xl  p-4">
            <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
            <p className="text-lg mb-4 font-medium">We would love to hear from you! Please reach us using the below form or  through the provided contact details.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full  ">
                <div id="form-section" className="m-4 rounded-lg shadow-lg w-full">
          <div className="m-2">
            <h1 className="font-bold text-4xl m-2"></h1>
            
          </div>

          {/* Notification Box
          {notification.message && (
            <div
              className={`p-4 mb-4 rounded ${
                notification.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {notification.message}
            </div>
          )} */}

          <form  className="w-full " onSubmit={sendEmail} ref={form}>
            <label htmlFor="comment">Comment:</label>
            <br />
            <textarea
              id="comment"
              name="comment"
              required
              className="w-full border border-gray-300 h-32 mb-3 rounded resize-none"
              
            ></textarea>
            <br />

            <label htmlFor="name">Name*</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              className="w-full h-10 mb-3 border-gray-300 border"
              
            />
            <br />

            <label htmlFor="user_email">Email*</label>
            <br />
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full h-10 mb-3 border-gray-300 border"
              
            />
            <br />

            
            <br />

            <input
              type="submit"
              className="bg-sky-700 text-white m-3 ml-0 rounded-3xl w-40 h-10 hover:bg-sky-400 transition active:scale-95 hover:cursor-pointer"
              value="Post Comment" onSubmit={scrollToForm}
            />
          </form>
        </div>
        
              <div className="flex w-11/12 justify-center items-center rounded  ">
                <div className="flex flex-col  ">
                  
                  <div className="flex flex-col gap-2 mt-4">
                    <ul className="flex flex-col justify-start items-start">
                      <li className="flex justify-center items-center gap-x-2 font-medium "><MdEmail /><b>Email:</b>  habyattradingplc@gmail.com</li>
                      <li className="flex justify-center items-center gap-x-2 font-medium"><FaPhone /><b>Phone:</b>  +251 94 019 0896 <br /> +251 91 164 9706</li>
                      
                      <li className="flex justify-center items-center gap-x-2 font-medium"><FaLocationDot/><b>Address:</b> Addis Ababa Around Wingete, Hewan Building</li>
                    </ul>
                    <hr />
                    <h2><b>Follow Us:</b></h2>
                    <div className="flex gap-4">
                      <a href="#" className="flex items-center rounded-full bg-white p-2 hover:shadow-stone-500 shadow-md active:scale-95 hover:scale-120 transition  text-xl text-blue-600"><FaFacebookF /></a>
                      <a href="#" className="flex items-center rounded-full bg-white p-2 hover:shadow-stone-500 shadow-md active:scale-95 hover:scale-120 transition  text-xl text-black"><RiTwitterXFill /></a>
                      <a href="#" className="flex items-center rounded-full bg-white p-2 hover:shadow-stone-500 shadow-md active:scale-95 hover:scale-120 transition  text-xl  text-pink-600"><FaInstagram /></a>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <img src={image} alt="contact image" />
                </div> */}
                
              </div>
          </div>
          
        </div>
    )
}

export default Contact;