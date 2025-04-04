"use client";
import React from "react";

const Input = ({config})=>{
    return (
        <input
            type={config.type}
            placeholder={config.name}
            value={config.value}
            className=" border-0 border-b border-[var(--blackColor-400)] focus:outline-none focus:border-[var(--blackColor-500)]"
            onChange={(e) => config.setValue(e.target.value)}
        />
    )
};

export default Input;