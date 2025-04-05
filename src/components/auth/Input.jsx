"use client";
import React from "react";

const Input = ({config})=>{
    return (
        <input
            type={config.type}
            placeholder={config.name}
            value={config.value}
            className=" w-[215px] text-[12px] border-0 border-b border-[var(--blackColor-300)] bg-transparent
            placeholder:text-[12px] placeholder:text-[var(--textColor-tertiary)]
            focus:placeholder:text-transparent focus:outline-none focus:border-[var(--blackColor-500)] focus:bg-transparent focus:pl-0"
            onChange={(e) => config.setValue(e.target.value)}
        />
    )
};

export default Input;