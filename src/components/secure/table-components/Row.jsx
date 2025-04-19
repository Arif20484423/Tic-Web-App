"use client";

import React, { useState } from "react";
import Data from "./Data";
export const Row = ({ type = "row", rowData }) => {
  const sizes = ["extraSmall", "small", "medium", "large"];
  const [selectAll, setSelectAll] = useState(false);
  const toggleHandle = () => {
    setSelectAll((prev) => !prev);
  };
  const variant = {
    header:
      " flex flex-row gap-x-1 py-[5px] mb-1  rounded-[5px] w-max bg-blue-500",
    row: "flex flex-row gap-x-1 py-[5px]  mb-1  rounded-[5px]  w-max bg-white",
  };

  return (
    <div className={`${type == "header" ? variant.header : variant.row}`}>
      {rowData.map(({ label, size, editable }, index) => {
        return (
          <div key={`${label}-${index}`}>
            <Data
              size={size}
              variant={`${type == "header" ? "header" : "regular"}`}
              editable={`${type == "header" ? false : editable}`}
            >
              {label}
            </Data>
          </div>
        );
      })}
    </div>
  );
};
