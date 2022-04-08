import React from 'react'
import { Outlet } from 'react-router-dom'

export default function InterfaceInternaute() {
  return (
    <>
        <div>Header InterfaceInternaute</div>
        <div>Navbar InterfaceInternaute</div>
        <Outlet/>
        <div>Footer InterfaceInternaute</div>
    </>  )
}
