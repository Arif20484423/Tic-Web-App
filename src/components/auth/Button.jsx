"use client"
import React from "react";
const Button = ({children, type = "button", ...props}) => {
    return(
        <>
        <button 
        type = {type}
        {...props}
        className=" w-[215px] h-[30px] bg-[var(--primaryColor-500)] border-0 rounded-[30px] text-[12px] text-[var(--textColor-white)] 
        hover:text-[14px]
        transition-all duration-300 ease-in-out"
        >
            {children}
        </button>
        </>
    )
}

export default Button;