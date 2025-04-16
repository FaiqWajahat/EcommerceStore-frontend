import React, { useEffect, useRef, useState } from "react";
import { BsX } from "react-icons/bs";
import { FaFileImage } from "react-icons/fa6";
import { handleError, handleSuccess } from "../../Notify";

const AddProduct = () => {
  const [imagePreview, setImagePreview] = useState([]);
  const [fetchData,setFetchData]=useState(false)
  const fileInputRef = useRef();

  useEffect(() => {
    setFormData((prev) => ({ ...prev, Images: imagePreview }));
  }, [imagePreview]);

  useEffect(() => {
    console.log(imagePreview);
  }, [imagePreview]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    gender:"Men",
    category:"Top Wear",
    material:"",
    brand:"",
    sku: "",
    sizes: [],
    colors: [],
    Images: [...imagePreview],
  });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      handleError("Please select a valid image file.");
      return;
    }

    if (imagePreview.length > 1) {
      handleError("Only two images are required");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const url = reader.result;
      setImagePreview([...imagePreview, url]);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = (id) => {
    const filterImage = imagePreview.filter((_, i) => i != id);
    setImagePreview(filterImage);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };


  const handleSubmit= async(e)=>{
    e.preventDefault();
    
    console.log(formData)
    const {name,description,price,stock,gender,category,material, brand, sku,sizes,colors,Images}=formData;

    if(!name||!description||!gender||!category||!material||!brand||!sku||!price||!stock||sizes.length==0||colors.length==0||Images.length==0||Images.length<2)
    {
      handleError("Please fill all the fileds correctly")
      return;
    }
    setFetchData(true)
    const baseURL = "http://localhost:8080";
    try{
         const response = await fetch(`${baseURL}/admin/addProduct`, {
           method: "POST",
           headers: {
             "CONTENT-TYPE": "application/json",
           },
           body: JSON.stringify(formData),
         });
   
         const result = await response.json();
         if (result.success ) {
           handleSuccess(result.message);
           setFormData({
            name: "",
            description: "",
            price: 0,
            stock: 0,
            gender:"Men",
            category:"Top Wear",
            material:"",
            brand:"",
            sku: "",
            sizes: [],
            colors: [],
            Images: [...imagePreview],
          });
          setImagePreview([])
          window.scrollTo({ top: 0, behavior: "smooth" });

           return;
         }
         handleError(result.message)
         console.log(result);
        }
        catch (error) {
         console.log(error);
         handleError("Something went wrong");
       } finally{
        setFetchData(false)
       }
  }
  return (
    <div className="w-full p-6 bg-white rounded-2xl shadow-lg">
      <form className="text-sm" onSubmit={handleSubmit}>
        {/* Product Name and sku */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="name"
              className="block text-slate-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter product name"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label
              htmlFor="sku"
              className="block text-slate-700 font-medium mb-1"
            >
          SKU
            </label>
            <input
              type="text"
              id="sku"
              name="sku"
              value={formData.sku}
              placeholder="Enter product sku"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            />
          </div>
        </div>

       

        {/* Price and Stock */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="price"
              className="block text-slate-700 font-medium mb-1"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              min={0}
              placeholder="Enter product price"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label
              htmlFor="stock"
              className="block text-slate-700 font-medium mb-1"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              min={0}
              placeholder="Enter product stock"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            />
          </div>
        </div>

       {/* category and gender */}

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="category"
              className="block text-slate-700 font-medium mb-1"
            >
              Category
            </label>
            <div className="relative min-w-28 w-full text-sm">
                    <select
                      id="category"
                      name="category"
                      
                      value={formData.category}
                      onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
                      className="w-full bg-white border z-20 text-gray-600  border-gray-300 px-3 py-2 text-sm  pr-6  rounded-md     focus:ring-0  outline-none appearance-none "
                    >
                      <option value="Top Wear " className="text-sm ">
                        Top Wear
                      </option>
                      <option value="Bottom Wear" className="text-sm">
                        Bottom Wear
                      </option>
                    
                    </select>

                    {/* Custom dropdown arrow */}
                    <div className="absolute  inset-y-0 right-3 flex items-center pointer-events-none ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-slate-700 font-medium mb-1"
            >
              Gender
            </label>
            <div className="relative min-w-28 w-full text-sm">
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
                      className="w-full bg-white border text-gray-600  border-gray-300 px-3 py-2 text-sm  pr-6  rounded-md     focus:ring-0  z-20 outline-none appearance-none "
                    >
                      <option value="Men" className="text-sm ">
                        Men
                      </option>
                      <option value="Women" className="text-sm">
                        Women
                      </option>
                    </select>

                    {/* Custom dropdown arrow */}
                    <div className="absolute  inset-y-0 right-3 flex items-center pointer-events-none ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
          </div>
        </div>

        {/* material and brand */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="material"
              className="block text-slate-700 font-medium mb-1"
            >
              Material
            </label>
            <input
              type="text"
              id="material"
              name="material"
              value={formData.material}
              placeholder="Enter product material"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label
              htmlFor="brand"
              className="block text-slate-700 font-medium mb-1"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              placeholder="Enter product brand "
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            />
          </div>
        </div>

       

        {/* Sizes  and colors*/}
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
          <label
            htmlFor="sizes"
            className="block text-slate-700 font-medium mb-1"
          >
            Sizes
          </label>
          <input
            type="text"
            id="sizes"
            name="sizes"
            value={formData.sizes}
            placeholder="e.g. S, M, L, XL"
            onChange={(e) =>
              setFormData({
                ...formData,
                sizes: e.target.value.split(",").map((c) => c.trim())
              })
            }
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </div>

       
        <div>
          <label
            htmlFor="colors"
            className="block text-slate-700 font-medium mb-1"
          >
            Colors
          </label>
          <input
            type="text"
            id="colors"
            name="colors"
            value={formData.colors}
            placeholder="e.g. Red, Blue, Green"
            onChange={(e) =>
              setFormData({
                ...formData,
                colors: e.target.value.split(",").map((c) => c.trim())
              })
            }
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </div>
        </div>

         {/* Description */}
         <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-slate-700 font-medium mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            placeholder="Enter product description..."
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
          />
        </div>

        {/* Image Upload */}
        <div className="my-6">
          <label className="block text-slate-700 font-medium mb-2">
            Product Image
          </label>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-md shadow-md transition duration-200 ease-in-out"
            >
              <FaFileImage className="text-white" size={18} />
              Upload Image
            </button>

            {imagePreview.length != 0 ? (
              <div className="relative flex gap-2 items-center">
                {imagePreview.map((v, id) => {
                  return (
                    <div key={id}>
                      <img
                        src={v}
                        alt="Preview"
                        className="w-16 h-16 object-cover rounded-lg border border-zinc-300"
                      />
                      <button
                        onClick={() => removeImage(id)}
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white"
                        type="button"
                      >
                        <BsX size={18} />
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500 text-sm hidden sm:block">
                Upload PNG, JPG or JPEG format
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 w-full flex justify-end items-center">
        <input
            type="submit"
            disabled={fetchData}
            value={fetchData ? "Adding Product..." : "Add Product"}
            className={`px-6 py-3 text-center w-full md:w-fit text-sm cursor-pointer rounded-md shadow-lg transition duration-300 ease-in-out ${
              fetchData
                ? "bg-green-700 text-gray-300 cursor-default"
                : " bg-green-600 hover:bg-green-700 text-white"
            } `}
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
