"use client";
import React from "react";

const Texrarea = ({
  size,
  label,
  priority,
  placeholder = "Enter details",
  value,
  setValue,
}) => {
  const sizeClasses = {
    large: "w-full max-w-[350px] h-[150px]", // Set a proper height for large size
    small: "w-full max-w-[150px] h-[100px]", // Set a proper height for small size
  };

  const priorityColor = {
    required: "text-amber-600",
    optional: "text-[var(--textColor-disables)]",
  };

  return (
    <>
      <div className={`flex flex-col justify-center items-center ${sizeClasses[size]} `}>
        <div className="flex flex-row w-full justify-between">
          <span className="text-[12px] text-[var(--textColor-secondary)] font-medium mb-2">
            {label}
          </span>
          <span className={`text-[10px] ${priorityColor[priority]}`}>
            {priority}
          </span>
        </div>
        <textarea
          value={value}
          className={`w-full pl-[5px] text-[12px] text-[var(--primaryColor-500)] border border-transparent rounded-[5px] bg-[var(--primaryColor-000)]
          placeholder:text-[12px] placeholder:text-[var(--textColor-disables)]
          focus:placeholder:text-transparent focus:outline-none focus:border-[var(--primaryColor-500)]`}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          style={{ height: size === "large" ? "150px" : "100px" }}  
        />
      </div>
    </>
  );
};

export default Texrarea;