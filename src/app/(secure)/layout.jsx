"use client";

import React from "react";
import SideNavbar from "@/components/Navbar/SideNavbar";
import Header from "@/components/Navbar/Header";
import styles from "./Component.module.css"

const layout = ({ children }) => {
  return (
    <div className=" flex flex-row h-full w-full bg-[var(--blackColor-050)]">
      {/* sidebar            */}
      <div className="h-screen w-[220px] bg-[var(--primaryColor-500)] px-[20px] py-[50px] flex flex-col gap-y-[100px]">
        <SideNavbar></SideNavbar>
      </div>
      {/* main content */}
      <div className="flex-1 w-min-[400px] ">
        <Header></Header>
        <div className={`h-[calc(100vh-70px)] overflow-scroll scrollbar-hide ${styles.body}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
