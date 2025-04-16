import { createContext, useState,useEffect } from "react";
export const CartContext=createContext(null);

export const CartProvider= (props)=>{
    const [cart , setCart]= useState([]);
    const [search,setSearch]=useState("");
    const [ products,setProducts]=useState([])
    const baseUrl='https://e-commerce-backend-2m6p.onrender.com'
    const getProducts = async () => {
    
        try {
         
          const response = await fetch(`${baseUrl}/admin/getProducts`, {
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
    <CartContext.Provider  value={{cart,setCart, search,setSearch,products, baseUrl}}>
        {props.children}
    </CartContext.Provider>
    )
}