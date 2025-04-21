"use client";
import React from "react";

const OptionButton = ({ isActive, onClick, children,icon }) => {
  return (
    <div
      className={`w-[180px] text-[12px] flex items-center gap-x-2 p-2 cursor-pointer rounded-md transition-all duration-300 ml-5${
        isActive
          ? "text-[var(--textColor-white)] font-bold"

          : "text-[var(--textColor-disables)]"
      } hover:text-[var(--textColor-white)] hover:font-medium `}

      onClick={onClick}
    >
      {isActive && <span className="transition-transform duration-500 ease-in-out">{icon}</span>}
      {children}

    </div>
  );
};

export default OptionButton;