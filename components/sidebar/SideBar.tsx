"use client";
import React from "react";
import TempLogo from "../../public/test_logo02.png";
import { RxCross1 } from "react-icons/rx";
import dog_image from "../../public/dog_image.jpeg";
import hamster_image from "../../public/hamster_image.jpeg";
import { FaHome, FaDna, FaHeartbeat, FaUserPlus } from "react-icons/fa";
import { PiPackage } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LuDog } from "react-icons/lu";
import { useSideBarContext } from "@/context/SideBarContext";
import { sidebarContextType } from "@/context/SideBarContext";
import { useEffect } from "react";
import Image from "next/image";
const SideBar = () => {
  const { isOpen, setIsOpen }: sidebarContextType = useSideBarContext();

  useEffect(() => {
    const handleResize = () => setIsOpen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={`${
        !isOpen && "hidden"
      } fixed top-0 let-0 z-50 overflow-y-auto  w-[300px] h-screen p-5 text-white bg-[#54473F] flex flex-col justify-between`}
    >
      <div>
        <div id="logo" className=" flex justify-between">
          <Image src={TempLogo} alt="logo" className="w-50 h-20 rounded-xl " />
          <div onClick={() => setIsOpen(false)} className="cursor-pointer">
            <RxCross1 style={{ fontSize: "1.8rem", color: "#e1d0c6" }} />
          </div>
        </div>
        <div className="mt-5 space-y-4 ">
          <h1 className="text-[#e1d0c6]">Your Pets</h1>
          <div className="flex space-x-4">
            <div className="w-8 h-8 rounded-full bg-white">
              <Image src={dog_image} alt="" className="w-8 h-8 rounded-full" />
              <p className="text-xs ">Maxi</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white">
              <Image
                src={hamster_image}
                alt=""
                className="w-[100%] h-[100%] rounded-full "
              />
              <p className="text-xs ">Fiona</p>
            </div>
            <div className="border w-8 h-8 rounded-full text-center text-xl">
              <p>+</p>
              <p className="text-xs pt-1">Add</p>
            </div>
          </div>
        </div>
        <div className="mt-10 space-y-2 ">
          <p className="text-[#e1d0c6]">Main Menu</p>
          <div className="flex space-x-2 px-2 py-0.5">
            <FaHome style={{ fontSize: "20px" }} />
            <p className="text-white  font-semibold">Overview</p>
          </div>
          <div className="flex space-x-2 px-2 py-0.5">
            <FaDna style={{ fontSize: "20px" }} />
            <p className="text-white text- font-semibold">DNA</p>
          </div>
          <div className="flex space-x-2 bg-[#e1d0c6] px-2 py-0.5 rounded-xl text-[#54473F]">
            <FaHeartbeat style={{ fontSize: "20px" }} />
            <p className="   font-semibold">Care</p>
          </div>
          <div className="flex space-x-2 px-2 py-0.5">
            <PiPackage style={{ fontSize: "20px" }} />
            <p className="text-white  font-semibold">Orders</p>
          </div>
          <div className="flex space-x-2 px-2 py-0.5">
            <FaUserPlus style={{ fontSize: "20px" }} />
            <p className="text-white  font-semibold">Referrals</p>
          </div>
        </div>
        <div className="bg-[#e1d0c6] mt-8 h-0.5"></div>
        <div className="mt-10 space-y-2 ">
          <p className="text-[#e1d0c6]">Preferences</p>
          <div className="flex space-x-2 px-2 py-0.5">
            <IoMdSettings style={{ fontSize: "20px" }} />
            <p className="text-white  font-semibold">Settings</p>
          </div>
          <div className="flex space-x-2 px-2 py-0.5">
            <RiCustomerService2Fill style={{ fontSize: "20px" }} />
            <p className="text-white  font-semibold">Support & Help</p>
          </div>

          <div className="flex space-x-2 px-2 py-0.5">
            <LuLogOut style={{ fontSize: "20px" }} />
            <p className="text-white  font-semibold">Logout</p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#e1d0c6] text-[#54473F] mt-16 mx-auto w-64 h-52 rounded-xl p-4">
          <div className="bg-[#54473F] mx-auto w-10 h-10 rounded-xl flex justify-center items-center">
            <LuDog style={{ color: "#e1d0c6", fontSize: "1.5rem" }} />
          </div>
          <div>
            <p className="text-center font-bold">
              Meet Buddy, Your Pet Care Guide
            </p>
            <p className="text-center text-sm">Have questions about</p>
            <p className="text-center text-sm">
              your pet's health or behaviour
            </p>
          </div>
          <div className="flex justify-center  mt-2">
            <button className="bg-[#54473F]  py-2 px-7 rounded-xl text-[#e1d0c6]">
              Ask Buddy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
