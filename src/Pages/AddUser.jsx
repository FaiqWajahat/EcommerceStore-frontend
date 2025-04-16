import React from 'react'

import NewUser from '../components/Admin/NewUser'
const AddUser = () => {
  return (
    <div className='w-full'>

  {/* Title with underline bar */}
  <div className="flex items-center gap-2  mb-6">
    <h2 className="font-bold text-2xl text-gray-800">Add User</h2>
    <span className="h-1 w-8 bg-blue-500 rounded"></span>
  </div>
<NewUser/>
  

    </div>
  )
}

export default AddUser