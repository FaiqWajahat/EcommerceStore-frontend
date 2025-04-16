import React from "react";
import DashBoardOrders from "../components/Admin/DashBoardOrders";
import DashBoardStats from "../components/Admin/DashBoardStats";
function AdminDashboard() {
  return (
    <>
    <div className="flex items-center gap-2 mb-6">
      <h2 className="font-bold text-2xl text-gray-800">Admin Dashboard</h2>
      <span className="h-1 w-8 bg-blue-500 rounded"></span>
    </div>
  
    
      <div className="w-full">
        <DashBoardStats />
      </div>
      <div className="mt-10 ">
        <DashBoardOrders />
      </div>
   
  </>
  
  );
}

export default AdminDashboard;
