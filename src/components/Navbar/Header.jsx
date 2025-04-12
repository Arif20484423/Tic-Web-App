import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between item-center h-[60px] w-full bg-[var(--blackColor-050)] px-[30px] py-[10px]">
      <div id="title">
        <div className="text-[20px] font-bold text-[var(--primaryColor-500)] ">
          Account Information
        </div>
        <div className="text-[10px] text-[var(--textColor-tertiary)]">
          &larr; Back
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-4" id="hello-user">
        <div className="text-right">
          <div className="text-[17px] font-extrabold text-[var(--primaryColor-500)]">
            Hello, name
          </div>
          <div className="text-[10px] text-[var(--textColor-tertiary)]">
            rollNumber
          </div>
        </div>
        <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt="user-icon"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
