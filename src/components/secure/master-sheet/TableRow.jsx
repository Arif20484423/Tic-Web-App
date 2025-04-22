"use client";
import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

const TableRow = ({
  type = "default",
  data = [],
  columnWidths = [],
  isSelected = false,
  onCheckboxChange,
  isChecked,
  onCellChange,
}) => {
  const [editingCell, setEditingCell] = useState(null);
  const [hoveredCell, setHoveredCell] = useState({ row: null, cell: null });
  // Define styles for different row states
  const baseStyle = "text-[12px] flex items-center px-[10px] py-[6px] m-[4px]";
  const styles = {
    default: `${baseStyle} bg-white hover:bg-[var(--blackColor-100)] cursor-pointer`,
    header: `${baseStyle} bg-[var(--blackColor-500)] text-white font-bold`,
    selected: `${baseStyle} bg-[var(--blackColor-100)] `,
    // hover: `${baseStyle} bg-[var(--blackColor-200)] `,
  };

  // Determine the row style based on the type and selection state
  const rowStyle = isSelected
    ? styles.selected
    : styles[type] || styles.default;

  return (
    <div className={rowStyle}>
      <div
        className="flex items-center justify-center px-2"
        style={{ flex: "0 0 auto", width: "25px" }}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) =>
            onCheckboxChange && onCheckboxChange(e.target.checked)
          }
          style={{ width: "14px", height: "14px" }}
        />
      </div>

      {data.map((cell, index) => (
        <div
          key={index}
          className="relative flex items-center px-2"
          style={{
            flex: columnWidths[index] || 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={() => setHoveredCell({ row: data, cell: index })} // Track hovered cell
          onMouseLeave={() => setHoveredCell({ row: null, cell: null })}
          onClick={() => setEditingCell(index)}
        >
          {type === "header" || index === 0 ? (
            <span>{cell}</span>
          ) : editingCell === index ? ( // Check if the cell is in edit mode
            index === data.length - 2 ? ( // Check if the cell is the date column
              <input
                type="date"
                value={cell}
                onChange={(e) =>
                  onCellChange && onCellChange(index, e.target.value)
                }
                onBlur={() => setEditingCell(null)} // Exit edit mode on blur
                className="w-full bg-transparent border border-[var(--blackColor-100)] outline-none"
                autoFocus // Automatically focus the input when in edit mode
              />
            ) : (
              <input
                type="text"
                value={cell}
                onChange={(e) =>
                  onCellChange && onCellChange(index, e.target.value)
                }
                onBlur={() => setEditingCell(null)} // Exit edit mode on blur
                onKeyDown={(e) => {
                  if (e.key === "Enter") setEditingCell(null); // Exit edit mode on Enter
                }}
                className="w-full bg-transparent border border-[var(--blackColor-100)] outline-none"
                autoFocus // Automatically focus the input when in edit mode
              />
            )
          ) : (
            <span>{cell}</span>
          )}

          {/* Pencil Icon */}
          {hoveredCell.cell === index &&
            editingCell !== index &&
            type !== "header" &&
            index !== 0 && (
              // index !== data.length - 2 &&
              <FaPencilAlt
                className="absolute right-1  text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setEditingCell(index)} // Enter edit mode when pencil is clicked
              />
            )}
        </div>
      ))}
    </div>
  );
};

export default TableRow;
