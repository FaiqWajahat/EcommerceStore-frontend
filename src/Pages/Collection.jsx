import React from "react";
import { FaFilter } from "react-icons/fa6";
import { useEffect, useState, useRef } from "react";
import FilterItems from "../components/CollectionItems/FilterItems";
import SimilarProduct from "../components/Products/SimilarProduct";
import SortOptions from "../components/CollectionItems/SortOptions";
import Pagination from "../components/Products/Pagination";
import products from "../data/products";
import { useParams, useSearchParams } from "react-router-dom";


export default function Collection() {
  const {gender}=useParams()
  const [heading,setHeading]=useState();
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState(Object.fromEntries([...searchParams]));
  
  // ✅ Update filters when searchParams change
  useEffect(() => {
    setFilters(Object.fromEntries([...searchParams]));
  }, [searchParams]);

 
 
  
  // ✅ Ensure 'products' exists before filtering
  const filteredProducts = (products ?? []).filter((product) => {
    const selectedCategory = filters.category || null;
    const selectedWear = filters.wear || null;
    const selectedSizes = filters.size ? filters.size.split(",") : [];
    const selectedColor = filters.color || null;
    const selectedPrice = filters.price ? Number(filters.price) : 50;
    const selectedBrands = filters.brand ? filters.brand.split(",") : [];
    const selectedMaterials = filters.material ? filters.material.split(",") : [];
  
    // 🛠️ Fix: Category Filter
    if (selectedCategory && product.gender !== selectedCategory) return false;
    
    // 🛠️ Fix: Wear Filter
    if (selectedWear && product.category !== selectedWear) return false;
    
    // 🛠️ Fix: Size Filter
    if (selectedSizes.length > 0 && !selectedSizes.some(size => product.sizes.includes(size))) return false;
  
    // 🛠️ Fix: Color Filter
    if (selectedColor && !product.colors.includes(selectedColor)) return false;
  
    // 🛠️ Fix: Brand Filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
  
    // 🛠️ Fix: Material Filter
    if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) return false;
  
    // 🛠️ Fix: Price Filter
    if (selectedPrice !== 50 && product.discountPrice > selectedPrice) return false;
  
    return true;
  });
  
  // ✅ Sorting Implementation
  if (filters.sortBy) {
    filteredProducts.sort((a, b) => {
      if (filters.sortBy === "priceAsc") {
        return a.discountPrice - b.discountPrice;
      } 
      if (filters.sortBy === "priceDesc") {
        return b.discountPrice - a.discountPrice;
      }
      return 0;
    });
  }



  // ✅ Sidebar State & Click Outside Handling
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  

  const [currentPage, setCurrentPage] = useState(1);
const postPerPage = 12;

const lastIndex = currentPage * postPerPage;
const firstIndex = lastIndex - postPerPage;

// ✅ Reset current page when filters change



const paginatedData = filteredProducts.slice(firstIndex, lastIndex);

useEffect(() => {
  console.log("First Index:", firstIndex, "Last Index:", lastIndex, paginatedData);
  
}, [currentPage, filteredProducts,paginatedData]);


  return (
    <>
      <main className="mb-32 mt-6">
        {/* Mobile Filter Button */}
       

        <div className="flex gap-4">
          {/* Sidebar for Filters */}
          <div ref={sidebarRef} className={`${isOpen ? "translate-x-0" : "-translate-x-full"} fixed bg-white inset-0 left-0 z-10 lg:z-0 overflow-y-auto lg:static lg:translate-x-0 transition-transform duration-300 w-64 h-auto lg:max-h-fit`}>
            <FilterItems />
          </div>

          {/* Product Listing Section */}
          <div className="px-6 lg:px-4 w-full">
            <h2 className="my-6 block text-2xl ml-2 font-bold text-center lg:text-left">{gender} Collection</h2>
            <div className="w-full flex justify-between lg:justify-end items-center mb-4">

            <div className=" lg:hidden flex justify-between items-center border px-6 py-2 rounded-md">
            <FaFilter className="mr-2 h-4 w-4" />
          <button onClick={toggleSidebar} className=" ">
           Filter
          </button>
         
        </div>
              <SortOptions /></div>
            <SimilarProduct data={paginatedData} />
          </div>
        </div>

        {/* Pagination Component */}
        <Pagination 
          postPerPage={postPerPage}
          totalData={filteredProducts.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </main>
    </>
  );
}