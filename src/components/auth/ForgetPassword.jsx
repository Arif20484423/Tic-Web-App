"use client";
import React, { useState } from "react";
import InputGroup from "../secure/registration/InputGroup";
import Button from "./Button";
import axios from "axios";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {
  const router = useRouter();
  const [rollState, setRoll] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const inputs = [
    {
      name: "Roll Number",
      value: rollState,
      type: "text",
      setValue: setRoll,
    },
    
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/mail`,
        {
          rollNumber: rollState,
        },
        {
          withCredentials: true,
        }
      );
      
      setErrorMessage(response.data.message)
    } catch (error) {
     
        console.error("Error during login:", error);
     
    }
  };

  const signinHandler = () => {
    router.push("/signin")
  };

  return (
    <>
      <div className="*:font-inter">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col py-[20px] justify-center items-center px-[50px] gap-y-[50px] border-t-[var(--primaryColor-500)] border-t-[3px] bg-[var(--primaryColor-050)]"
        >
          <div className="flex flex-col justify-center items-center gap-y-0">
            <div className="flex justify-center p-0 m-0 font-extrabold text-[35px]">
              Welcome
            </div>
            <div className="flex justify-center text-center p-0 m-0 text-[12px] text-[var(--textColor-secondary)] tracking-wide">
              Forgot your password
              <br /> enter your roll number to send you reset link
            </div>
          </div>
          <InputGroup inputs={inputs} />
          {errorMessage && (
            <div className="text-red-500 text-sm">{errorMessage}</div>
          )}
          <Button type="submit">Send Email</Button>
          <div
            className="flex justify-center text-[12px] text-[var(--textColor-primary)] hover:cursor-pointer"
            onClick={signinHandler}
          >
            Sign in
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
