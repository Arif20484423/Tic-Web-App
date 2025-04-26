import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className="flex flex-row text-[11px]  justify-between box-border bg-[var(--primaryColor-100)] px-4 py-2 rounded-[5px] border hover:border-[var(--primaryColor-400)]">
      <input
        type="text"
        placeholder="Search here"
        className=" bg-none outline-none min-w-[200px] w-full max-w-[300px]"
      />
      <IoIosSearch className="text-[15px]" />
    </div>
  );
};

export default SearchBox;
