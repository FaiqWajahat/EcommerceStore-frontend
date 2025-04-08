import React from "react";
import image from "../../assets/featured.webp";
import { useNavigate } from "react-router-dom";

export default function Branding() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-32 px-4 grid-cols-1 grid md:grid-cols-2 gap-0">
        {/* left side */}
        <div className="flex flex-col order-2  md:order-1 justify-center md:text-start text-center md:items-start px-6 lg:px-10 gap-2 h-[400px]  items-center md:h-full bg-green-100">
          <span className="font-semibold">Comfort and Style</span>
          <h2 className="font-bold text-3xl text-black  tracking-wide hidden lg:block">
            Apparel made for your <br /> every day life
          </h2>
          <h2 className="font-bold text-2xl text-black    block lg:hidden">
            Apparel made for your every day life
          </h2>
          <p className="text-sm tracking-tighter">
            Discover high quality, comfortable clothing that effortlessly blends
            fashion and function. Design to make you look and feel great
            everyday.
          </p>
          <button
            onClick={() => {
              navigate("/collection/All");
              window.scrollTo(0, 0);
            }}
            className="bg-black border-2 border-black text-white transition-all rounded-lg font-bold px-6 py-2 hover:bg-white hover:text-black hover:cursor-pointer"
          >
            Shop Now
          </button>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={image}
            alt=""
            className="w-full h-[400px] md:h-[500px] object-cover "
          />
        </div>
      </div>
    </>
  );
}
