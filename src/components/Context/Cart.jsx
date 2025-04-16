import { createContext, useState,useEffect } from "react";
export const CartContext=createContext(null);

export const CartProvider= (props)=>{
    const [cart , setCart]= useState([]);
    const [search,setSearch]=useState("");
    const [ products,setProducts]=useState([])

    const getProducts = async () => {
    
        try {
          const baseURL = "http://localhost:8080";
          const response = await fetch(`${baseURL}/admin/getProducts`, {
            method: "GET",
            headers: {
              "CONTENT-TYPE": "application/json",
            },
            body: JSON.stringify(),
          });
    
          const Result = await response.json();
          setProducts([...Result?.allProducts]);
        } catch (error) {
          console.log(error);
          handleError("Something went wrong");
        } 
      };

      useEffect(()=>{
        getProducts();
      },[])
    return(
    <CartContext.Provider  value={{cart,setCart, search,setSearch,products}}>
        {props.children}
    </CartContext.Provider>
    )
}