import React from "react";

import { handlePromiss } from "../../Notify";
import { useNavigate } from "react-router-dom";
import { BiSolidUserAccount, BiSolidUserCircle, BiUser, BiUserPlus } from "react-icons/bi";
import { FaUsb, FaUser } from "react-icons/fa6";

export default function Logout({ name, email }) {
  const navigate = useNavigate();

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
    <div className="w-full flex items-center justify-between
     p-4 ">
    {/* User Info */}
    <div className="flex items-center space-x-3">
      <FaUser className="h-8 w-8 text-red-700" />
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-600">{email}</p>
      </div>
    </div>
  
    {/* Logout Button */}
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 transition duration-300 px-5 py-2 text-white rounded-md shadow-md"
    >
      Logout
    </button>
  </div>
  
  );
}
