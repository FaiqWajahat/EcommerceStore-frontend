import React from 'react'
import AddProduct from '../components/Admin/AddProduct'

const NewProduct = () => {
  return (
    <div>
        <div className="flex items-center gap-2 mb-6">
    <h2 className="font-bold text-2xl text-gray-800">Add Product</h2>
    <span className="h-1 w-8 bg-blue-500 rounded"></span>
  </div>
  <AddProduct/>
    </div>
  )
}

export default NewProduct