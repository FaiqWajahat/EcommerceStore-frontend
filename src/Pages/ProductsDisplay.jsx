import React from "react";
import ProductInfo from "../components/Products/ProductInfo";
import SimilarProduct from "../components/Products/SimilarProduct";
import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductsDisplay() {
  let firstIndex = Math.floor(Math.random() * (products.length - 12 + 1)); 
  let lastIndex = firstIndex + 12; 
  
  let data = products.slice(firstIndex, lastIndex);
  let sku = useParams().sku;

  return (
    <>
      <main className="mt-16 mb-32">
        <ProductInfo sku={sku} />
        <div className=" px-6 md:px-16 lg:px-24 mt-16">
          <h2 className="text-bold font-bold text-2xl text-center mt-16 mb-12">
            You may like
          </h2>
          <SimilarProduct data={data} />
        </div>
      </main>
    </>
  );
}
