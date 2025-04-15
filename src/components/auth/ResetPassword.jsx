"use client";
import React, { useState } from "react";
import InputGroup from "../secure/registration/InputGroup";
import Button from "./Button";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";
const ResetPassword = () => {
  const router = useRouter();
  const [newPasswordState, setNewPassword] = useState("");
  const [confirmPasswordState, setConfirmPassword] = useState("");
  const params = useSearchParams();
  
  const inputs = [
    
    {
      name: "New Password",
      value: newPasswordState,
      type: "password",
      setValue: setNewPassword,
    },
    {
      name: "Confirm Password",
      value: confirmPasswordState,
      type: "password",
      setValue: setConfirmPassword,
    },
  ];
  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/reset-password`,
        {
          user:params.get("user"),
          token:params.get("token"),
          password:newPasswordState
        },
        {
          withCredentials: true,
        }
      );
      
      console.log(response)
      router.push("/reset-successful")
    } catch (error) {
     
        console.error("Error during login:", error);
     
    }
  };
  return (
    <>
      <div className="*:font-inter">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col justify-center items-center py-[20px] px-[50px] gap-y-[50px] border-t-[var(--primaryColor-500)] border-t-[3px] bg-[var(--primaryColor-050)]"
        >
          <div className=" flex flex-col gap-y-0 justify-center items-center">
            <div className="flex justify-center p-0 m-0 font-extrabold text-[24px] ">
              Reset Password!
            </div>
            <div className="flex justify-center max-w-[215px] p-0 m-0 text-[12px] text-[var(--textColor-secondary)] tracking-wide">
              Enter current password and new password to reset
            </div>
          </div>
          <InputGroup inputs={inputs} />
          <Button type="submit" onClick={handleSubmit}>
            Reset Password
          </Button>
        </form>
      </div>
    </>
  );
};
export default ResetPassword;
