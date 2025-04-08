import React from "react";

import { useEffect, useState, useRef, useContext } from "react";

import SimilarProduct from "../components/Products/SimilarProduct";

import Pagination from "../components/Products/Pagination";
import products from "../data/products";
;
import { CartContext } from "../components/Context/Cart";

export default function Search() {
  const searchState = useContext(CartContext);
  const search = searchState.search;

  const searchedProduct=products.filter((v)=>v.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 12;

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;

  // ✅ Reset current page when filters change

  const paginatedData = searchedProduct.slice(firstIndex, lastIndex);

  useEffect(() => {
    console.log(
      "First Index:",
      firstIndex,
      "Last Index:",
      lastIndex,
      paginatedData
    );
  }, [currentPage, paginatedData]);

  return (
    <>
      <main className="mb-20 mt-16 px-6 md:px-16">
        {/* Mobile Filter Button */}

    
          {/* Sidebar for Filters */}

          {/* Product Listing Section */}
         
            <h2 className="my-6 block text-2xl ml-2 font-bold text-center lg:text-left">
              Search For " {search}"
            </h2>

            <SimilarProduct data={paginatedData} />
         
        

        {/* Pagination Component */}
        <Pagination
          postPerPage={postPerPage}
          totalData={searchedProduct.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </main>
    </>
  );
}
