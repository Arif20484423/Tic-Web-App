"use client";
import React, { useState } from "react";
import InputGroup from "./InputGroup";
import Button from "./Button";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
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
      pattern:"^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{6,}$"
    },
    {
      name: "Confirm Password",
      value: confirmPasswordState,
      type: "password",
      setValue: setConfirmPassword,
    },
  ];
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(newPasswordState!=confirmPasswordState){
      toast.error("New Password and Confirm Password should be same")
      return ;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/reset-password`,
        {
          user: params.get("user"),
          token: params.get("token"),
          password: newPasswordState,
        },
        {
          withCredentials: true,
        }
      );
      setLoading(false);
      toast.success("Password reset successful");
      console.log(response);
      router.push("/reset-successful");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.error("Error during resetting password : ", error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        toast.error("Some error occurred");
        console.error("Error during resetting password : ", error);
      }
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
            <div className="flex justify-center max-w-[215px] p-0 m-0 text-[12px] text-center text-[var(--textColor-secondary)] tracking-wide">
              Enter current password and new password to reset
            </div>
          </div>
          <InputGroup inputs={inputs} />
          <div className="flex max-w-[215px] p-0 m-0 text-[11px]  text-[var(--textColor-secondary)] ">
              <ul className=" list-disc">
                <li>Must contain atleast one capital letter</li>
                <li>Must contain atleast one small letter</li>
                <li>Must contain atleast one digit</li>
                <li>Must contain atleast one special character</li>
              </ul>
            </div>
          <Button type="submit" loading={loading}>
            Reset Password
          </Button>
        </form>
      </div>
    </>
  );
};
export default ResetPassword;
