import React, { useEffect } from "react";

import CheckoutForm from "../components/Orders/CheckoutForm";
import OrderSummary from "../components/Orders/OrderSummary";

export default function Chectout() {

  
  
  return (
    <section className="my-10 w-full px-4  lg:px-0 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-4/5 max-w-7xl  m-auto gap-8 ">
        {/* {Left side} */}
      <div className="order-2 lg:order-1">
      <  CheckoutForm/>
      </div>
        {/* {Right side} */}
       <div className="order-1 lg:order-2">
       <OrderSummary/>
       </div>
      </div>
    </section>
  );
}
