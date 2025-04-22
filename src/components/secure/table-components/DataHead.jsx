"use client";

import React, { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import Data from "./Data";
const DataRow = () => {
  const sizes = ["extraSmall", "small", "medium", "large"];
  const sizeClasses = {
    checkBox: sizes[0],
    slNo: sizes[1],
    name: sizes[2],
    regNo: sizes[2],
    batch: sizes[1],
    gender: sizes[1],
    collegeEmail: sizes[3],
    email: sizes[3],
    PhNo: sizes[2],
    altEmail: sizes[3],
    altPh: sizes[2],
    dob: sizes[2],
    gap: sizes[1],
    domain: sizes[2],
    lan: sizes[3],
    tenth: sizes[1],
    twelfth: sizes[1],
    ug: sizes[1],
    pg: sizes[1],
    resume: sizes[3],
  };

  
  const [selectAll, setSelectAll] = useState(false);
  const toggleHandle = () => {
    setSelectAll((prev) => !prev);
  };
  const checkBox = (
    <td onClick={toggleHandle} className="flex w-max cursor-pointer">
      <Data size={sizeClasses.checkBox}>
        {selectAll ? (
          <MdCheckBox className="text-white" />
        ) : (
          <MdCheckBoxOutlineBlank className="text-white" />
        )}
      </Data>
    </td>
  );
  const properties = [
    {label: {checkBox}, size: sizes[0]},
    {label: "Sl. No.", size: sizes[1]},
    {label: "Reg No", size: sizes[2]},
    {label: "Batch", size: sizes[1]},
    {label: "Gender", size: sizes[1]},
    {label: "College Email", size: sizes[3]},
    {label: "Email", size: sizes[3]},
    {label: "Phone No", size: sizes[2]},
    {label: "Alt Email", size: sizes[3]},
    {label: "Alt Phone No", size: sizes[2]},
    {label: "Date of Birth", size: sizes[2]},
    {label: "Gap", size: sizes[1]},
    {label: "Domain", size: sizes[2]},
    {label: "Languages", size: sizes[3]},
    {label: "10th", size: sizes[1]},
    {label: "12th", size: sizes[1]},
    {label: "UG", size: sizes[1]},
    {label: "PG", size: sizes[1]},
    {label: "Resume", size: sizes[1]}
  ]
  const HeaderData = ({ size, children }) => {
    return (
      <Data size={size} variant="header">
        {children}
      </Data>
    );
  };

  
  return (
    <th className="flex flex-row py-1 gap-x-1 bg-blue-500">
      <td onClick={toggleHandle} className="flex w-max cursor-pointer">
        <Data size={sizeClasses.checkBox}>
          {selectAll ? (
            <MdCheckBox className="text-white" />
          ) : (
            <MdCheckBoxOutlineBlank className="text-white" />
          )}
        </Data>
      </td>
      <td>
        <HeaderData size={sizeClasses.slNo}>Sl. No.</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.name}>Name</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.regNo}>Reg. No.</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.batch}>Batch</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.gender}>Gender</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.collegeEmail}>College Email</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.email}>Email</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.PhNo}>Phone No.</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.altEmail}>Alt Email</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.altPh}>Alt. Phone No.</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.dob}>Date of Birth</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.gap}>Gap</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.domain}>Domain</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.lan}>Languages</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.tenth}>10th</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.twelfth}>12th</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.ug}>UG</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.pg}>PG</HeaderData>
      </td>
      <td>
        <HeaderData size={sizeClasses.resume}>Resume</HeaderData>
      </td>
    </th>
  );
};
export default DataRow;
