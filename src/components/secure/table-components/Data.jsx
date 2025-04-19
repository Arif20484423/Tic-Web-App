import React, { useEffect, useState } from "react";
import { RiEditFill } from "react-icons/ri";
const Data = ({
  size = "medium",
  variant = "regular",
  editable = false,
  children,
}) => {
  const [edit, setEdit] = useState(false);

  const sizeClasses = {
    extraSmall: "w-[30px]",
    small: "w-[50px]",
    medium: "w-[100px]",
    large: "w-[150px]",
  };
  const variantClasses = {
    header: "text-[11px] text-[var(--textColor-white)] font-medium",
    regular: "text-[11px] text-[var(--textColor-secondary)]",
  };
  return (
    <div
      className={`group flex flex-row h-[30px]  px-2 justify-between items-center ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {edit ? (
        <input
          type="text"
          value={children}
          className=" border-0 focus:border-0 focus:outline-0 "
          onKeyUp={(e) => {
            console.log(e.key);
          }}
        />
      ) : (
        <span>{children}</span>
      )}

      <span className=" opacity-0 transition-opacity group-hover:opacity-200">
        {!edit &&
          (editable == "true" || editable == true ? (
            <RiEditFill
              className="text-[10px] text-black
    hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setEdit(true);
              }}
            />
          ) : (
            <></>
          ))}
      </span>
    </div>
  );
};
export default Data;
