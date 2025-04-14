"use client";
import React, { useState } from "react";
import InputGroup from "../secure/registration/InputGroup";
import Button from "./Button";
const ResetPassword = () => {
  const [emailState, setEmail] = useState("");
  const [oldPasswordState, setOldPassword] = useState("");
  const [newPasswordState, setNewPassword] = useState("");
  const inputs = [
    { name: "Email", value: emailState, type: "email", setValue: setEmail },
    {
      name: "Old Password",
      value: oldPasswordState,
      type: "password",
      setValue: setOldPassword,
    },
    {
      name: "New Password",
      value: newPasswordState,
      type: "password",
      setValue: setNewPassword,
    },
  ];
  const handleSubmit = () => {
    console.log("submit button clicked");
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
              Forgot Password!
            </div>
            <div className="flex justify-center max-w-[215px] p-0 m-0 text-[12px] text-[var(--textColor-secondary)] tracking-wide">
              Enter email id and new password to reset
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
