import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../Notify";
import { useContext } from "react";
import { CartContext } from "../Context/Cart";
import { jwtDecode } from "jwt-decode";
import { loadStripe } from "@stripe/stripe-js";

export default function CheckoutForm() {

  const cartState = useContext(CartContext);
  const checkoutItems = cartState.cart;
  const baseURL=cartState.baseUrl
  const setCart=cartState.setCart;
  const token = localStorage.getItem("userToken");
  const [email, setEmail] = useState("");
  const [loading , setLoading]=useState(false)
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  let total = () => {
    if (!checkoutItems || checkoutItems.length < 1) return 0;
  
    let result = checkoutItems.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);
  
    return Math.round(result * 100) / 100; // Round to 2 decimal places
  };
  

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        setEmail(decodedToken.email);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(shippingAddress);
  
    if (!token) {
      handleError("Please log in to continue!");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }
  
    if (checkoutItems.length === 0) {
      return handleError("Your cart is empty. Please add at least one item.");
    }
  
    if (
      !shippingAddress.firstName ||
      !shippingAddress.country ||
      !shippingAddress.city ||
      !shippingAddress.phone ||
      !shippingAddress.address
    ) {
      return handleError("Please fill in all required shipping details.");
    }
  
    try {
      setLoading(true);
  
      const stripe = await loadStripe("pk_test_51R69t62ML9Uo6lrtxgXbKk6e1PLTCJ8D0S7rKWgqNPCLbt2sPQi73P4nqAQlnMPMKSUkp9zlpKmyAtViNkA4mXTx00zAIydbAt");
     
    
      const response = await fetch(`${baseURL}/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          checkoutItems,
          shippingAddress,
          totalPrice:total()
        }),
      });

     
  
      const data = await response.json(); 
  
      if (data.success) {
        handleSuccess("Redirecting to Payment..");
        setCart([]);
        const session = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        
        });
  
        if (session.error) {
          console.error("Stripe error:", session.error.message);
          handleError("Something went wrong! Please try again.");

        }
       
      } else {
        handleError(data.message);
      }
    } catch (err) {
      console.error("Order submission error:", err);
      handleError("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };
    
    
  
  return (
    <>
      <div className="bg-white w-full py-4 px-2  lg:px-4 ">
        <h2 className="text-2xl text-black mb-6 uppercase font-bold">
          Checkout
        </h2>

        <form
          onSubmit={handleSubmit}
          className="text-sm tracking-tighter mt-4  w-full"
        >
          <section className="w-full ">
            <h3 className="font-semibold mb-2 text-base">Contact Details</h3>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              className="w-full border rounded-sm outline-none focus:outline-black p-2"
              type="email"
              id="email"
              value={email}
              disabled
            />
          </section>
          <section className="w-full mt-4">
            <h3 className="font-semibold mb-2 text-base ">Delivery</h3>
            <div className="w-full grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="firstName" className="block font-medium ">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="w-full border rounded-sm outline-none focus:outline-black p-2"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block font-medium ">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"

                  placeholder="Optional"
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="w-full border rounded-sm outline-none focus:outline-black p-2"
                />
              </div>
            </div>
            <div className="w-full mt-2">
              <label htmlFor="address" className="font-normal block">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-full border rounded-sm outline-none focus:outline-black p-2"
              />
            </div>
            <div className="w-full grid grid-cols-2 gap-2 mt-2">
              <div>
                <label htmlFor="city" className="block font-medium ">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="w-full border rounded-sm outline-none focus:outline-black p-2"
                />
              </div>

              <div>
                <label htmlFor="postalCode" className="block font-medium ">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                   placeholder="Optional"
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="w-full border rounded-sm outline-none focus:outline-black p-2"
                />
              </div>
            </div>

            <div className="w-full mt-2">
              <label htmlFor="country" className="font-normal block">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-full border rounded-sm outline-none focus:outline-black p-2"
              />
            </div>
            <div className="w-full mt-2">
              <label htmlFor="phone" className="font-normal block">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-full border rounded-sm outline-none focus:outline-black p-2"
              />
            </div>
          </section>
          <div className="w-full mt-4 ">
            <input
              type="submit"
              className={`w-full bg-black text-white font-semibold py-2 hover:opacity-70 tracking-normal cursor-pointer ${loading?"bg-opacity-70":""}`}
              value={loading?"Processing":"Continue to process"}
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </>
  );
}
;