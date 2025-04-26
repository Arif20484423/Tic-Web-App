import React from "react";

const FilterInput = ({ label }) => {
  return (
    <div className=" bg-[var(--blackColor-050)] flex p-2 rounded-sm">
      <input type="text" placeholder={label}  className=" border-0 w-[70px]" />
      <div className=" bg-white  p-1 rounded-sm">CGPA</div>
    </div>
  );
};

export default FilterInput;
