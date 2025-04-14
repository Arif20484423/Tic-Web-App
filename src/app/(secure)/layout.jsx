"use client";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideNavbar from "@/components/Navbar/SideNavbar";
import Header from "@/components/Navbar/Header";
import styles from "./Component.module.css";

const layout = ({ children }) => {
  const showHideNavbar = () => {
    console.log("showHideNavbar clicked");
  }
  return (
    <div className=" flex flex-row h-full w-full bg-[var(--blackColor-050)] ">
      {/* sidebar            */}
      <div>
        <div className="flex flex-col sm:hidden  pt-[25px] pl-[10px]
        hover:cursor-pointer"
        onClick={showHideNavbar}>
          <GiHamburgerMenu onClick={showHideNavbar}/>
        </div>
        <div className="h-screen hidden sm:flex flex-col w-[220px] bg-[var(--primaryColor-500)] px-[20px] py-[50px]  gap-y-[100px] ">
          <SideNavbar></SideNavbar>
        </div>
      </div>
      {/* main content */}
      <div className="flex-1 w-min-[400px] ">
        <Header></Header>
        <div
          className={`h-[calc(100vh-70px)] overflow-scroll scrollbar-hide ${styles.body}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
