 import React from "react";

const FilterInput2 = ({ label,text }) => {
  return (
    <div className=" bg-[var(--blackColor-050)] flex p-2 rounded-sm">
      <input type="text" placeholder={label}  className=" border-0 w-[145px] placeholder-black" />
      <div className=" bg-white p-2 rounded-sm text-gray-400">{text}</div>
    </div>
  );
};

export default FilterInput2;