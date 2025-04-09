import React from "react";
import mensCollection from "../../assets/mens-collection.jpg";
import womensCollection from "../../assets/womens-collection.webp";
import { useNavigate } from "react-router-dom";

export default function MainCategories() {
  const redirect=useNavigate()
  return (
    <>
      <section className="grid grid-cols-1  md:grid-cols-2 justify-between w-full  mt-5 px-4 md:px-16 lg:px-24 gap-5">
        <div className="w-full relative overflow-hidden"
        onClick={()=>{redirect("collection/Women"); window.scrollTo(0,0)}}>
          <img
            src={womensCollection}
            alt="MensCategoryimg"
            className="w-full h-[300px] md:h-[400px] lg:h-[500px]  object-cover"
          />
          <div
            className="absolute bottom-5  md:w-auto left-2 bg-white bg-opacity-70  px-4 py-2  md:py-4 md:px-8 flex flex-col justify-center hover:bg-opacity-100 hover:cursor-pointer transition-colors 
             items-start gap-y-2"
          >
            <h2 className="text-bold font-bold md:text-xl tracking-tighter text-base ">
              Women's Collection
            </h2>
            <button  className="bg-none font-bold underline text-sm">
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-full h-auto  relative overflow-hidden"
        onClick={()=>{redirect("collection/Men"); window.scrollTo(0,0)}}>
          <img
            src={mensCollection}
            alt="MensCategoryimg"
            className="w-full h-[300px] md:h-[400px] lg:h-[500px]  object-cover"
          />
          <div
            className="absolute bottom-5 left-2 md:w-auto bg-white bg-opacity-70 px-5 py-2 md:py-4 md:px-8    flex flex-col justify-center hover:bg-opacity-100 hover:cursor-pointer transition-colors
             items-start gap-y-2"
          >
            <h2 className="text-bold font-bold md:text-xl text-base ">
              Men's Collection
            </h2>
            <button  className="bg-none font-bold underline text-sm">
              Shop Now{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
