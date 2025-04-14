"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import OptionButton from "./OptionButton";
const SideNavbar = () => {
  const [activeOption, setActiveOption] = useState(4);
  const router = useRouter();
  const options = [
    { id: 1, label: "Dashboard", icon: "", page: "/dashboard" },
    { id: 2, label: "Information", icon: "", page: "/user-details" },
    { id: 3, label: "Companies", icon: "", page: "/" },
    { id: 4, label: "Settings", icon: "", page: "/signin" },
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
