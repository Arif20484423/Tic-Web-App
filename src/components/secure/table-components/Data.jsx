import React from 'react'
import { RiEditFill } from "react-icons/ri";
const Data = ({size="medium", variant="regular", editable=false, children}) => {
    const editIcon = editable ? <RiEditFill className="text-[10px] text-black
    hover:cursor-pointer"/> : <></>;
    const sizeClasses = {
        extraSmall: "w-[30px]",
        small: "w-[50px]",
        medium: "w-full min-w-[100px] max-w-[150px]",
        large: "w-full min-w-[150px] max-w-[200px]"
    }
    const variantClasses = {
        header: "text-[11px] text-[var(--textColor-white)] font-medium",
        regular: "text-[11px] text-[var(--textColor-secondary)]"
    }
    return (
        <div className={`group flex flex-row h-[30px] px-2 justify-between items-center ${sizeClasses[size]} ${variantClasses[variant]}`}>
            <span>{children}</span>
            <span className=' opacity-0 transition-opacity group-hover:opacity-200'>{editIcon}</span>
        </div>
    )
}
export default Data;
