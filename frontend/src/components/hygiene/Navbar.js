import React, { useState } from 'react'

import { HiOutlineBars3BottomRight } from "react-icons/hi2";
 import { RiCloseFill } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import Images from '../../constants/Images';
import { DataNav } from '../../data/DataNav';
// import Search from '../search/Search';
// The Image const components that holds all of the images


const Navbar = () => {
  const activeLink = "border-b-4 px-[2px] border-[#86CFF2] text-[#23146D]";
    const normalLink = " ";
    let [open,setOpen]=useState(false);
  return (
    <div className='w-full mx-auto fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
      <div className='cursor-pointer flex items-center w-[50px] h-[50px]'>
        <img src={Images.Logo} alt="Logo" />
      </div>
      <div onClick={()=>setOpen(!open)} className='text-2xl absolute right-5 top-6 cursor-pointer md:hidden'>
     {open ? <RiCloseFill /> : <HiOutlineBars3BottomRight />}
      </div>
      {/* <Search />     */}
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1]
       left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        <li className='md:ml-8 text-[16px] text-[#0D1213] md:my-0 my-7'>
          <NavLink
          className={({ isActive }) =>
          isActive ? activeLink : normalLink } to='/'
          >Home</NavLink>
        </li>
        <li  className='md:ml-8 text-[16px] text-[#0D1213] md:my-0 my-7' > 
          <NavLink
          className={({ isActive }) =>
          isActive ? activeLink : normalLink } to='/about'
          //  style={({isActive})=> {return {color: isActive?'':''}}}
           >About Us</NavLink>
        </li>
        <li  className='md:ml-8 text-[16px] text-[#0D1213] md:my-0 my-7'>
          <NavLink
          className={({ isActive }) =>
          isActive ? activeLink : normalLink } to='/career'
           >Career</NavLink>
        </li>
        <li  className='md:ml-8 text-[16px] text-[#0D1213] md:my-0 my-7'>
          <NavLink
          className={({ isActive }) =>
          isActive ? activeLink : normalLink } to='/blog'
           >Blog</NavLink>
        </li>

        {/* {
          DataNav.map((item)=>(
            <div className='md:ml-8 text-[14px] md:my-0 my-7'>
              <li key={item.title}>
              <NavLink
              href={item.path} className='text-[#36454F] hover:text-[#000000] duration-500 font-normal'>{item.title}</NavLink>
            </li>
            </div>
            
          ))
        } */}
        <Link>
        <button className="border-none leading-normal font-['Poppins'] font-normal] border-inherit px-5 sm:px-4 py-1 bg-[#23146D] 
        text-[#fff] text-[16px] rounded-[10px] mx-4 not-italic font-normal text-base font-medium">
         Contact Us
        </button>
        </Link>
      </ul>   
      </div>
    </div>
  )
}

export default Navbar


