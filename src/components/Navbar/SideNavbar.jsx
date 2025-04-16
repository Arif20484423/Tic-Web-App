"use client";
import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoInformationCircle } from "react-icons/io5";
import { RiBuilding2Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import OptionButton from "./OptionButton";
const SideNavbar = () => {
  const [activeOption, setActiveOption] = useState(4);
  const options = [
    { id: 1, label: "Dashboard", icon: <MdDashboard className="text-white"/> },
    { id: 2, label: "Information", icon: <IoInformationCircle className="text-white"/> },
    { id: 3, label: "Companies", icon: <RiBuilding2Fill className="text-white"/> },
    { id: 4, label: "Settings", icon: <IoSettingsSharp className="text-white"/> },
  ];
  // const options = [
  //   { id: 1, label: "Dashboard", icon: "" },
  //   { id: 2, label: "Information", icon: "" },
  //   { id: 3, label: "Companies", icon: "" },
  //   { id: 4, label: "Settings", icon: "" },
  // ];
  return (
    <>
      
        <div className="text-[24px] text-[var(--textColor-white)] font-bold ">
          TIC
        </div>
        <div className="w-[180px] flex flex-col gap-y-2">
          {options.map((option) => (
            <OptionButton
              key={option.id}
              icon={option.icon}
              isActive={activeOption === option.id}
              onClick={() => setActiveOption(option.id)}
            >
              <span>{option.label}</span>
            </OptionButton>
          ))}
        </div>
      
    </>
  );
};
export default SideNavbar;
