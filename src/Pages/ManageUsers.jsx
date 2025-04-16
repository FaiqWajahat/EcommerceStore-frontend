import React from 'react'

import RegisterdUsers from '../components/Admin/RegisterdUsers'
import { useNavigate } from 'react-router-dom'

const ManageUsers = () => {
    const navigate=useNavigate()
  return (
   <>
   <div className="w-full">
       
   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 ">
  {/* Title with underline bar */}
  <div className="flex items-center gap-2">
    <h2 className="font-bold text-2xl text-gray-800">Manage Users</h2>
    <span className="h-1 w-8 bg-blue-500 rounded"></span>
  </div>

  {/* Add User Button */}
  <button onClick={()=>navigate("AddUser")}
   className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-all duration-200">
    Add User
  </button>
</div>

  
      <div className='w-full '>
        <RegisterdUsers/>
      </div>
      </div>
   </>
  )
}

export default ManageUsers