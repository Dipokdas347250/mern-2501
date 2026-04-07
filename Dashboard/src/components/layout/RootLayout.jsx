import React from 'react'
import Navber from '../common/Navber'
import Sideber from '../common/Sideber'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
    <Navber/>
    <div className="flex">
        <Sideber/>
        <Outlet/>
    </div>
    </>
  )
}

export default RootLayout