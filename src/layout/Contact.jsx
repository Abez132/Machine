import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Burger from "./components/Burger";

import { MdEmail } from "react-icons/md";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
// import image from "../assets/cons.jpg"
const Contact = () => {
  const form = useRef();
  const [notification, setNotification] = useState({ message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ti545rg", "template_fyqgezd", form.current, {
        publicKey: "mLlDs01dae9N7lk9L",
      })
      .then(
        () => {
          setNotification({
            message: "Email sent successfully!",
            type: "success",
          });
          console.log("SUCCESS!");
        },
        (error) => {
          setNotification({ message: "Failed to send email.", type: "error" });
          console.log("FAILED...", error.text);
        },
      );
  };
  //   const scrollToForm = () => {
  //   const formSection = document.getElementById("form-section");
  //   if (formSection) {
  //     formSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className=" flex flex-col justify-center items-center  p-4">
      <Burger />
      <div className="w-full md:w-2xl  p-4 text-center">
        <div className="inline-block p-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
          <h1 className="text-5xl font-bold bg-gray-950 rounded-xl px-6 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
        </div>
        <p className="text-lg mb-4 font-medium text-amber-100 max-w-2xl mx-auto leading-relaxed">
          We would love to hear from you! Get in touch with us for any inquiries
          about our products and services. Our team is ready to assist you.
        </p>

        {/* Quick Contact Options */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-500/30">
            <FaWhatsapp className="text-green-400 text-xl" />
            <span className="text-green-300 font-medium">WhatsApp</span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-500/30">
            <FaPhone className="text-blue-400 text-lg" />
            <span className="text-blue-300 font-medium">Call Us</span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30">
            <MdEmail className="text-purple-400 text-xl" />
            <span className="text-purple-300 font-medium">Email</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full  ">
        <div
          id="form-section"
          className="m-4 rounded-3xl shadow-2xl w-full bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-2xl border border-gray-600/50 hover:border-cyan-500/30 transition-all duration-500"
        >
          <div className="m-2 p-4">
            <h2 className="font-bold text-3xl text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Send us a Message
            </h2>
            <p className="text-center text-gray-300 mb-6">
              Fill out the form below and we'll get back to you as soon as
              possible
            </p>
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
          {notification.message && (
            <div
              className={`p-4 mb-4 rounded ${
                notification.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {notification.message}
            </div>
          )}

          <form className="w-full p-6" onSubmit={sendEmail} ref={form}>
            <div className="mb-6">
              <label
                htmlFor="comment"
                className="block text-gray-300 font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="comment"
                name="comment"
                required
                placeholder="Tell us about your requirements..."
                className="w-full border-2 border-gray-600 bg-gray-800/50 text-white h-32 mb-3 rounded-xl resize-none p-4 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 backdrop-blur-sm"
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full h-12 border-2 border-gray-600 bg-gray-800/50 text-white rounded-xl px-4 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 backdrop-blur-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Enter your email address"
                  className="w-full h-12 border-2 border-gray-600 bg-gray-800/50 text-white rounded-xl px-4 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 backdrop-blur-sm"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-cyan-500/25 min-w-[200px]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="flex w-full justify-center items-center">
          <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-2xl border border-gray-600/50 hover:border-cyan-500/30 transition-all duration-500 rounded-3xl p-8 w-full max-w-md">
            <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Get in Touch
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-3 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <MdEmail className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white font-medium">
                    habyattradingplc@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <p className="text-white font-medium">+251 94 019 0896</p>
                  <p className="text-white font-medium">+251 91 164 9706</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <FaLocationDot className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white font-medium">
                    Addis Ababa Around Wingete, Hewan Building
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700/50">
              <h4 className="text-lg font-semibold text-center text-gray-300 mb-4">
                Follow Us
              </h4>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                  <FaFacebookF className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-gray-500/50"
                >
                  <RiTwitterXFill className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
                >
                  <FaInstagram className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
