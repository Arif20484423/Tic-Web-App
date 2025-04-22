"use client";
import React, { useState } from "react";
// import DataHead2 from '@/components/secure/table-components/Header';
import { Row } from "@/components/secure/table-components/Row";

const Table = ({ data }) => {
  const [selectAll,setSelectAll] = useState(false);
  return (
    <div className=" m-1 p-4 w-max ">
      {data.map((e, index) => {
        {/* console.log(e); */}
        return (
          <Row
            key={index}
            type={`${index == 0 ? "header" : "row"}`}
            selectAll={selectAll}
            setSelectAll={setSelectAll}
            rowData={e}
          />
        );
      })}
    </div>
  );
};
export default Table;
