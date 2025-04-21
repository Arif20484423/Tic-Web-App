"use client";
import React, { useState } from "react";
import TableRow from "./TableRow";

const MasterSheet = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [checkRows, setCheckRows] = useState({});
  const [isAllChecked, setIsAllChecked] = useState(false);

  const [tableData, setTableData] = useState([
    [
      "#",
      "Company",
      "HR Name",
      "Contact",
      "Alt. Contact",
      "Email",
      "Alt. Email",
      "Caller",
      "Date",
      "Comments",
    ],
    [
      "1",
      "ABC Corp",
      "John Doe",
      "1234567890",
      "9876543210",
      "john@abc.com",
      "alt@abc.com",
      "Alice",
      "2025-04-17",
      "Follow-up",
    ],
    [
      "2",
      "XYZ Ltd",
      "Jane Smith",
      "1231231234",
      "4564564567",
      "jane@xyz.com",
      "alt@xyz.com",
      "Bob",
      "2025-04-16",
      "Pending",
    ],
  ]);
  const columnWidths = [0.2, 1.5, 1.5, 1.1, 1.1, 2, 2, 1.2, 1.1, 1];

  const handleSelectAll = (isChecked) => {
    setIsAllChecked(isChecked);
    const newCheckedRows = {};
    if (isChecked) {
      tableData.slice(1).forEach((row, index) => {
        newCheckedRows[index] = true;
      });
    }
    setCheckRows(newCheckedRows);
  };

  const handleCheckboxChange = (index, isChecked) => {
    setCheckRows((prev) => {
      const updated = { ...prev, [index]: isChecked };
      const allChecked =
        Object.values(updated).length === tableData.slice(1).length &&
        Object.values(updated).every(Boolean);
      setIsAllChecked(allChecked);
      return updated;
    });
  };

  const handleCellChange = (rowIndex, cellIndex, newValue) => {
    setTableData((prev) => {
      const updated = [...prev];
      updated[rowIndex][cellIndex] = newValue;
      return updated;
    });
  };

  return (
    <div className="w-full px-[30px]">
      {/* Header Row */}
      <TableRow
        type="header"
        data={tableData[0]}
        columnWidths={columnWidths}
        isChecked={isAllChecked}
        onCheckboxChange={handleSelectAll}
      />

      {/* Data Rows */}
      {tableData.slice(1).map((row, rowIndex) => (
        <TableRow
          key={rowIndex}
          data={row}
          columnWidths={columnWidths}
          // isSelected={selectedRow === index}
          // onClick={() => setSelectedRow(index)}
          isSelected={!!checkRows[rowIndex]}
          isChecked={!!checkRows[rowIndex]}
          onCheckboxChange={(isChecked) =>
            handleCheckboxChange(rowIndex, isChecked)
          }
          onCellChange={(cellIndex, newValue) =>
            handleCellChange(rowIndex + 1, cellIndex, newValue)
          }
        />
      ))}
    </div>
  );
};

export default MasterSheet;
