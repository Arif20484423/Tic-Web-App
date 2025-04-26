"use client";
import React, { useState } from "react";
// import DataHead2 from '@/components/secure/table-components/Header';
import { Row } from "@/components/secure/table-components/Row";
import jsonToCsvExport from "json-to-csv-export";
import Button from "./Button";

const Table = ({ data,downloadData }) => {
  const [selectAll,setSelectAll] = useState(false);
  const headers= [
    { key: "PG", label: "PG" },
    { key: "UG", label: "UG" },
    { key: "altContact", label: "AltContact" },
    { key: "altEmail", label: "AltEmail" },
    { key: "collegeEmail", label: "CollegeEmail" },
    { key: "contact", label: "Contact" },
    { key: "dob", label: "DOB" },
    { key: "domain", label: "Domain" },
    { key: "email", label: "Email" },
    { key: "gapYear", label: "GapYear" },
    { key: "gender", label: "Gender" },
    { key: "languages", label: "Languages" },
    { key: "name", label: "Name" },
    { key: "resume", label: "Resume" },
    { key: "rollNumber", label: "RollNumber" },
    { key: "session", label: "Session" },
    { key: "tenth", label: "Tenth" },
    { key: "twelfth", label: "Twelfth" },
  ];

  return (
    <div className=" m-1 p-4 w-max ">
      <Button onClick={() => jsonToCsvExport({ data: downloadData, headers })} className="m-4">Download</Button>
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
