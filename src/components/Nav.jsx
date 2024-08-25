import React from 'react'
import { IoMenu } from "react-icons/io5";


const Nav = ({ onMenuClick }) => {
  return (
    <nav className='bg-[#1f2937] p-5 flex justify-between items-center mx-1'>
      <IoMenu 
        className="text-white text-2xl cursor-pointer lg:hidden" 
        onClick={onMenuClick} 
      />
      <div className="text-white lg:w-[19rem] lg:text-end lg:block hidden">Navbar</div>
    </nav>
  )
}

export default Nav