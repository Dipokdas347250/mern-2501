import React from 'react'
import { FaBorderAll } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa6";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { VscArrowSwap } from "react-icons/vsc";
import { BsBarChartFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { TbHelpSquareRounded } from "react-icons/tb";
import { RiLogoutCircleRLine } from "react-icons/ri";



const Sideber = () => {
  return (
    <>
      <section className='w-[20%] h-screen bg-[#064e3b] border-r border-black py-10 fixed px-2'>
        <div className=" ">
          <div className="p-2 flex justify-between items-center gap-3 cursor-pointer">

            <div className="flex items-center justify-center gap-3">
              <FaBorderAll className='text-[20px] text-white' />
              <h2 className=' text-white text-2xl font-bold '>Dashboard</h2>
            </div>
            <div className="">
              <FaBarsStaggered className='text-white text-[20px]' />
            </div>
          </div>

          <div className=" space-y-3 mt-10">
            <div className="">
              <div className="flex items-center gap-3 p-2 cursor-pointer duration-300 ease-in-out hover:bg-green-300/20 rounded-r-lg border-l-4 border-[#064e3b] hover:border-green-300">
                <FaShopify className='text-[16px] text-white' />
                <h2 className=' text-white text-lg font-semibold'>Products</h2>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-3 p-2 cursor-pointer duration-300 ease-in-out hover:bg-green-300/20 rounded-r-lg border-l-4 border-[#064e3b] hover:border-green-300">
                <AiFillProduct className='text-[16px] text-white' />
                <h2 className=' text-white text-lg font-semibold'>All Category</h2>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-3 p-2 cursor-pointer duration-300 ease-in-out hover:bg-green-300/20 rounded-r-lg border-l-4 border-[#064e3b] hover:border-green-300">
                <MdOutlineLibraryBooks className='text-[16px] text-white' />
                <h2 className=' text-white text-lg font-semibold'>Orders</h2>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-3 p-2 cursor-pointer duration-300 ease-in-out hover:bg-green-300/20 rounded-r-lg border-l-4 border-[#064e3b] hover:border-green-300">
                <FaUsers className='text-[16px] text-white' />
                <h2 className=' text-white text-lg font-semibold'>Customers</h2>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-3 p-2 cursor-pointer duration-300 ease-in-out hover:bg-green-300/20 rounded-r-lg border-l-4 border-[#064e3b] hover:border-green-300">
                <VscArrowSwap className='text-[16px] text-white' />
                <h2 className=' text-white text-lg font-semibold'>Transactions</h2>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-3 p-2 cursor-pointer duration-300 ease-in-out hover:bg-green-300/20 rounded-r-lg border-l-4 border-[#064e3b] hover:border-green-300">
                <BsBarChartFill className='text-[16px] text-white' />
                <h2 className=' text-white text-lg font-semibold'>Analytics</h2>
              </div>
            </div>
          </div>

          <div className="">
            <div className="mt-10  border-t border-gray-300 pt-5">
             <div className=" p-2 cursor-pointer duration-300 ease-in-out hover:bg-green-300/20 rounded-r-lg border-l-4 border-[#064e3b] hover:border-green-300">
              <h2 className=' text-white text-lg font-semibold uppercase'>support</h2>
            </div>
           <div className="space-y-3 mt-5">
             <div className="flex items-center gap-3 p-2 cursor-pointer duration-300 ease-in-out hover:bg-green-300/20 rounded-r-lg border-l-4 border-[#064e3b] hover:border-green-300">
              <IoSettingsSharp className='text-[16px] text-white' />
              <h2 className=' text-white text-lg font-semibold'>Settings</h2>
            </div>
             <div className="flex items-center gap-3 p-2 cursor-pointer duration-300 ease-in-out hover:bg-green-300/20 rounded-r-lg border-l-4 border-[#064e3b] hover:border-green-300">
              <TbHelpSquareRounded className='text-[16px] text-white' />
              <h2 className=' text-white text-lg font-semibold'>Helps</h2>
            </div>
             <div className="flex items-center gap-3 p-2 cursor-pointer duration-300 ease-in-out hover:bg-green-300/20 rounded-r-lg border-l-4 border-[#064e3b] hover:border-green-300">
              <RiLogoutCircleRLine className='text-[16px] text-white' />
              <h2 className=' text-white text-lg font-semibold'>Log out</h2>
            </div>
           </div>
            
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sideber