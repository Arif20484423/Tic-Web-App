"use client";

import React, { useEffect, useState } from "react";
import Data from "./Data";
export const Row = ({ type = "row", rowData, selectAll, setSelectAll }) => {
  const sizes = ["extraSmall", "small", "medium", "large"];
  const [rowSelect, setRowSelect] = useState(false);

  const variant = {
    header:
      " flex flex-row gap-x-1 py-[3px] mb-1  rounded-[5px] border-[1.5px] border-[var(--blackColor-500)] w-max bg-[var(--blackColor-500)]",
    row: rowSelect
      ? `flex flex-row gap-x-1 py-[3px]  mb-1  rounded-[5px] w-max border-[1.5px] border-transparent hover:border-[var(--blackColor-100)] bg-[var(--blackColor-100)]`
      : `flex flex-row gap-x-1 py-[3px]  mb-1  rounded-[5px]  w-max  border-[1.5px] border-transparent hover:border-[var(--blackColor-100)] bg-white`,
  };
  useEffect(() => {
    setRowSelect(selectAll);
  }, [selectAll]);
  return (
    <div
      className={`${type == "header" ? variant.header : variant.row}`}
      onClick={() => {
        if (type == "header") {
          setSelectAll((t) => !t);
        } else {
          setRowSelect((t) => !t);
        }
      }}
    >
      <Data size="small">
        <input
          type="checkbox"
          checked={rowSelect}
          className="  "
          onChange={() => {}}
        />
      </Data>
      {rowData.map(({ label, size }, index) => {
        return (
          <div key={`${label}-${index}`}>
            <Data
              size={size}
              variant={`${type == "header" ? "header" : "regular"}`}
            >
              {label}
            </Data>
          </div>
        );
      })}
    </div>
  );
};
