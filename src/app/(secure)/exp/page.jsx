"use client"
import React from "react";
import Table from "@/components/secure/table-components/Table";
const page = () => {
  const data = [
    [
      { label: "Reg Num", size: "large", editable: false },
      { label: "Batch", size: "medium", editable: false },
      { label: "Name", size: "large", editable: true },
    ],
    [
      { label: "2023PGCSCA043", size: "large", editable: false },
      { label: "2023-2026", size: "medium", editable: false },
      { label: "Md Arif", size: "large", editable: true },
    ],
    [
      { label: "2023PGCSCA050", size: "large", editable: false },
      { label: "2023-2026", size: "medium", editable: false },
      { label: "Sudip Das", size: "large", editable: true },
    ],
    [
      { label: "2023PGCSCA033", size: "large", editable: false },
      { label: "2023-2026", size: "medium", editable: false },
      { label: "Abhay Sharma", size: "large", editable: true },
    ],
    [
      { label: "2023PGCSCA0xx", size: "large", editable: false },
      { label: "2023-2026", size: "medium", editable: false },
      { label: "Royan Topno", size: "large", editable: true },
    ],
  ];
  return <Table data={data} />;
};

export default page;
