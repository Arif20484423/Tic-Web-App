import React from "react";
const Data = ({ size = "medium", variant = "regular", children }) => {
  const sizeClasses = {
    extraSmall: "w-[30px]",
    small: "w-[50px]",
    medium: "w-[100px]",
    large: "w-[150px]",
    extraLarge: "w-[200px]",
  };
  const variantClasses = {
    header: "text-[11px] text-[var(--textColor-white)] font-medium",
    regular: "text-[11px] text-[var(--textColor-secondary)]",
  };
  return (
    <div
      className={`group flex flex-row h-[30px]  px-2 justify-between items-center ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      <span>{children}</span>
    </div>
  );
};
export default Data;
