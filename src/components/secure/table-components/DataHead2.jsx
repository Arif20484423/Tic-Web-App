"use client";

import React, { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import Data from "./Data";
const DataHead2 = () => {
  const sizes = ["extraSmall", "small", "medium", "large"];
  const [selectAll, setSelectAll] = useState(false);
  const toggleHandle = () => {
    setSelectAll((prev) => !prev);
  };
  const properties = [
    { label: "Sl. No.", size: sizes[1] },
    { label: "Reg No", size: sizes[2] },
    { label: "Batch", size: sizes[1] },
    { label: "Gender", size: sizes[1] },
    { label: "College Email", size: sizes[3] },
    { label: "Email", size: sizes[3] },
    { label: "Phone No", size: sizes[2] },
    { label: "Alt Email", size: sizes[3] },
    { label: "Alt Phone No", size: sizes[2] },
    { label: "Date of Birth", size: sizes[2] },
    { label: "Gap", size: sizes[1] },
    { label: "Domain", size: sizes[2] },
    { label: "Languages", size: sizes[3] },
    { label: "10th", size: sizes[1] },
    { label: "12th", size: sizes[1] },
    { label: "UG", size: sizes[1] },
    { label: "PG", size: sizes[1] },
    { label: "Resume", size: sizes[1] },
  ];
  return (
    <tr className="flex flex-row gap-x-1 py-[5px] bg-blue-500">
      <td onClick={toggleHandle} className="flex w-max cursor-pointer">
        <Data size={sizes[0]} variant="header">
          {selectAll ? (
            <MdCheckBox className="text-white" />
          ) : (
            <MdCheckBoxOutlineBlank className="text-white" />
          )}
        </Data>
      </td>
      {properties.map(({ label, size }, index) => (
        <td key={`${label}-${index}`}>
          <Data size={size} variant="header">
            {label}
          </Data>
        </td>
      ))}
    </tr>
  );
};
export default DataHead2;
