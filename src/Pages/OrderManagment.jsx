import React from "react";
import AllOrders from "../components/Admin/AllOrders";

const OrderManagment = () => {
  return (
    < >
      <div className="flex items-center gap-2 mb-6">
        <h2 className="font-bold text-2xl text-gray-800">Manage Orders</h2>
        <span className="h-1 w-8 bg-blue-500 rounded"></span>
      </div>
      
      <AllOrders />
        
    </>
  );
};

export default OrderManagment;
