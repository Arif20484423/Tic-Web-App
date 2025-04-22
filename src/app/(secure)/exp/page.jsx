"use client"
import React from "react";
import Table from "@/components/secure/table-components/Table";
import Filter from "@/components/secure/filter-components/Filter";
import SortBy from "@/components/secure/filter-components/SortBy";
import SearchBox from "@/components/secure/filter-components/SearchBox";
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
  // return <Table data={data} />;
  return (
    <SearchBox />
  )
};

export default page;
