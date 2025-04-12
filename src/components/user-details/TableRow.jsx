"use client"
import React, {useState} from "react";
import {MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank} from "react-icons/md";
import { IoIosCheckbox } from "react-icons/io";
import Data from "./Data";
const TableRow = ({serialNo="0", name="NA", dob="NA", gender="NA", contact="NA", altContact="NA", email="NA", altEmail="NA", collegeEmail="NA", regNo="NA", batch="NA", tenth="NA", twelfth="NA", UG="NA", PG="NA", gap="0", lans="NA", domain="NA", resume="NA", role="NA", allSelected=false}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleToggle = () => {
        setIsSelected(prev => !prev);
    };
    return(
        
        <tr className={isSelected || allSelected ? "bg-[var(--secondaryColor-100)] hover:bg-[var(--secondaryColor-100)]" : "hover:bg-[var(--primaryColor-050)]"}>
            <td>
                <Data size="extraSmall" type="regular"> 
                    <span onClick={handleToggle} className="cursor-pointer">
                        {isSelected || allSelected ? <IoIosCheckbox className="text-[var(--secondaryColor-500)]" /> : <MdOutlineCheckBoxOutlineBlank />}
                    </span>
                </Data>
            </td>
            <td><Data size="small" type="regular">{serialNo}</Data></td>
            <td><Data size="medium" type="regular">{name}</Data></td>
            <td><Data size="medium" type="regular">{dob}</Data></td>
            <td><Data size="small" type="regular">{gender}</Data></td>
            <td><Data size="medium" type="regular">{contact}</Data></td>
            <td><Data size="medium" type="regular">{altContact}</Data></td>
            <td><Data size="large" type="regular">{email}</Data></td>
            <td><Data size="large" type="regular">{altEmail}</Data></td>
            <td><Data size="large" type="regular">{collegeEmail}</Data></td>
            <td><Data size="medium" type="regular">{regNo}</Data></td>
            <td><Data size="small" type="regular">{batch}</Data></td>
            <td><Data size="small" type="regular">{tenth}</Data></td>
            <td><Data size="small" type="regular">{twelfth}</Data></td>
            <td><Data size="small" type="regular">{UG}</Data></td>
            <td><Data size="small" type="regular">{PG}</Data></td>
            <td><Data size="small" type="regular">{gap}</Data></td>
            <td><Data size="large" type="regular">{lans}</Data></td>
            <td><Data size="large" type="regular">{domain}</Data></td>
            <td><Data size="large" type="regular">{resume}</Data></td>
            <td><Data size="medium" type="regular">{role}</Data></td>
        </tr>
    )
}
export default TableRow;