"use client"
import React from "react";
import NavbarOptions from "./NavbarOptions";
const SideNavbar = () => {
    return(
        <>
        
        <div className="h-screen w-[220px] bg-[var(--primaryColor-500)] px-[20px] py-[50px] flex flex-col gap-y-[100px]">
            <div className="text-[24px] text-[var(--textColor-white)] font-bold ">TIC</div>
            <NavbarOptions />
        </div>
        </>
    )
}
export default SideNavbar;