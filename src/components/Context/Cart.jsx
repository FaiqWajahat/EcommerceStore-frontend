import { createContext, useState } from "react";
export const CartContext=createContext(null);

export const CartProvider= (props)=>{
    const [cart , setCart]= useState([]);
    const [search,setSearch]=useState("");
   
    return(
    <CartContext.Provider  value={{cart,setCart, search,setSearch}}>
        {props.children}
    </CartContext.Provider>
    )
}