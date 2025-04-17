"use client"
import React from "react";
const Button = ({size = "large", variant = "filled", children, type = "button",loading,disable , ...props}) => {
    const sizeClasses = {
        large: "w-[215px]",
        medium: "w-[150px]"
    }
    const variantClasses = {
        filled:"bg-[var(--primaryColor-500)] text-[var(--textColor-white)]",
        outline: "border-1 border-[var(--primaryColor-500)] bg-transparent text-[var(--textColor-primary)]"
    }
    return(
        <>
        <button 
        type = {type}
        {...props}
        className={` ${sizeClasses[size]} h-[30px] ${variantClasses[variant]} rounded-[30px] text-[12px] 
        hover:text-[14px]
        transition-all duration-300 ease-in-out cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed`}
        disabled={loading}
        >
            {loading?<div
            className="flex justify-center text-[12px] text-[var(--textColor-primary)] "
          >
            <img src="/buttonloader.svg" width={30} alt="" />
          </div>:children }
            
        </button>
        </>
    )
}

export default Button;