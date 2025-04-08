import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/Cart";
import toast from "react-hot-toast";
import products from "../../data/products";
import { handleError, handlePromiss } from "../../Notify";

export default function ProductInfo({ sku }) {
  let data = products.filter((product) => product.sku === sku);
  let cartState = useContext(CartContext);
  let cart = cartState.cart;
  let setCart = cartState.setCart;

  let [Quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log("Updated Cart:", cart);
  }, [cart]);

  let [count, setCount] = useState(0);
  let [Color, setColor] = useState(null);

  let [Size, setSize] = useState("M");

  const addToCart = async () => {
    if (Color === null) {
      toast.error("Select Color");
      exit;
    }

    let productInCart = {
      productId: data[0].sku,
      name: data[0].name,
      size: Size,
      color: Color,
      quantity: Quantity,
      price: data[0].discountPrice,
      image: data[0].images[0].url,
    };

    let newCart = [...cart];
    let found = false;
    newCart.forEach((product) => {
      if (
        product.name === productInCart.name &&
        product.quantity === productInCart.quantity &&
        product.color === productInCart.color &&
        product.size === productInCart.size &&
        product.sku === productInCart.sku
      ) {
        found = true;
      }
    });
    if (!found) {
      setIsLoading(true);

    

      const loadMsg = "Adding to the cart";
      const sucessMsg = "Added sucessfully!";

      await handlePromiss( loadMsg, sucessMsg);

      newCart.push(productInCart);
      setCart(newCart);
      setQuantity(1);
      setIsLoading(false);
    }
    if (found) {
      let msg = "Product already in cart";
      handleError(msg);
      isLoading(false);
    }
  };

  return data.map((product, index) => {
    return (
      <div
        key={index}
        className=" md:flex px-6 md:justify-center w-full md:px-16 gap-6"
      >
        <div className="flex gap-3 ">
          <div className="hidden md:flex flex-col gap-4 ">
            <img
              onClick={() => setCount(0)}
              src={product.images[0].url}
              alt="product"
              className="w-12 h-12 rounded-lg object-cover hover:cursor-pointer"
            />
            <img
              onClick={() => setCount(1)}
              src={product.images[1].url}
              alt="product"
              className="w-12 h-12 rounded-lg object-cover hover:cursor-pointer "
            />
          </div>
          <div className="md:w-[300px] ">
            <img
              src={product.images[count].url}
              alt="product"
              className="w-full md:h-full  h-[500px] rounded-lg object-cover hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="md:hidden flex mt-3 gap-4 px-4">
          <img
            onClick={() => setCount(0)}
            src={product.images[0].url}
            alt="product"
            className="w-12 h-12 rounded-lg object-cover  "
          />
          <img
            onClick={() => setCount(1)}
            src={product.images[1].url}
            alt="product"
            className="w-12 h-12 rounded-lg object-cover "
          />
        </div>
        <div className="flex flex-col md:mt-0 mt-6 md:w-[50%] lg-[40%] gap-1 pb-4 ">
          <h2 className="font-bold text-[18px] text-black   ">
            {product.name}
          </h2>
          <div className="flex gap-4">
            <span className="font-base font-light text-slate-500 line-through">
              ${product.price}
            </span>
            <span className="text-base text-red-700 font-semibold">
              ${product.discountPrice}
            </span>
          </div>
          <p className="text-black text-sm tracking-tighter">
            {product.description}
          </p>
          <h5 className="text-balck text-sm font-semibold my-2">Color:</h5>
          <div className="flex gap-2">
            {product.colors.map((color, i) => (
              <div
                key={i}
                onClick={() => setColor(color.toLocaleLowerCase())}
                className={`w-6 h-6 rounded-full border  hover:cursor-pointer transition-all ${
                  color.toLowerCase() === Color
                    ? "opacity-100 border-2 border-black"
                    : ""
                } `}
                style={{ backgroundColor: color.toLowerCase() }}
              ></div>
            ))}
          </div>
          <h5 className="text-balck text-sm font-semibold my-2">Size:</h5>
          <ul className="flex gap-2 text-sm ">
            {product.sizes.map((size, ind) => (
              <li
                key={ind}
                onClick={() => setSize(size)}
                className={`py-1 px-2 border transition-all hover:border-black hover:cursor-pointer ${
                  Size === size ? "bg-black text-white " : "border-gray-300"
                }`}
              >
                {size}
              </li>
            ))}
          </ul>
          <h5 className="text-balck text-sm font-semibold my-2">Quantity:</h5>
          <div className="flex gap-1">
            <button
              onClick={() => setQuantity((Quantity += 1))}
              className="bg-gray-100 text-black px-1 rounded-sm"
            >
              +
            </button>
            <p className="px-2">{Quantity}</p>
            <button
              onClick={() => (Quantity != 0 ? setQuantity(Quantity--) : "")}
              className="bg-gray-100 text-black px-1 rounded-sm"
            >
              -
            </button>
          </div>
          <button
            disabled={isLoading}
            onClick={addToCart}
            className={`w-full text-center text-sm py-1 mt-3 mb-4 hover:bg-opacity-85 bg-black text-white ${
              isLoading ? "opacity-60" : ""
            }`}
          >
            {isLoading ? "Adding to Cart" : "Add to Cart"}
          </button>
          <h5 className="text-balck text-sm font-semibold my-2">
            Characterstics:
          </h5>
          <ul className="text-sm font-light">
            <li className="">Brand : {product.brand}</li>
            <li className="">Material : {product.material}</li>
          </ul>
        </div>
      </div>
    );
  });
}
