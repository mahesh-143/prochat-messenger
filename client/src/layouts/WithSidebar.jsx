import { Outlet } from "react-router-dom"
import React from "react"
import Navbar from "./Navbar"

const WithSidebar = () => {
  return  (
  <div className="flex justify-between">
    <Navbar />
    <Outlet />
  </div>
  )
}

export default WithSidebar
