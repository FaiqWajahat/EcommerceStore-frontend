import React from 'react'
import { AdminSideMenu } from '../components/Admin/AdminSideMenu'
import AdminTopMenu from '../components/Admin/AdminTopMenu'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden lg:block lg:w-64 fixed inset-y-0 left-0 z-40">
        <AdminSideMenu />
      </div>

      {/* Mobile Top Menu */}
      <div className="lg:hidden block w-screen ">
        <AdminTopMenu />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Spacer for mobile top menu */}
        <div className="lg:hidden h-16"></div>
        
        {/* Content container with proper padding */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Admin