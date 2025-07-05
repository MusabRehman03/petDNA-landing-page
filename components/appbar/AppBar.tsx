'use client'
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotifications } from "react-icons/io5";
import { useSideBarContext } from '@/context/SideBarContext';
import { CgProfile } from "react-icons/cg";

const appbar = () => {
    const {isOpen, setIsOpen}:any = useSideBarContext()
  return (
    <div className={` flex w-[100%] fixed z-20 bg-[#54473F] h-16 text-[#e1d0c6] p-5  justify-between`}>
        <div onClick={()=>{setIsOpen(true)}} className="cursor-pointer">
            {!isOpen&&
      <RxHamburgerMenu style={{fontSize:'1.8rem'}}/>
            }
      </div>
      <div className='flex space-x-4 '>
    <IoNotifications style={{fontSize:'1.8rem'}}/>

    <CgProfile style={{fontSize:'1.8rem'}}/>
    </div>

    </div>
  )
}

export default appbar
