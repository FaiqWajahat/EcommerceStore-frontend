import React, { useState, useEffect } from "react";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [fetchData, setFetchData] = useState(false);
  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    setFetchData(true)
    try {
      const baseURL = "http://localhost:8080";
      const response = await fetch(`${baseURL}/admin/getOrders`, {
        method: "GET",
        headers: {
          "CONTENT-TYPE": "application/json",
        },
        body: JSON.stringify(),
      });

      const Result = await response.json();
      setAllOrders([...Result?.allOrders]);
    } catch (error) {
      console.log(error);
      handleError("Something went wrong");
    }finally{
      setFetchData(false)
    }
  };

  return (
    <div className="w-full bg-white p-4 rounded-xl shadow-md">
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px]">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="font-semibold px-3 py-2">ORDER ID</th>
              <th className="font-semibold px-3 py-2">USER</th>
              <th className="font-semibold px-3 py-2">TOTAL PRICE</th>
              <th className="font-semibold px-3 py-2">STATUS</th>
              <th className="font-semibold px-3 py-2 text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {fetchData ? (
              <tr>
                <td colSpan="5" className="py-6 text-center text-gray-500 text-sm italic">
                  fetching orders...
                </td>
              </tr>
            ) : allOrders.length !== 0 ? (
              allOrders.map((order) => (
                <OrderRow
                  key={order._id}
                  id={order._id}
                  user={order.email}
                  total={order.totalPrice}
                  status={order.status}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-6 text-center text-gray-500 text-sm italic">
                  No order found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
  
    
  );
};

const OrderRow = ({ id, user, total, status, setAllOrders, allOrders }) => {
  const [orderStatus, setOrderStatus] = useState(status);

  const updateOrder = async (orderId, orderStatus) => {
    try {
      const baseURL = "http://localhost:8080";
      const response = await fetch(`${baseURL}/admin/updateOrder`, {
        method: "PUT",
        headers: {
          "CONTENT-TYPE": "application/json",
        },
        body: JSON.stringify({ id: orderId, status: orderStatus }),
      });

      const result = await response.json();
      console.log(result);

      setAllOrders([...allOrders]);
    } catch (error) {
      console.log(error);
      handleError("Something went wrong");
    }
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-3 py-2 text-gray-800">#{id}</td>
      <td className="px-3 py-2 text-gray-600">{user}</td>
      <td className="px-3 py-2 text-gray-600">${total}</td>

      <td className="px-3 py-2">
        <div className="relative min-w-32 w-full text-sm">
          <select
            value={orderStatus}
            onChange={(e) => {
              setOrderStatus(e.target.value);
              updateOrder(id, e.target.value);
            }}
            className="w-full bg-white border text-gray-600 border-gray-300 px-3 py-2 text-sm pr-6 rounded-md focus:ring-0 outline-none appearance-none"
          >
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </td>

      <td className="flex justify-center items-center py-2">
        <button
          disabled={orderStatus === "delivered"}
          onClick={() => {
            setOrderStatus("delivered");
            updateOrder(id, "delivered");
          }}
          className={`bg-green-600 whitespace-nowrap hover:bg-green-700 px-4 py-2  rounded-md ${
            orderStatus === "delivered"
              ? "bg-green-700 text-gray-300"
              : "text-white"
          }`}
        >
          {orderStatus === "delivered" ? "Delivered" : "Mark as Delivered"}
        </button>
      </td>
    </tr>
  );
};

export default AllOrders;
