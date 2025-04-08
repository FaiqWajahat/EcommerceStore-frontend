import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

export default function MobileCategoriesSlider({ menuOpen, handleMenu }) {
  const {pathname}=useLocation();
  return (
    <>
      <div
        className={`fixed  inset-0 w-3/5 h-full bg-white z-50 transform transition-transform px-3 py-4 delay-300
          ${
          menuOpen ? "-translate-x-0 " : "-translate-x-full "
        }  `}
      >
        <div className="w-full h-auto flex justify-end">
          <RxCross2 className="h-6 w-6" onClick={handleMenu} />
        </div>
        <div>
          <h2 className="my-4 text-xl text-black font-bold">
            Categories
          </h2>
        </div>

        <div className="flex flex-col space-y-3 ">
          <Link onClick={handleMenu}  to={"/"} className={ ` text-lg    hover:text-red-600  ${pathname==="/"?"text-red-600":""}`  }>
                      Home
                    </Link>
                    <Link onClick={handleMenu} to={`/collection/Men`} className="text-lg  hover:text-red-600 focus:text-red-500">
                      Men
                    </Link>
                    <Link onClick={handleMenu} to={"/collection/Women"} className="text-lg   hover:text-red-600 focus:text-red-500">
                      Women
                    </Link>
                    <Link onClick={handleMenu} to={"/collection/All"} className="text-lg   hover:text-red-600 focus:text-red-500">
                     All Collection
                    </Link>
        </div>
      </div>
    </>
  );
}
