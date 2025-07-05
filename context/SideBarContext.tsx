'use client'
import { createContext, useContext, useState } from "react";
export interface sidebarContextType{
isOpen:boolean,
setIsOpen: (newState:boolean)=>void

}
const sidebarContext = createContext<sidebarContextType|null>(null)
export function SidebarContextProvider({ children }: { children: React.ReactNode}){
    const [isOpen,setIsOpen]= useState(true)
    return(
        <sidebarContext.Provider value={{isOpen,setIsOpen}}>
            {children}
        </sidebarContext.Provider>
    )

}
export function useSideBarContext(){
    const context = useContext(sidebarContext)
    if (!context) throw new Error("error in sidebar context");
  return context;
}