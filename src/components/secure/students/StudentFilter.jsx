import React, { useState } from "react";
import Filter from "../filter-components/Filter";
import FilterInput from "../filter-components/FilterInput";
import SearchBox from "../filter-components/SearchBox";
import SortBy from "../filter-components/SortBy";
import FilterInput2 from "../filter-components/FilterInput2";
import Button from "./Button";
const StudentFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="mb-2 flex  gap-2">
      <Filter
        onClick={() => {
          setShowFilter(true);
        }}
      ></Filter>
      <div className=" absolute top-0 left-0 w-[100vw] h-[100vh] backdrop-blur-sm z-10">
        <div className=" bg-[var(--blackColor-050)] border-[1.5px] rounded-lg border-[var(--blackColor-700)] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className=" m-6 flex flex-col  justify-center items-center">
            <p className=" text-center font-bold">Filter By</p>
            <div className="bg-white p-3 mt-8 rounded-sm w-full">
              <div className="flex justify-between items-center">
              <p className="mb-5 font-bold">CGPA <span className="text-gray-500">(Returns result greater than entered value)</span></p>
              <p className="mb-5 font-bold text-blue-600">Clear Selections</p>
              </div>
              <div className="flex gap-9">
                <FilterInput label="10th" text="CGPA" />
                <FilterInput label="12th"  text="CGPA"/>
                <FilterInput label="UG"  text="CGPA"/>
                <FilterInput label="PG"  text="CGPA"/>
              </div>
            </div>
            <div className="bg-white p-3 mt-8 rounded-sm w-full">
              <div className="flex justify-between items-center">
              <p className="mb-5 font-bold">Gap Year <span className="text-gray-500">(Returns result less than entered value)</span></p>
              <p className="mb-5 font-bold text-blue-600">Clear Selections</p>
              </div>
              <div className="flex gap-4">
                <FilterInput2 label="Total Gap Years" text="Enter"  
                />
              </div>
            </div>
          <div className="flex w-full mt-8 max-w-[350px] justify-center items-center gap-[25px]">
            <Button
              size="medium"
              variant="filled"
              children
              type="submit"
            >
              Apply
            </Button>
            <Button
              size="medium"
              variant="outline"
              children
              type="button"
            >
              Cancel
            </Button>
          </div>
          </div>
        </div>
      </div>
      <SortBy></SortBy>
      <SearchBox></SearchBox>
    </div>
  );
};

export default StudentFilter;
