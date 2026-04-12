import React from 'react'
import { FaBorderAll } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";



const Sideber = () => {
  return (
    <>
    <section className='w-[20%] h-screen bg-[#064e3b] border-r border-black py-10 fixed'>
      <div className=" ">
        <div className="p-2 flex justify-between items-center gap-3 cursor-pointer">
          
        <div className="flex items-center justify-center gap-3">
          <FaBorderAll className='text-[20px] text-white'/>
          <h2 className=' text-white text-2xl font-bold '>Dashboard</h2>
        </div>
        <div className="">
          <FaBarsStaggered className='text-white text-[20px]'/>
          </div>
        </div>

        {/* <div className="">
          <div className="flex items-center gap-3 p-2 cursor-pointer duration-300 ease-in-out hover:bg-green-300/20 rounded-r-lg border-l-4 border-[#064e3b] hover:border-green-300">
            <AiFillProduct className='text-[16px] text-white'/>
            <h2 className=' text-white text-lg font-semibold'>Products</h2>
          </div>
        </div> */}
      </div>
    </section>
    </>
  )
}

export default Sideber