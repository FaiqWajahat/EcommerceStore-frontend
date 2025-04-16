import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { handleError } from "../Notify";
import { FaArrowLeft, FaShoppingBag, FaHome, FaUser, FaBox, FaCreditCard, FaTruck } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { BsCalendarDate } from "react-icons/bs";

export default function OrderDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const orderId = id || "";
  
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
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
      
      if (result.success) {
        setOrderDetails(result.order);
      } else {
        handleError(result.message);
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
      handleError("Failed to load order details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [orderId]);

  const calculateEstimateDelivery = (date) => {
    if (!date) return "N/A";
    let deliveryDate = new Date(date);
    deliveryDate.setDate(deliveryDate.getDate() + 10);
    return deliveryDate.toLocaleDateString();
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="flex flex-col justify-center items-center h-screen p-4 text-center">
        <FiPackage className="text-5xl text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Order Not Found</h2>
        <p className="text-gray-500 mb-6">We couldn't find details for this order.</p>
        <button
          onClick={() => navigate('/profile')}
          className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition flex items-center gap-2"
        >
          <FaArrowLeft /> Back to Profile
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 min-h-screen">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-6 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Order Details</h1>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <FaShoppingBag />
                <span>Order ID: {orderDetails._id}</span>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <BsCalendarDate />
                <span>
                  Ordered: {new Date(orderDetails.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Order Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Delivery Estimate */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                  <FaTruck className="text-lg" />
                </div>
                <h3 className="font-medium">Delivery Estimate</h3>
              </div>
              <p className="text-emerald-600 font-medium">
                {calculateEstimateDelivery(orderDetails.createdAt)}
              </p>
            </div>

            {/* Shipping Address */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <FaBox className="text-lg" />
                </div>
                <h3 className="font-medium">Shipping Address</h3>
              </div>
              <p className="text-gray-700">
                {orderDetails.shippingAddress?.address}
              </p>
              <p className="text-gray-700">
                {orderDetails.shippingAddress?.city},{" "}
                {orderDetails.shippingAddress?.country}
              </p>
            </div>

            {/* Payment & Status */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                  <FaCreditCard className="text-lg" />
                </div>
                <h3 className="font-medium">Payment & Status</h3>
              </div>
              <p className="text-gray-700 mb-1">Debit/Credit Card</p>
              <span className={`text-sm px-2 py-1 rounded-full ${getStatusColor(orderDetails.status)}`}>
                {orderDetails.status}
              </span>
            </div>
          </div>

          {/* Ordered Items */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b">Ordered Items</h3>
            <div className="space-y-4">
              {orderDetails.checkoutItems?.length > 0 ? (
                orderDetails.checkoutItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-contain bg-white rounded-md border"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500 mb-2">
                        {item.color} | {item.size}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="font-medium">${item.price}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No items found in this order.
                </div>
              )}
            </div>
          </div>

          {/* Order Total */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">
                  ${orderDetails.totalPrice || "0.00"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between border-t pt-3">
                <span className="text-gray-600">Total</span>
                <span className="font-bold text-lg text-emerald-600">
                  ${orderDetails.totalPrice || "0.00"}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
            <button
              onClick={() => navigate('/profile')}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition flex items-center justify-center gap-2"
            >
              <FaUser /> View Profile
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition flex items-center justify-center gap-2"
            >
              <FaHome /> Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

