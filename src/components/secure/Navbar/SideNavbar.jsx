"use client";
import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoInformationCircle } from "react-icons/io5";
import { RiBuilding2Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import OptionButton from "./OptionButton";
import DropDown from "@/components/navigation/DropDown";
const SideNavbar = () => {
  const [activeOption, setActiveOption] = useState(1);
  const router = useRouter();
  const options = [
    {
      id: 1,
      label: "Dashboard",
      icon: <MdDashboard className="text-white" />,
      page: "/dashboard",
      DropDownFlag: false,
    },
    {
      id: 2,
      label: "Information",
      icon: <IoInformationCircle className="text-white" />,
      page: "/user-details",
      DropDownFlag: false,
    },
    {
      id: 3,
      label: "Batch Registration",
      icon: <IoInformationCircle className="text-white" />,
      page: "/batch-registration",
      DropDownFlag: false,
    },
    {
      id: 4,
      label: "Change password",
      icon: <IoInformationCircle className="text-white" />,
      page: "/change-password",
      DropDownFlag: false,
    },
    {
      id: 5,
      label: "Schedules",
      icon: <IoInformationCircle className="text-white" />,
      page: "/todo",
      DropDownFlag: false,
    },
    {
      id: 6,
      label: "Students",
      icon: <IoInformationCircle className="text-white" />,
      page: "/students",
      DropDownFlag: false,
    },
    {
      id: 7,
      label: "Companies",
      icon: <RiBuilding2Fill className="text-white" />,
      page: "/master-sheet/form",
      DropDownFlag: false,
    },

    // { id: 3, label: "Companies", icon: <RiBuilding2Fill className="text-white"/>, page: "/" },
    // { id: 4, label: "Settings", icon: <IoSettingsSharp className="text-white"/>, page: "/signin" },
  ];
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
            onClick={() => {
              setActiveOption(option.id);
              router.push(option.page);
            }}
          >
            <span>{option.label}</span>
          </OptionButton>
        ))}
      </div>
    </>
  );
};
export default SideNavbar;
