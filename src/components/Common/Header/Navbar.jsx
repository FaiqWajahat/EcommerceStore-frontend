import React, { useEffect } from "react";
import { Link, useLocation} from "react-router-dom";
import NavbarSearch from "./NavbarSearch";
import CartSlider from "./CartSlider";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import { FiUser, FiUserCheck } from "react-icons/fi";
import MobileCategoriesSlider from "./MobileCategoriesSlider";
import { jwtDecode } from "jwt-decode";


export default function Navbar() {
 
  const { pathname } = useLocation();

  console.log(pathname);
  let [menuOpen, setMenu] = useState(false);

  let handleMenu = () => {
    setMenu(!menuOpen);
  };
  useEffect(()=>{
    console.log(pathname)
    AuthenticateUser()
  },[pathname])

  const [tokenGet,setTokenGet]=useState(false)
  const [userRole,setUserRole]=useState("customer")
  const AuthenticateUser= ()=>{
          const token =  localStorage.getItem("userToken");
          if(token)
          {
            const decodedToken = jwtDecode(token);
          if(decodedToken)
          {
             setTokenGet(true)
             console.log(decodedToken)
             
             setUserRole(decodedToken.name)
             console.log(userRole)
          }
          
          }
          
  }
  

  
  return (
    <>
      <nav className="flex items-center justify-between py-2 px-4 ">
        <Link to={"/"}>
          <h1 className="text-xl md:text-2xl font-bold cursor-pointer tracking-tighter md:tracking-normal">E-commerce</h1>
        </Link>
        <div className="hidden md:flex space-x-4 text-center ">
          <Link
            to={"/"}
            className={` text-lg    hover:text-red-600  ${
              pathname === "/" ? "text-red-600" : ""
            }`}
          >
            Home
          </Link>
          <Link  className={` text-lg    hover:text-red-600  ${
              pathname === "/collection/Men" ? "text-red-600" : ""
            }`}
            to={`collection/Men`}
            
          >
            Men
          </Link>
          <Link
            to={"collection/Women"}
            className={` text-lg    hover:text-red-600  ${
              pathname === "/collection/Women" ? "text-red-600" : ""
            }`}
          >
            Women
          </Link>
          <Link
            to={"collection/All"}
            
            className={` text-lg    hover:text-red-600  ${
              pathname === "/collection/All" ? "text-red-600" : ""
            }`}
          >
            All Collection
          </Link>
        </div>

        <div className="flex space-x-3  md:space-x-4 items-center">
          <Link  to={'/adminDashboard'} className={`text-white bg-black text-xs text-center px-2 py-1 rounded-sm hover:bg-opacity-80 ${userRole==="Admin"?"block":"hidden"}` }>
          admin
          </Link>
          <Link to={"/login"}>
            {tokenGet ? (
              <FiUserCheck className="h-6 w-6 text-red-600" />
            ) : (
              <FiUser className="h-6 w-6 " />
            )}
          </Link>

          <Link to={"#"}>
            <CartSlider />
          </Link>

          <Link to={"#"}>
            <div className="  ">
              <NavbarSearch />
            </div>
          </Link>

          <div className=" block md:hidden">
            <RiMenu3Line onClick={handleMenu} className="h-6 w-6" />
            <MobileCategoriesSlider
              menuOpen={menuOpen}
              handleMenu={handleMenu}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
