
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Context/Cart';

const DashBoardOrders = () => {
const state=useContext(CartContext);
  const baseURL=state.baseUrl
 
const [recentOrders,setRecentOrders]=useState([])
const [fetchData,setFetchData]=useState(false)

useEffect(()=>{
  getOrders()
},[])
  const getOrders = async () => {
   setFetchData(true)
    try {
     
      const response = await fetch(`${baseURL}/admin/getRecentOrders`, {
        method: "GET",
        headers: {
          "CONTENT-TYPE": "application/json",
        },
        body: JSON.stringify(),
      });

      const Result = await response.json();
      setRecentOrders([...Result?.recentOrders]);
    } catch (error) {
      console.log(error);
      setRecentOrders([])
    } finally
    {
      setFetchData(false)
    }
  };
  return (
    <div className="w-full bg-white p-4 rounded-xl shadow-md overflow-x-auto">
      <h3 className=" text-xl font-semibold mb-4 text-gray-800">Recent Orders</h3>

      <table className="min-w-[600px] w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="font-semibold px-3 py-2">ORDER ID</th>
            <th className="font-semibold px-3 py-2">USER</th>
            <th className="font-semibold px-3 py-2">TOTAL PRICE</th>
            <th className="font-semibold px-3 py-2">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {fetchData?
           <tr>
           <td
             colSpan="4"
             className="py-6 text-center text-gray-500 text-sm italic"
           >
             fetching orders...
           </td>
         </tr>:
         recentOrders.length!=0?
          recentOrders.map((data, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="px-3 py-2 text-gray-800">#{data._id}</td>
              <td className="px-3 py-2 text-gray-600">{data.email}</td>
              <td className="px-3 py-2 text-gray-600">${data.totalPrice}</td>
              <td className="px-3 py-2">
              <span
  className={`inline-block px-3 py-1 text-xs rounded-full
    ${
      data.status === "delivered"
        ? "bg-green-100 text-green-700"
        : data.status === "processing"
        ? "bg-yellow-100 text-yellow-700"
        : data.status === "cancelled"
        ? "bg-red-100 text-red-700"
        : data.status === "shipped"
        ? "bg-blue-100 text-blue-700"
        : "bg-gray-100 text-gray-700"
    }`}
>
  {data.status}
</span>

              </td>
            </tr>
          )):
          <tr>
          <td
            colSpan="4"
            className="py-6 text-center text-gray-500 text-sm italic"
          >
            No order found
          </td>
        </tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default DashBoardOrders;
