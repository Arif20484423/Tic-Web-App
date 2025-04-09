"use client"
import React, { useState } from "react";
import SideNavbar from "./SideNavbar";
import Input from "./Input";
import Button from "./Button";
import RadioInput from "./RadioInput";
const UserDetails = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [altEmail, setAltEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [altPhoneNumber, setAltPhoneNumber] = useState('');
    const [collegeEmail, setCollegeEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [batch, setBatch] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [languages, setLanguages] = useState('');
    const [domain, setDomain] = useState('');
    const [gapYear, setGapYear] = useState('');
    const [tenth, setTenth] = useState('');
    const [twelth, setTwelth] = useState('');
    const [ug, setUg] = useState('');
    const [pg, setPg] = useState('');
    const [resume,setResume]=useState('');

    return (
        <>
        <div className=" flex flex-row h-full w-full bg-[var(--blackColor-050)]">
            {/* sidebar            */}
            <SideNavbar></SideNavbar>
            {/* main content */}
            <div className="flex-1 w-min-[400px] ">
                {/* header */}
                <div className="flex justify-between item-center h-[70px] w-full bg-[var(--blackColor-050)] px-[30px] py-[10px]">
                        <div id="title">
                            <div className="text-[20px] font-bold text-[var(--primaryColor-500)] ">Account Information</div>
                            <div className="text-[10px] text-[var(--textColor-tertiary)]">&larr; Back</div>
                        </div>
                        <div className="flex flex-row items-center gap-x-4" id="hello-user">  
                                <div className="text-right">
                                    <div className="text-[17px] font-extrabold text-[var(--primaryColor-500)]">
                                        Hello, {name}
                                    </div>
                                    <div className="text-[10px] text-[var(--textColor-tertiary)]">{rollNumber}</div>
                                </div>
                                <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full">
                                    <img 
                                    src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                                    alt="user-icon" 
                                    className="w-full h-full object-cover" 
                                    />
                                </div> 
                        </div>
                </div>

                {/* user form */}
                <div className="flex justify-center h-[calc(100vh-70px)">
                    <div className="grid grid-cols-2 gap-4 p-4 w-[80%] m-auto bg-[var(--blackColor-050)] ">
                        <Input size="large" label="Name" priority="required" type="text" placeholder="Enter Details" value={name} setValue={setName}/>
                        <Input size="large" label="Email" priority="optional" type="email" placeholder="Enter Details" value={email} setValue={setEmail}/>
                        <Input size="large" label="Alternative Email" priority="optional" type="email" placeholder="Enter Details" value={altEmail} setValue={setAltEmail}/>
                        <Input size="large" label="Phone Number" priority="required" type="number" placeholder="Enter Details" value={phoneNumber} setValue={setPhoneNumber}/>
                        <Input size="large" label="Alternative Phone Number" priority="optional" type="number" placeholder="Enter Details" value={altPhoneNumber} setValue={setAltPhoneNumber}/>
                        <Input size="large" label="College Email" priority="required" type="email" placeholder="Enter Details" value={collegeEmail} setValue={setCollegeEmail}/>
                        <Input size="large" label="Date Of Birth" priority="required" type="date" placeholder="Enter Details" value={dateOfBirth} setValue={setDateOfBirth}/>
                        <RadioInput size="large" label="Gender" priority="required"  value={collegeEmail} setValue={setCollegeEmail}/>
                        <Input size="large" label="Batch" priority="required" type="number" placeholder="Enter Details" value={batch} setValue={setBatch}/>
                        <Input size="large" label="Roll Number" priority="required" type="email" placeholder="Enter Details" value={rollNumber} setValue={setRollNumber}/>
                        <Input size="large" label="Languages" priority="optional" type="text" placeholder="Enter Details" value={languages} setValue={setLanguages}/>
                        <Input size="large" label="Domain" priority="optional" type="text" placeholder="Enter Details" value={domain} setValue={setDomain}/>
                        <Input size="large" label="Gap Year" priority="required" type="number" placeholder="Enter Details" value={gapYear} setValue={setGapYear}/>
                        
                        <Input size="large" label="Resume" priority="required" type="text" placeholder="Enter Drive Link" value={resume} setValue={setResume}/>
                        <div className="grid grid-cols-2 w-[350px] gap-13">
                        <Input size="small" label="10th" priority="required" type="text" placeholder="Enter Details" value={tenth} setValue={setTenth}/>
                        <Input size="small" label="12th" priority="required" type="text" placeholder="Enter Details" value={twelth} setValue={setTwelth}/>
                        </div>
                        <div className="grid grid-cols-2 w-[350px] gap-13">
                        <Input size="small" label="UG" priority="required" type="text" placeholder="Enter Details" value={ug} setValue={setUg}/>
                        <Input size="small" label="PG" priority="required" type="text" placeholder="Enter Details" value={pg} setValue={setPg}/>
                        </div>
                        
                       
                        <div className="grid grid-cols-2 w-[350px] gap-[50px]">
                            <Button size = "medium" variant = "filled" children type = "button">Save Changes</Button>
                            <Button size = "medium" variant = "outline" children type = "button">Discard Changes</Button>
                        </div>
                    </div> 
                </div>                
            </div>
        </div>
        </>
    )
}
export default UserDetails;