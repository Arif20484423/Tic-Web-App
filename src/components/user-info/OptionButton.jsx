"use client";
import React from "react";

const OptionButton = ({ isActive, onClick, children,icon }) => {
  return (
    <div
      className={`w-[180px] flex items-center gap-x-5 p-2 cursor-pointer rounded-md transition-all duration-300 ${
        isActive
          ? "text-[var(--textColor-white)] font-bold"
          : "text-[var(--textColor-disables)]"
      } hover:text-[var(--textColor-white)] hover:font-bold `}
      onClick={onClick}
    >
      {isActive && <span className="transition-transform duration-300 ease-out">{icon}</span>}
      {children}

    </div>
  );
};

export default OptionButton;