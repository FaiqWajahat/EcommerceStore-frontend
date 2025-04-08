import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Common/Header/Topbar'
import Navbar from '../components/Common/Header/Navbar'
import Footer from '../components/Common/Footer/Footer'

export default function User() {
  return (
    <>
     <header className="w-auto border-b-[1px] ">
        <Topbar />
        <Navbar />
      </header>
      <main>
       <Outlet/>
      </main>
      <footer className="w-auto">
        <Footer />
      </footer>
    </>
  )
}
