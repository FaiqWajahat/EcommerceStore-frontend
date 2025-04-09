import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { handleError } from "../../../Notify";

export default function CartSlider() {

    const token =localStorage.getItem("userToken")
  
    useEffect(()=>{
      console.log(token)
    },[token])
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSlider = () => {
    setIsOpen(!isOpen);
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleClick = () => {
    setIsOpen(false);
    if(token)
    {
      navigate("/checkout");
      window.scrollTo(0, 0);
    }
    else
    {
      handleError("Login to checkout")
      navigate("/login")
    }
   
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed right-0 transition-transform duration-1000 z-50 shadow-lg w-[100%] md:w-[70%] lg:w-[40%] h-screen top-0 bottom-0 translate-x-0 bg-white  flex flex-col justify-between py-2 px-2">
          <div className="h-[80%] overflow-y-auto">
            <div className="flex justify-end w-full">
              <RxCross2
                onClick={handleSlider}
                className="h-6 w-6 cursor-pointer"
              />
            </div>
            <h2 className="text-black font-bold text-xl ml-5">Your Cart</h2>

            {cart.length === 0 ? (
              <div className="text-center mt-4">
                <p className="text-black text-base">Cart is empty</p>
              </div>
            ) : (
              cart.map((product, index) => (
                <CartProduct
                  key={index}
                  product={product}
                  removeItem={() => removeItem(index)}
                  cart={cart}
                  setCart={setCart}
                />
              ))
            )}
          </div>

          <div>
            <button
              onClick={handleClick}
              className="text-white py-2 m-auto font-bold text-center rounded w-full bg-black"
            >
              Checkout
            </button>

            <p className="text-sm w-full text-center mt-1 text-gray-600 tracking-tight">
              Shipping, taxes, and discount codes calculated at checkout
            </p>
          </div>
        </div>
      ) : (
        <div className="relative cursor-pointer" onClick={handleSlider}>
          <HiOutlineShoppingBag className="h-6 w-6" />
          {cart.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-800 rounded-full px-2 py-0.5 text-sm text-white">
              {cart.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}

function CartProduct({ product, removeItem, cart, setCart }) {
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    setCart([...cart], (product.quantity = quantity));
  }, [quantity]);

  const increaseQuantity = () => {
    setQuantity((q) => q + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };
  return (
    <div className="mt-4 px-2 md:px-4">
      <div className="grid grid-cols-3 border-b py-2">
        <div className="flex space-x-4 col-span-2">
          <img
            src={product.image}
            className="w-14 object-cover rounded"
            alt={product.name}
          />
          <div className="flex flex-col justify-between">
            <div>
              <h5 className="text-sm font-bold mb-1 overflow-hidden">
                {product.name}
              </h5>
              <p className="text-sm text-gray-600">
                Size: {product.size} | Color: {product.color}
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <button
                onClick={increaseQuantity}
                className="bg-gray-100 text-black px-2 rounded-sm"
              >
                +
              </button>
              <p className="px-2">{quantity}</p>
              <button
                onClick={decreaseQuantity}
                className="bg-gray-100 text-black px-2 rounded-sm"
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h3 className="font-semibold">${product.price * product.quantity}</h3>
          <MdDelete
            onClick={removeItem}
            className="text-red-700 w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
