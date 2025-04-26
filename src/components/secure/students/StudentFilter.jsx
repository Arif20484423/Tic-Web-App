import React, { useState } from "react";
import Filter from "../filter-components/Filter";
import FilterInput from "../filter-components/FilterInput";
import SearchBox from "../filter-components/SearchBox";
import SortBy from "../filter-components/SortBy";
const StudentFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="mb-2 flex  gap-2">
      <Filter
        onClick={() => {
          setShowFilter(true);
        }}
      ></Filter>
      <div className="absolute top-0 left-0 w-[100vw] h-[100vh] backdrop-blur-sm z-10">
        <div className="  bg-[var(--blackColor-050)] border-[1.5px] rounded-lg border-[var(--blackColor-700)] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className=" m-4">
            <p className=" text-center font-bold">Filter By </p>
            <div className="bg-white p-3 mt-5 rounded-sm">
              <p className="mb-5">CGPA</p>
              <div className="flex gap-4">
                <FilterInput label="PG min" />
                <FilterInput label="UG min" />
                <FilterInput label="12th min" />
                <FilterInput label="10th min" />
              </div>
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
