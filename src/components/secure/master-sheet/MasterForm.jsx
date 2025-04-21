"use client";
import React, { useState } from "react";
// import Input from "./Input";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
import toast from "react-hot-toast";

const MasterForm = () => {
  const [company, setCompany] = useState("");
  const [HR, setHR] = useState("");
  const [email, setEmail] = useState("");
  const [altEmail, setAltEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [altContactNo, setAltContactNo] = useState("");
  const handleForm = async (e) =>  {
    e.preventDefault();
      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/mastersheet`, {
          company,
          hrName: HR,
          email,
          altEmail,
          contactNumber: contactNo,
          altContactNumber:altContactNo
        }, {
          withCredentials: true
        })
        if(res.status === 200) {
          toast.success("Details Added Successfully");
          setCompany("");
          setHR("");
          setEmail("");
          setAltEmail("");
          setContactNo("");
          setAltContactNo("");
        }
      } catch (error) {
        console.log(error);
        toast.error("Error Adding Details");
      }
  }

  const handleDiscard = () => {
    setCompany("");
    setHR("");
    setEmail("");
    setAltEmail("");
    setContactNo("");
    setAltContactNo("");
  }
  return (
    <div className="flex flex-col items-center p-[50px]">
      <form className="flex flex-col gap-[25px] w-full  sm:min-w-[350px] sm:w-full sm:max-w-[450px] md:w-full md:min-w-[500px] md:max-w-[1000px] bg-[var(--blackColor-050)]" onSubmit={handleForm}>
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
          <Button size="medium" variant="filled" type="submit">Submit</Button>
          <Button size="medium" variant="outline" onClick={handleDiscard}>Discard</Button>
        </div>
      </form>
    </div>
  );
};
export default MasterForm;
