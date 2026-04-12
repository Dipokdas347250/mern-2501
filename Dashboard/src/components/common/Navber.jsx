import React from 'react'
import logo from '../../assets/footer-logo.png'
import { IoSearch } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import pro from '../../assets/pro.png'
import { MdOutlineDarkMode } from "react-icons/md";




const Navber = () => {
  return (
    <>
    <nav className=' py-3 px-5 bg-linear-to-br from-[#022c22] to-[#064e3b]'>
      <div className="flex items-center justify-between">
       <div className="">
        <img src={logo} alt="logo" />
       </div>
       <div className=" w-[30%] border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2">
        <input className=' outline-none w-full text-white' type="text" placeholder="Search..." />
        <IoSearch className=' text-white' />
       </div>
       <div className="flex items-center gap-4">
        <div className="p-2.5 rounded-full bg-white/20 cursor-pointer">
          <MdOutlineDarkMode/>
        </div>
       <div className=" p-2.5 rounded-full bg-white/20 cursor-pointer">
         <BsBell/>
       </div>

        <img src={pro} alt="Profile" className="w-10 h-10 rounded-full" />
       </div>
      </div>
    </nav>
    </>
  )
}

export default Navber