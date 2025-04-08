import React from "react";
import Hero from "../components/Home/Hero";
import MainCategories from "../components/Home/MainCategories";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/BestSeller";
import SimilarProduct from "../components/Products/SimilarProduct";
import Branding from "../components/Home/Branding";
import FeatureServices from "../components/Home/FeatureServices";
import products from "../data/products";


export default function Home() {
  let firstIndex = Math.floor(Math.random() * (products.length - 12 + 1)); 
let lastIndex = firstIndex + 12; 

let data = products.slice(firstIndex, lastIndex);
  return (
    <>
      <main className="mb-32">
        <Hero />
        <MainCategories />
        <NewArrivals />
        <h2 className="text-bold font-bold text-2xl  text-center mt-32 mb-12">
          Best seller
        </h2>
        <ProductDetails />
        <div className=" px-6 md:px-16 lg:px-24 mt-16">
          <h2 className="text-bold font-bold text-2xl text-center mt-16 mb-12">
            You may like
          </h2>
          <SimilarProduct data={data} />
        </div>

        <Branding />
        <FeatureServices />
      </main>
    </>
  );
}
