import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { handleError } from "../Notify";

export default function OrderDetails() {
    const navigate=useNavigate();
  const { id } = useParams();  
  const orderId = id || ""; 
  console.log(orderId);

  const [orderDetails, setOrderDetails] = useState(null);  

  const fetchData = async () => {
    try {
      if (!orderId) {
        handleError("Order ID is missing", orderId);
        return;
      }

      const baseUrl = "https://backend-gik1.onrender.com"; 

      const response = await fetch(`${baseUrl}/orderDetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ID: orderId }),
      });

      if (!response.ok) {
        handleError(`HTTP error! Status: ${response.status}`);
        return;
      }

      const result = await response.json();
      console.log("Fetched Result:", result);

      if (result.success) {
        setOrderDetails(result.order);
      } else {
        handleError(result.message);
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [orderId]);

  useEffect(() => {
    console.log("Updated Order Details:", orderDetails);
  }, [orderDetails]);

  // Function to calculate estimated delivery (Replace with actual logic)
  const calculateEstimateDelivery = (date) => {
    if (!date) return "N/A";
    let deliveryDate = new Date(date);
    deliveryDate.setDate(deliveryDate.getDate() + 10); // Assuming 7 days delivery time
    return deliveryDate.toLocaleDateString();
  };

  // If orderDetails is null, show a loading message
  if (!orderDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading order details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8 uppercase">
        Your Order Details!
      </h1>
      <div className="p-6 rounded-lg border shadow-md">
        <h2 className="text-xl font-semibold tracking-tight my-4">
          ORDER ID: {orderDetails._id}
        </h2>
        <div className="flex justify-between mb-8 pb-6 border-b">
          {/* Order Date */}
          <div>
            <p className="text-gray-500">
              Order Date:{" "}
              {orderDetails.createdAt
                ? new Date(orderDetails.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
          {/* Estimated Delivery */}
          <div>
            <p className="text-emerald-700 text-sm">
              Estimated Delivery: {calculateEstimateDelivery(orderDetails.createdAt)}
            </p>
          </div>
        </div>
        {/* Ordered Items */}
        <div className="mb-8 pb-6 border-b">
          {orderDetails.checkoutItems?.length > 0 ? (
            orderDetails.checkoutItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">${item.price}</p>
                  <p className="text-sm text-gray-500">QTY: {item.quantity}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items found in this order.</p>
          )}
        </div>
        {/* Payment and Delivery Info */}
        <div className="grid grid-cols-2 justify-between pb-6 mb-8 border-b">
          {/* Payment Info */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Payment</h4>
            <p className="text-gray-600">Debit/Credit card</p>
          </div>
          {/* Delivery Info */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Delivery</h4>
            <p className="text-gray-600">{orderDetails.shippingAddress?.address}</p>
            <p className="text-gray-600">
              {orderDetails.shippingAddress?.city},{" "}
              {orderDetails.shippingAddress?.country}
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-between">
          <button
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            onClick={() =>navigate("/profile")}
          >
            Go to Profile
          </button>
          <button
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            onClick={() => navigate('/') }
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
