import React from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom"
import { RxDashboard } from "react-icons/rx";
import { BiUser } from 'react-icons/bi';
import { BsShop } from "react-icons/bs";
import { PiShoppingBagOpen } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";
import { LuLogOut } from 'react-icons/lu';
import { handlePromiss } from '../../Notify';
export const AdminSideMenu = () => {
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
    <div className=' flex flex-col justify-between min-h-screen h-full z-50 bg-slate-800 text-white pt-6  '>
      <div className='px-4'>
      <div className='mb-6'>
  <h1 className='font-medium text-2xl text-white'>E-commerce</h1>
  <div className='w-20 h-0.5 bg-blue-500 mt-2'></div>
</div>
  
  <div className='flex flex-col justify-center items-start gap-3 text-normal'>
<Link to={"/adminDashboard"} className={ `text-slate-300 hover:text-slate-400 ${pathname==="/adminDashboard"?"text-slate-400":""} `}>
<RxDashboard  className='inline-block'/> Admin Dashboard
</Link>
<Link to={"manageUsers"} className={ ` hover:text-slate-400 ${pathname==="/adminDashboard/manageUsers"?"text-slate-400":"text-slate-300"} `}>
<BiUser  className='inline-block'/> Users
</Link>
<Link to={"orderManagment"} className={ ` hover:text-slate-400 ${pathname==="/adminDashboard/orderManagment"?"text-slate-400":"text-slate-300"} `}>
<PiShoppingBagOpen  className='inline-block'/> Orders
</Link>
<Link to={"manageProducts"} className={ ` hover:text-slate-400 ${pathname==="/adminDashboard/manageProducts"?"text-slate-400":"text-slate-300"} `}>
<CiViewList className='inline-block'/> Products
</Link>
<Link to={"/"} className='text-slate-300 hover:text-slate-400 flex items-center gap-2'>
<BsShop  className=''/> Shop
</Link>
<button  onClick={handleLogout}
className='bg-red-600 hover:bg-red-700 text-white px-4 w-full py-2 rounded-md mt-6'>
   <div className='flex items-center justify-center gap-2'>
<LuLogOut/>
Logout
   </div>
</button>

  </div>
  </div>
  <div className='py-5 px-4 mb-6'>
  <h2 className='text-center text-lg tracking-wider font-medium text-gray-100'>
    Admin Panel
  </h2>
  <div className='mt-2 mx-auto w-12 h-[1px] bg-gray-500'></div>
</div>
    </div>
  )
}
