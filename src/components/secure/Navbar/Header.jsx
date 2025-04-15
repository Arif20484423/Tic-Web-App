
import { CgProfile } from "react-icons/cg";
import { AppContext } from "@/context/app.context";
import React, { useContext } from "react";


const Header = () => {
  const {user } = useContext(AppContext)
  return (
    <div className="flex justify-between item-center h-auto w-full bg-[var(--blackColor-050)] px-[30px] py-[10px]">
      <div id="title">
        <div className="text-[20px] font-bold text-[var(--primaryColor-500)] ">
          Account Information
        </div>
        <div className="text-[10px] text-[var(--textColor-tertiary)]">
          &larr; Back
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-4" id="hello-user">

        <div className="hidden sm:flex flex-col text-right">
          <div className="text-[12px] font-extrabold text-[var(--primaryColor-500)]">
            Hello, {user.name}
          </div>
          <div className="text-[10px] text-[var(--textColor-tertiary)]">
            {user.rollNumber}
          </div>
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full">
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt="user-icon"
            className="w-full h-full object-cover"
          /> */}
          <CgProfile size={32}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
