import React, { useContext } from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiSearch2Line } from "react-icons/ri";
import { CartContext } from "../../Context/Cart";
import { useNavigate } from "react-router-dom";


export default function NavbarSearch() {
  const redirect =useNavigate()
  let [isOpen, setIsOpen] = useState(false);
  let [inputValue, setInputvalue] = useState("");
  let searchState=useContext(CartContext);
  let setSearch=searchState.setSearch

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue)
    setIsOpen(false);
    setSearch(inputValue);
    redirect("/search")
    window.scrollTo(0,0);
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed top-0 z-50 right-0 bg-white w-full p-6 shadow-md  ">
          <div className="flex w-full h-auto justify-end mb-4 ">
            <span onClick={() => setIsOpen(!isOpen)}>
              <RxCross2 className="h-6 w-6" />
            </span>
          </div>
          <div className="w-full  h-1/2 m-auto ">
            <form
               id="search-form"
              onSubmitCapture={(e) => handleSubmit(e)}
              className="flex  w-full md:w-10/12 m-auto"
            >
              <input
                className="px-4 py-3 w-full bg-slate-50 rounded-l-lg border text-black outline-none "
                onChange={(e) => setInputvalue(e.target.value)}
                value={inputValue}
                type="text "
                id="search"
                name="search"
                placeholder="Search here..."
              />

              <input
                className="bg-blue-500 px-4 md:px-8  text-white rounded-r-lg cursor-pointer font-semibold hover:bg-opacity-80"
                type="submit"
                onClick={(e) => handleSubmit(e)}
                id="submit"
                name="submit"
                value={"Search"}
              />
            </form>
          </div>
        </div>
      ) : (
        <RiSearch2Line onClick={() => setIsOpen(true)} className="h-6 w-6" />
      )}
    </>
  );
}
