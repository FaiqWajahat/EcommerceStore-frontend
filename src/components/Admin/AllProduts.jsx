import React, { useEffect, useState } from "react";
import { handleError } from "../../Notify";
import { toast } from "react-hot-toast";
import { FaExclamationTriangle } from "react-icons/fa";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  const getProducts = async () => {
    setFetchData(true);
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
      setAllProducts([...Result?.allProducts]);
    } catch (error) {
      console.log(error);
      handleError("Something went wrong");
    } finally {
      setFetchData(false);
    }
  };
  

  

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="w-full bg-white p-4 rounded-xl shadow-md overflow-x-auto">
      <table className="min-w-[600px] w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="font-semibold px-3 py-2">NAME</th>
            <th className="font-semibold px-3 py-2">Price</th>
            <th className="font-semibold px-3 py-2">SKU</th>
            <th className="font-semibold px-3 py-2">Stock</th>
            <th className="font-semibold px-3 py-2 text-start">Actions</th>
          </tr>
        </thead>
        <tbody>
          {fetchData ? (
            <tr>
              <td
                colSpan="5"
                className="py-6 text-center text-gray-500 text-sm italic"
              >
                fetching products...
              </td>
            </tr>
          ) : allProducts.length != 0 ? (
            allProducts.map((data) => (
              <tr key={data._id} className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-800">{data.name}</td>
                <td className="px-3 py-2 text-gray-600">${data.price}</td>
                <td className="px-3 py-2 text-gray-600">{data.sku}</td>
                <StockDisplay sku={data.sku} stock={data.stock} getProducts={getProducts} fetchData={fetchData} setFetchData={setFetchData} />
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-500 italic">
                No products available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};


const StockDisplay = ({ sku, stock,getProducts,fetchData,setFetchData }) => {
  const [orderStock, setOrderStock] = useState(stock);

  const updateStock = async (productSku, productStock) => {
    try {
      const baseURL = "http://localhost:8080";
      const response = await fetch(`${baseURL}/admin/updateStock`, {
        method: "PUT",
        headers: {
          "CONTENT-TYPE": "application/json",
        },
        body: JSON.stringify({ sku: productSku, stock: productStock }),
      });

      const result = await response.json();
      if (result.success === false) {
        handleError(result.message);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
      handleError("Something went wrong");
    }
  };

  // {remove }

  const showConfirmationToast = () => {
    return new Promise((resolve) => {
      toast.custom((t) => (
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg px-5 py-4 w-[320px] animate-enter">
          <div className="flex items-start gap-3">
            <div className="text-yellow-500 mt-1">
              <FaExclamationTriangle size={20} />
            </div>
            <div className="flex-1">
              <p className="text-gray-800 font-semibold text-sm">
                Are you sure you want to proceed?
              </p>
              <p className="text-xs text-gray-500 mt-1">
                This action might be irreversible.
              </p>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    resolve(false);
                  }}
                  className="px-4 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    resolve(true);
                  }}
                  className="px-4 py-1.5 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 transition"
                >
                  Sure
                </button>
              </div>
            </div>
          </div>
        </div>
      ));
    });
  };

  const removeProduct = async (productSku) => {
    const answer = await showConfirmationToast();
    if (!answer) {
      return;
    }
    setFetchData(true);
    try {
      const baseURL = "http://localhost:8080";

      const response = await fetch(`${baseURL}/admin/deleteProduct`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sku: productSku }),
      });

      const result = await response.json();
      
      if (!result.success) {
        handleError(result.message);
        return;
      }
    getProducts()
    } catch (error) {
      console.log(error);
      handleError("Something went wrong");
    } finally {
      setFetchData(false);
    }
  };

  return (
    <>
      <td className="px-3 py-2 text-gray-600">
        <input
          type="number"
          value={orderStock}
          onChange={(e) => {
            setOrderStock(e.target.value);
            updateStock(sku, e.target.value);
          }}
          className="w-20 sm:w-24 text-center border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
          placeholder="Qty"
          min="0"
        />
      </td>
      <td className="px-3 py-2 w-fit ">
                  <button
                  disabled={fetchData}
                    onClick={() => removeProduct(sku)}
                    className={`px-4 py-2 text-xs rounded-md bg-red-600 hover:bg-red-700 ${fetchData?"bg-red-700 text-gray-300":"text-white"}`}
                  >
                   {fetchData?"Deleting...":"Delete"}
                   
                  </button>
                </td>
    </>
  );
};

export default AllProducts;
