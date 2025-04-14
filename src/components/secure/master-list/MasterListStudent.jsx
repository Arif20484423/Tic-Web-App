"use client";
import React, { useState } from "react";
// import Input from "./Input";
import Input from "./Input";
import Button from "./Button";

const MasterListStudent = () => {
  const [company, setCompany] = useState("");
  const [HR, setHR] = useState("");
  const [email, setEmail] = useState("");
  const [altEmail, setAltEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [altContactNo, setAltContactNo] = useState("");

  return (
    <div className="flex flex-col items-center p-[50px]">
      <form className="flex flex-col gap-[25px] w-full  sm:min-w-[350px] sm:w-full sm:max-w-[450px] md:w-full md:min-w-[500px] md:max-w-[1000px] bg-[var(--blackColor-050)]">
        <div className="flex flex-col justify-center items-center md:flex-row gap-[25px]">
          <Input
            size="large"
            label="Company"
            priority="required"
            type="text"
            placeholder="Enter Details"
            value={company}
            setValue={setCompany}
          />
          <Input
            size="large"
            label="HR Name"
            priority="required"
            type="text"
            placeholder="Enter Details"
            value={HR}
            setValue={setHR}
          />
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row gap-[25px]">
          <Input
            size="large"
            label="Email"
            priority="required"
            type="email"
            placeholder="Enter Details"
            value={email}
            setValue={setEmail}
          />
          <Input
            size="large"
            label="Alt. Email"
            priority="optional"
            type="email"
            placeholder="Enter Details"
            value={altEmail}
            setValue={setAltEmail}
          />
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row gap-[25px]">
          <Input
            size="large"
            label="Contact No"
            priority="required"
            type="text"
            placeholder="Enter Details"
            value={contactNo}
            setValue={setContactNo}
          />
          <Input
            size="large"
            label="Alt. Contact No."
            priority="optional"
            type="text"
            placeholder="Enter Details"
            value={altContactNo}
            setValue={setAltContactNo}
          />
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row gap-[10px] md:gap-[25px]">
          <Button size="medium" variant="filled" type="submit">Button1</Button>
          <Button size="medium" variant="outline" type="submit">Button2</Button>
        </div>
      </form>
    </div>
  );
};
export default MasterListStudent;
