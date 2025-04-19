"use client"
import React,{useState,useEffect} from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
const Input = ({ size, label, priority, type="text", placeholder = "Enter details", pattern, value, setValue, required, disabled }) => {
     const [show, setShow] = useState(false);
      const [typeState, setType] = useState("text");
      useEffect(() => {
        setType(type);
      }, []);
    const sizeClasses = {
        large: "w-full max-w-[350px]",
        small: "w-full max-w-[150px]"
    };

    const priorityColor = {
        required: "text-amber-600",
        optional: "text-[var(--textColor-disables)]"
    };

    return (
        <div className={`flex flex-col justify-center items-start ${sizeClasses[size]}`}>
            <div className="flex flex-row w-full justify-between mb-1">
                <span className="text-[12px] text-[var(--textColor-secondary)] font-medium">{label}</span>
                <span className={`text-[10px] ${priorityColor[priority]}`}>{priority}</span>
            </div>

            <div className=" w-full relative">

            
            {type === "file" ? (
                <label className="w-full h-[40px] flex items-center justify-between px-3 text-[12px] text-[var(--primaryColor-500)] bg-[var(--primaryColor-000)] rounded-[5px] border border-transparent cursor-pointer hover:border-[var(--primaryColor-500)]">
                    <span>{value?.name || placeholder}</span>
                    <input
                        type="file"
                        onChange={(e) => setValue(e.target.files[0])}
                        className="hidden"
                    />
                </label>
            ) : (
                <input
                    type={typeState}
                    placeholder={placeholder}
                    value={value}
                    pattern={pattern}
                    required={required}
                    disabled={disabled}
                    
                    className="w-full inline h-[40px] pl-[5px] text-[12px] text-[var(--primaryColor-500)] border border-transparent rounded-[5px] bg-[var(--primaryColor-000)]
                    placeholder:text-[12px] placeholder:text-[var(--textColor-disables)]
                    focus:placeholder:text-transparent focus:outline-none focus:border-[var(--secondaryColor-400)] disabled:bg-[var(--blackColor-100)] disabled:text-[var(--blackColor-400)]"
                    onChange={(e) => setValue(e.target.value)}
                />
            )}
            {type == "password" && (show ? (
                    <BsEye
                      className="  absolute right-[-25px] top-[13px]"
                      onClick={() => {
                        setType("password");
                        setShow(false);
                        
                      }}
                    />
                  ) : (
                    <BsEyeSlash
                      className=" absolute right-[-25px] top-[13px]"
                      onClick={() => {
                        setType("text");
                        setShow(true);
                      }}
                    />
                  ))}
            
                  </div>
        </div>
    );
};

export default Input;
