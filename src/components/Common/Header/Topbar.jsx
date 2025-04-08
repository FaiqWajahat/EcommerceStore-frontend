import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { MdWhatsapp } from "react-icons/md";

export default function Topbar() {
  return (
    <div className="w-full py-1 px-4  bg-red-600 flex items-center justify-around">
      <div className=" hidden md:flex gap-4">
        <Link to={"#"}>
          <FiFacebook className="text-white h-5 w-5 hover:text-blue-600" />
        </Link>

        <Link to={"#"}>
          <FaInstagram className="text-white h-5 w-5  hover:text-pink-500" />
        </Link>

        <Link to={"#"}>
          <BsTwitterX className="text-white h-4 w-4 hover:text-black" />
        </Link>

        <Link to={"#"}>
          <MdWhatsapp className="text-white h-5 w-5 hover:text-green-600" />
        </Link>
      </div>

      <div className="text-white font-light  text-center flex-grow   md:translate-x-5">
        <span className=" text-base tracking-tighter ">
          We ship world wide <span>&#8212;</span> Fast & Relaible
        </span>
      </div>

      <div className="hidden md:block text-white font-light">
        <span className="text-base tracking-tighter">+92314-6997979</span>
      </div>
    </div>
  );
}
