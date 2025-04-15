"use client"
import React from "react";
const Input = ({size, label, priority, type, placeholder = "Enter details", value, setValue}) =>{
    const sizeClasses = {
        large: "w-full max-w-[350px]",
        small: "w-full max-w-[150px]"
    }
    const priorityColor = {
        required: "text-amber-600",
        optional: "text-[var(--textColor-disables)]"
    }
    return (
        <>
        <div className={`flex flex-col justify-center items-center ${sizeClasses[size]} `}>
            <div className="flex flex-row w-full justify-between">
                <span className=" text-[12px] text-[var(--textColor-secondary)] font-semibold mb-2">{label}</span>
                <span className={`text-[10px] ${priorityColor[priority]}`}>{priority}</span>
            </div>
            <input 
            type={type}
            placeholder={placeholder}
            value={value}
            className=" w-full h-[40px] pl-[5px] text-[12px] text-[var(--primaryColor-500)] border border-transparent rounded-[5px] bg-[var(--primaryColor-000)]
            placeholder:text-[12px] placeholder:text-[var(--textColor-disables]
            focus:placeholder:text-transparent focus:outline-none focus:border-[1.5px] focus:border-[var(--secondaryColor-300)]"
            onChange={(e) => setValue(e.target.value)}
            ></input>
        </div>
        </>
    )
}
export default Input;