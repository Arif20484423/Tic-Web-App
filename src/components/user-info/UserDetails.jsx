"use client"
import React from "react";
import SideNavbar from "./SideNavbar";
const UserDetails = () => {
    return (
        <>
        <div className=" flex flex-row h-full w-full">
            <SideNavbar></SideNavbar>
            <div className=" flex-1 w-min-[400px] bg-blue-500">
                <div className="flex h-[50px] w-full bg-amber-300">Header</div>
                <span className="flex w-full h-full justify-center items-center text-amber-50 text-8xl">User Form here</span>
                {/* this div is for form */}
            </div>
        </div>
        </>
    )
}
export default UserDetails;