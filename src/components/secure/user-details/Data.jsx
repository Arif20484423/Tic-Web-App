"use client"

import React from "react"
const Data = ({size="medium", type="regular", children}) => {
    const sizeClasses = {
        extraSmall: "w-[30px]",
        small: "w-[70px]",
        medium: "w-[150px]",
        large:  "w-[230px]"
    }
    const typeClasses = {
        header: "font-medium text-[var(--textColor-white)]",
        regular: "text-[var(--textColor-primary)]"
    }
    return(
        <div className={`flex flex-row ${sizeClasses[size]} ${typeClasses[type]} h-[30px] px-[5px] justify-start items-center rounded-[5px] text-[12px]`}>{children}</div>
    )
}

export default Data;