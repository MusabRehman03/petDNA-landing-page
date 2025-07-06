"use client";
import React from "react";
import SideBar from "@/components/sidebar/SideBar";
import AppBar from "@/components/appbar/AppBar";
import { useSideBarContext } from "@/context/SideBarContext";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const { isOpen, setIsOpen } = useSideBarContext();

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 bg-opacity-30 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className="flex">
        <SideBar />
        <AppBar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
