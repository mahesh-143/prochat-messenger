import Hero from "../components/Hero"
import { Outlet } from "react-router-dom"
import React from "react"

const WithHero = () => {
  return  (
  <div className="flex items-center justify-center m-auto">
    <Hero />
    <Outlet />
  </div>
  )
}

export default WithHero
