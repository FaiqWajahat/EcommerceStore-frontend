import React from "react";
import { Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { MdWhatsapp } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer className="w-full  bg-slate-50 pt-8"> 
        <div className=" w-full py-8 px-4 md:px-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  justify-between gap-8">
          <div className=" w-full flex flex-col lg:items-start items-center">
            <h2 className="font-semibold text-2xl mb-4">Newsletter</h2>
            <p className="tracking-tight text-gray-500 text-base/tight my-2 text-center lg:text-start">
            Be the first to discover new products, exclusive events, and special online offers.
            </p>
            <span className="block text-black text-base mb-6">
              {" "}
              Sign up and get 10% of your first order
            </span>
            <form action="" className="w-full md:full flex">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full  px-4 py-3 outline-none border rounded-l-lg text-sm"
              />
              <input
                type="submit"
                value="Submit"
                className="bg-black text-white  px-4 rounded-r-lg text-sm  font-bold hover:bg-opacity-80 cursor-pointer "
              />
            </form>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 lg:col-span-2">
        
            <div className="w-full flex flex-col lg:items-start items-center text-center lg:text-start">
              <h3 className="font-semibold text-lg mb-4">Shop</h3>
              <ul className="space-y-1">
                <li>
                  <Link to={"#"}>Men's Top Wears</Link>
                </li>
                <li>
                  <Link to={"#"}>Men's Bottom Wears</Link>
                </li>
                <li>
                  <Link to={"#"}>Women's Top Wears</Link>
                </li>
                <li>
                  <Link to={"#"}>Women's Bottom Wears</Link>
                </li>
              </ul>
            </div>

            <div className="w-full flex flex-col lg:items-start items-center text-center lg:text-start">
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-1">
                <li>
                  <Link to={"#"}>Contact Us</Link>
                </li>
                <li>
                  <Link to={"#"}>About US</Link>
                </li>
                <li>
                  <Link to={"#"}>Faq's </Link>
                </li>
                <li>
                  <Link to={"#"}>Features</Link>
                </li>
              </ul>
            </div>

            <div className="w-full flex flex-col lg:items-start items-center  text-center lg:text-start">
              <h3 className="font-semibold text-lg mb-4 ">Follow us</h3>
              <div className=" flex gap-4">
                <Link to={"#"}>
                  <FiFacebook className="text-black h-5 w-5 hover:text-blue-600" />
                </Link>

                <Link to={"#"}>
                  <FaInstagram className="text-black h-5 w-5  hover:text-pink-500" />
                </Link>

                <Link to={"#"}>
                  <BsTwitterX className="text-black h-4 w-4 hover:text-black" />
                </Link>

                <Link to={"#"}>
                  <MdWhatsapp className="text-black h-5 w-5 hover:text-green-600" />
                </Link>
              </div>
              <h4 className="mt-4  text-gray-500 text-start inline-block">Call Us</h4>
              <p className="flex gap-1 items-center whitespace-nowrap overflow-hidden">
                <MdOutlinePhone />
                +92-314-6997979
              </p>
            </div>
            </div>
          
        </div>
        <div className="w-10/12 bg-gray-400 h-[0.5px] m-auto"></div>
        <p className="text-center my-4 text-sm -tracking-tight ">
          2025 <span>&#169;</span> All right reserved.
        </p>
      </footer>
    </>
  );
}
