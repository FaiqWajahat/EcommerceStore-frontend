import React from "react";
import { CartContext } from "../Context/Cart";
import { useContext, useEffect } from "react";
export default function OrderSummary() {
  let cartState = useContext(CartContext);
  let cart = cartState.cart;

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  let total = () => {
    if (cart.length < 1) {
      return 0;
    }
    let sumPrice = 0;
    let sumQuantity = 0;
    let result=0;

    cart.forEach((v) => {
      sumPrice = sumPrice + v.price;
    });

    cart.forEach((v) => {
      sumQuantity = sumQuantity + v.quantity;
    });

    result= sumPrice * sumQuantity;
    result= Math.round(result*100)/100
    return result;
  };

  return (
    <>
      <div className="bg-slate-50 w-full py-4 lg:px-4  ">
        <h3 className="text-black px-2 font-semibold pb-4 border-b">
          Order Summary
        </h3>
        <div className="flex flex-col justify-between">
          <div className="mt-4 h-[350px] overflow-y-auto px-2 ">
            {cart.length > 0 ? (
              cart.map((v, i) => {
                return (
                  <div key={i} className="grid grid-cols-3 border-b py-2">
                    <div className="flex space-x-4 col-span-2">
                      <img
                        src={v.image}
                        className="w-14 h-full object-cover rounded"
                        alt={v.alt}
                      />
                      <div className="flex flex-col justify-between">
                        <div>
                          <h5 className="text-sm font-semibold mb-1 overflow-hidden">
                            {v.name}
                          </h5>
                          <p className="text-sm text-gray-600">
                            Size: {v.size}
                          </p>
                          <p className="text-sm text-gray-600">
                            Color: {v.color}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <h3 className="font-normal">${v.quantity * v.price}</h3>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="mt-5 text-center">No Orders Yet</p>
            )}
          </div>

          <section className="flex flex-col gap-y-2 mt-6 tracking-tighter pb-4 border-b px-2">
            <div className="flex justify-between items-center ">
              <h5 className="text-black font-semibold">Subtotal</h5>
              <h5 className="text-black font-normal">${total()}</h5>
            </div>

            <div className="flex justify-between items-center">
              <h5 className="text-black font-semibold">Shipping</h5>
              <h5 className="text-black font-normal">FREE</h5>
            </div>
          </section>
          <div className="flex justify-between items-center py-4 px-2">
            <h5 className="text-black font-semibold">Total</h5>
            <h5 className="text-black font-normal">${total()}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
