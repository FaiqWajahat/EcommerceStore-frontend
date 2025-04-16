import React, { useRef, useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BiUser } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { PiShoppingBagOpen } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { handlePromiss } from "../../Notify";

const AdminTopMenu = () => {
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if the click is outside the sidebar and not on the menu icon
      if (sidebarRef.current && !sidebarRef.current.contains(e.target) ){
        // Check if the click wasn't on the menu icon that opens the sidebar
        const menuIcon = document.querySelector('.menu-icon');
        if (!menuIcon || !menuIcon.contains(e.target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close sidebar when a link is clicked (for mobile)
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const {pathname}=useLocation()
  console.log(pathname)
  const navigate=useNavigate()
  const handleLogout = async () => {
    localStorage.removeItem("userToken");

    const loadMsg = "Logging Out";
    const sucessMsg = "Logged Out Sucessfully!";

    await handlePromiss(loadMsg, sucessMsg);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <>
      {/* Navbar */}
      <nav className="bg-slate-800 px-4 py-4 w-full text-white flex items-center gap-4 fixed top-0 left-0 z-50 shadow-md">
        <BiMenu 
          className="menu-icon size-8 cursor-pointer hover:text-slate-300 transition-colors" 
          onClick={handleOpen} 
        />
        <h1 className="text-2xl font-bold">E-commerce</h1>
      </nav>

      {/* Sidebar Backdrop (only visible when sidebar is open) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm md:hidden"
          onClick={handleOpen}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`w-72 h-full fixed top-0 left-0 bg-slate-800 text-white pt-20 px-4 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`} // Always visible on desktop
      >
        <div className="flex flex-col justify-between h-[calc(100%-2rem)]">
          <div className="flex flex-col gap-4">
            <Link
              onClick={handleLinkClick}
              to="/adminDashboard"
              className="flex items-center gap-3 p-2 rounded hover:bg-slate-700 transition-colors"
            >
              <RxDashboard className="text-lg" />
              <span>Admin Dashboard</span>
            </Link>
            <Link
              onClick={handleLinkClick}
              to="manageUsers"
              className="flex items-center gap-3 p-2 rounded hover:bg-slate-700 transition-colors"
            >
              <BiUser className="text-lg" />
              <span>Users</span>
            </Link>
            <Link
              onClick={handleLinkClick}
              to="manageProducts"
              className="flex items-center gap-3 p-2 rounded hover:bg-slate-700 transition-colors"
            >
              <CiViewList className="text-lg" />
              <span>Products</span>
            </Link>
            <Link
              onClick={handleLinkClick}
              to="orderManagment"
              className="flex items-center gap-3 p-2 rounded hover:bg-slate-700 transition-colors"
            >
              <PiShoppingBagOpen className="text-lg" />
              <span>Orders</span>
            </Link>
            <Link
              onClick={handleLinkClick}
              to="/"
              className="flex items-center gap-3 p-2 rounded hover:bg-slate-700 transition-colors"
            >
              <BsShop className="text-lg" />
              <span>Shop</span>
            </Link>
          </div>

          <button onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full p-2 mb-4 rounded bg-red-600 hover:bg-red-700 transition-colors"
          >
            <LuLogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 pl-4 md:pl-80 transition-all duration-300">
        {/* Your page content goes here */}
      </div>
    </>
  );
};

export default AdminTopMenu;