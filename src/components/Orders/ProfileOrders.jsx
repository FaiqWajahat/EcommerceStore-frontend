import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileOrders({ userEmail }) {
  const [myOrders, setMyOrders] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      if (!userEmail) {
        console.error("Email is missing", userEmail);
        return;
      }
      const  baseURL= "https://backend-gik1.onrender.com"

      const response = await fetch(`${baseURL}/myOrders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ Correct casing
        },
        body: JSON.stringify({ email: userEmail }), // ✅ Ensure email is an object
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setMyOrders(result?.myOrders || []); // ✅ Safe handling of missing data
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userEmail]);

  const totalPrice = (cart) => {
    if (cart.length < 1) {
      return 0;
    }
    let sumPrice = 0;
    let sumQuantity = 0;
    let result = 0;

    cart.forEach((v) => {
      sumPrice = sumPrice + v.price;
    });

    cart.forEach((v) => {
      sumQuantity = sumQuantity + v.quantity;
    });

    result = sumPrice * sumQuantity;
    result = Math.round(result * 100) / 100;
    return result;
  };

  return (
    <>
      <div className="w-full   pt-6  ">
        <h2 className="text-black  font-bold text-xl mb-4 text-center">
          My Orders
        </h2>

        <table className="shadow-md rounded-md w-full text-sm tracking-tighter border-collapse block md:inline-table overflow-x-auto">
          <thead>
            <tr className="bg-slate-100 text-left px-4 py-2 rounded-t-md">
              <th className="uppercase font-semibold p-2">Order Id</th>
              <th className="uppercase font-semibold p-2">Created</th>
              <th className="uppercase font-semibold p-2">Shipping Address</th>
              <th className="uppercase font-semibold p-2">Items</th>
              <th className="uppercase font-semibold p-2">Price</th>
              <th className="uppercase font-semibold p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.length > 0 ? (
              myOrders.map((v, i) => {
                return (
                  <tr
                    onClick={() => navigate(`/orderDetails/${v._id}`)}
                    key={i}
                    className="border-t mb-1 cursor-pointer"
                  >
                    <td className="px-2 py-4 tracking-tighter">#{v._id}</td>
                    <td className="px-2 py-4">
                      {format(new Date(v.createdAt), "dd MMM yyyy, hh:mm a")}
                    </td>
                    <td className="px-2 py-4">
                      {v.shippingAddress.city}, {v.shippingAddress.country}
                    </td>
                    <td className="px-2 py-4">{v.checkoutItems.length}</td>
                    <td className="px-2 py-4">
                      ${totalPrice(v.checkoutItems)}
                    </td>
                    <td className="">
                      <span className="bg-green-200 px-4 py-2 rounded-full">
                        Paid
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-10">
                  <div className="flex flex-col items-center justify-center">
                    {/* Icon */}
                    <svg
                      className="w-16 h-16 text-gray-400 mb-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 6.75A3.75 3.75 0 015.75 3h12.5A3.75 3.75 0 0122 6.75v10.5A3.75 3.75 0 0118.25 21H5.75A3.75 3.75 0 012 17.25V6.75zM5.75 4.5A2.25 2.25 0 003.5 6.75v10.5A2.25 2.25 0 005.75 19.5h12.5A2.25 2.25 0 0020.5 17.25V6.75A2.25 2.25 0 0018.25 4.5H5.75zM7 9a.75.75 0 01.75-.75h8.5a.75.75 0 110 1.5h-8.5A.75.75 0 017 9zm0 3.75a.75.75 0 01.75-.75h8.5a.75.75 0 110 1.5h-8.5A.75.75 0 017 12.75zm0 3.75a.75.75 0 01.75-.75h5a.75.75 0 110 1.5h-5A.75.75 0 017 16.5z"
                        clipRule="evenodd"
                      />
                    </svg>

                    {/* Message */}
                    <p className="text-lg font-semibold text-gray-600">
                      No orders found
                    </p>
                    <p className="text-gray-500">
                      You haven't placed any orders yet.
                    </p>

                    {/* Button to Continue Shopping */}
                    <button
                      onClick={() => navigate("/")}
                      className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
