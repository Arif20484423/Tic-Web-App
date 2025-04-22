"use client";
import React from "react";
// import DataHead2 from '@/components/secure/table-components/Header';
import { Row } from "@/components/secure/table-components/Row";

const Table = ({ data }) => {
  return (
    <div className=" m-1 p-4 w-max ">
      {data.map((e, index) => {
        {/* console.log(e); */}
        return (
          <Row
            key={index}
            type={`${index == 0 ? "header" : "row"}`}
            rowData={e}
          />
        );
      })}
    </div>
  );
};
export default Table;
