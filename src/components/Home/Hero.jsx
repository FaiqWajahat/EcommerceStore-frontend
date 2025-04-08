import React from "react";
import heroImg from "../../assets/rabbit-hero.webp";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate =useNavigate();
  return (
    <>
      <section className="relative">
        <img
          src={heroImg}
          alt="Hero-image "
          className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover  -z-10"
        />
        <div className=" inset-0 flex flex-col gap-6 items-center justify-center bg-black  absolute bg-opacity-30 z-10  ">
          <h1 className="text-white text-center text-4xl md:text-9xl  font-bold uppercase">
            Vacation <br />
            Ready
          </h1>
          <p className="tracking-tighter text-white text-center">
            Explore our vacation-ready outfit with fast world wide Shipping{" "}
          </p>
          <button onClick={()=>{
            navigate('/collection/All');
            window.scrollTo(0,0)
          }}
           className="text-black bg-white px-4 py-2 border-white hover:bg-red-600 hover:text-white mt-4 transition-all">
            Shop Now
          </button>
        </div>
      </section>
    </>
  );
}
