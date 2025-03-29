import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="fixed top-0 left-0 w-full z-50" />
      <div className="flex-1">  
        <Outlet />
      </div>
      <Footer className="" />
    </div>
  )
}

export default Layout
