import React,{useState} from "react";
import {MdOutlineCheckBoxOutlineBlank} from "react-icons/md";
import { IoIosCheckbox } from "react-icons/io";
import TableRow from "./TableRow";
import Data from "./Data";
const DataTable = ({students = []}) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleToggle = () =>{
        setIsSelected(prev => !prev)
    }
    return(
        <table>
            <thead>
            <tr className="bg-[var(--secondaryColor-600)] px-[5px]">
                <th>
                    <Data type="header" size="extraSmall">
                        <span onClick={handleToggle} className=" cursor-pointer">
                            {isSelected? <IoIosCheckbox className="text-[var(--primaryColor-000)]" /> : <MdOutlineCheckBoxOutlineBlank className="text-[var(--primaryColor-000)]"/>}
                        </span>
                    </Data>
                </th>
                {/* <th><Data type="header" size="extrasmall"></Data></th> */}
                <th><Data type="header" size="small">Sl. No.</Data></th>
                <th><Data type="header" size="medium">Name</Data></th>
                <th><Data type="header" size="medium">DOB</Data></th>
                <th><Data type="header" size="small">Gender</Data></th>
                <th><Data type="header" size="medium">Contact</Data></th>
                <th><Data type="header" size="medium">Alt Contact</Data></th>
                <th><Data type="header" size="large">Email</Data></th>
                <th><Data type="header" size="large">Alt Email</Data></th>
                <th><Data type="header" size="large">College Email</Data></th>
                <th><Data type="header" size="medium">Reg No</Data></th>
                <th><Data type="header" size="small">Batch</Data></th>
                <th><Data type="header" size="small">10th</Data></th>
                <th><Data type="header" size="small">12th</Data></th>
                <th><Data type="header" size="small">UG</Data></th>
                <th><Data type="header" size="small">PG</Data></th>
                <th><Data type="header" size="small">Gap</Data></th>
                <th><Data type="header" size="large">Languages</Data></th>
                <th><Data type="header" size="large">Domain</Data></th>
                <th><Data type="header" size="large">Resume</Data></th>
                <th><Data type="header" size="medium">Role</Data></th>
            </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                    <TableRow key={index} serialNo={index + 1} allSelected={isSelected} {...student}></TableRow>
                ))}
            </tbody>
        </table>
    )
}
export default DataTable;