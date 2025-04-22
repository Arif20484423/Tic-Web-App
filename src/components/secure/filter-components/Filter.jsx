"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Option from "./Option";
const Filter = () => {
  const [hide, setHide] = useState(true);
  const ref = useRef(null);
  const toggleHandler = (e) => {
    e.stopPropagation();
    setHide((prev) => !prev);
  };
  useEffect(() => {
    const clickHandler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setHide(true);
    };
    window.addEventListener("click", clickHandler);
    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);
  const show = hide ? "hidden" : "block";
  const options = ["option1", "option2", "option3", "option4"];
  return (
    <>
      <div ref={ref} className="relative inline-block text-left">
        <button
          onClick={toggleHandler}
          className=" flex flex-row justify-between w-[120px] bg-[var(--blackColor-100)] text-[var(--textColor-primary)] text-[12px] px-4 py-2 rounded-[5px] hover:cursor-pointer"
        >
          Filter
          <IoIosArrowDown className="mt-0.5" />
        </button>

        <div
          className={`absolute mt-2 w-48 rounded-md  bg-white   ${show} group-hover:block`}
        >
          <div className="py-1">
            {options.map((option) => (
              <Option>{option}</Option>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Filter;
