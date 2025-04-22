import React from "react";
import DataHead2 from "@/components/secure/table-components/DataHead2";
import Filter from "@/components/secure/filter-components/Filter";

const page = () => {
  return (
    <>
      {/* <div className="relative flex justify-between">
        <span>Left</span>
        <span>Right</span>
        <div className="absolute top-full mt-2 bg-white p-2 shadow-md">
          I'm a popup under this box!
        </div>
      </div> */}
      <Filter />
    </>
  );
};
export default page;
