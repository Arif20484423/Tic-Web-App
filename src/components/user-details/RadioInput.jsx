"use client"
import React from "react";

const RadioInput = ({ size,label, priority, value, setValue }) => {
    const sizeClasses = {
        large: "w-[350px]",
        small: "w-[150px]"
    };
    const priorityColor = {
        required: "text-amber-600",
        optional: "text-[var(--textColor-disables)]"
    };

    return (
        <>
            <div className={`flex w-full w-max[350px] flex-col justify-center items-center ${sizeClasses[size]} `}>
                <div className="flex flex-row w-full justify-between">
                    <span className="text-[12px] text-[var(--textColor-secondary)] font-medium">{label}</span>
                    <span className={`text-[10px] ${priorityColor[priority]}`}>{priority}</span>
                </div>
                <div className="flex flex-col sm:flex-row  justify-between w-[80%] *:text-[12px] m-3">
                    <label className="flex items-center w-max[100px]">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={value === "male"}
                            className="mr-2"
                            onChange={(e) => setValue(e.target.value)}
                        />
                        Male
                    </label>

                    <label className="flex items-center w-max[100px]">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={value === "female"}
                            className="mr-2"
                            onChange={(e) => setValue(e.target.value)}
                        />
                        Female
                    </label>
                    <label className="flex items-center w-max[100px]">
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={value === "other"}
                            className="mr-2"
                            onChange={(e) => setValue(e.target.value)}
                        />
                        Other
                    </label>
                </div>
            </div>
        </>
    );
};

export default RadioInput;