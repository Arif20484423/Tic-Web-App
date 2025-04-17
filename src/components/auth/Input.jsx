"use client";
import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
const Input = ({ config }) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("text");
  useEffect(() => {
    setType(config.type);
  }, []);
  return (
    <div>
      <input
        type={type}
        placeholder={config.name}
        value={config.value}
        pattern={config.pattern}
        className=" w-[215px] text-[12px] border-0 border-b border-[var(--blackColor-300)] bg-transparent
            placeholder:text-[12px] placeholder:text-[var(--textColor-tertiary)]
            focus:placeholder:text-transparent focus:outline-none focus:border-[var(--blackColor-500)] focus:bg-transparent focus:pl-0"
        onChange={(e) => config.setValue(e.target.value)}
      />
      {config.type == "password" &&
        (show ? (
          <BsEye
            className=" inline"
            onClick={() => {
              setType("password");
              setShow(false);
            }}
          />
        ) : (
          <BsEyeSlash
            className=" inline"
            onClick={() => {
              setType("text");
              setShow(true);
            }}
          />
        ))}
    </div>
  );
};

export default Input;
