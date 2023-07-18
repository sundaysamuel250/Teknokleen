import React, { useState } from 'react'

import { HiOutlineBars3BottomRight } from "react-icons/hi2";
 import { RiCloseFill } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import Images from '../../constants/Images';
import { DataNav } from '../../data/DataNav';
// import Search from '../search/Search';
// The Image const components that holds all of the images


const Navbar = () => {
  const activeLink= "";
    const normalLink = " ";
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <img src={Images.ogo} alt="Logo" />
      </div>
      <div onClick={()=>setOpen(!open)} className='text-2xl absolute right top-6 cursor-pointer md:hidden'>
     {open ? <RiCloseFill /> : <HiOutlineBars3BottomRight />}
      </div>
      {/* <Search />     */}
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]
       left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          DataNav.map((item)=>(
            <div className='md:ml-8 text-[14px] md:my-0 my-7'>
              <NavLink key={item.title} 
              className={({ isActive }) =>
              isActive ? activeLink : normalLink
            } >
              <a href={item.path} className='text-[#0D1213] hover:text-gray-400 duration-500'>{item.title}</a>
            </NavLink>
            </div>
            
          ))
        }
        <Link>
        <button className="border-2 border-black px-5 sm:px-4 py-1 bg-[#23146D] text-[#fff] rounded-lg mx-4 font-md">
         Contact Us
        </button>
        </Link>
      </ul>   
      </div>
    </div>
  )
}

export default Navbar


