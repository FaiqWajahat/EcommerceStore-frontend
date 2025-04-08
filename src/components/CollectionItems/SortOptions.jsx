
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SortOptions() {
  const [searchParams, setSearchParams]=useSearchParams();
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    searchParams.set('sortBy',selectedOption);
    setSearchParams(searchParams);
    
  };
  
  return (
   <>
  

  <div className="relative w-fit">
  <select
    id="category"
    value={searchParams.get("sortBy")||""}
    onChange={handleChange}
    className="w-full bg-white border px-2 py-2 pr-4 outline-none rounded-md text-gray-700 appearance-none cursor-pointer"
  >
    <option value="">Default</option>
    <option value="priceAsc">Price: low to high</option>
    <option value="priceDesc">Price: high to low</option>
  </select>
  
  {/* Custom Dropdown Arrow */}
  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</div>

   </>
  )
}
