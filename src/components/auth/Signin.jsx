"use client";
import React, { useEffect, useState } from "react";
import InputGroup from "./InputGroup";
import Button from "./Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Signin = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const [emailState, setEmail] = useState("");
  const [passwordState, setPassword] = useState("");
  const inputs = [
    {
      name: "Roll Number",
      value: emailState,
      type: "text",
      setValue: setEmail,
    },
    {
      name: "Password",
      value: passwordState,
      type: "password",
      setValue: setPassword,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/login`,
        {
          rollNumber: emailState,
          password: passwordState,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Login successful:", response.data);
      setLoading(false)
      toast.success("Login successful, redirecting to dashboard");
      router.push("/dashboard");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.error("Error during login : ", error.response.data.message);
        toast.error(error.response.data.message)
      } else {
        toast.error("Some error occurred")
        console.error("Error during login : ", error);
      }
    }
  };

  const forgotPasswordHandler = () => {
    router.push("/forget-password")
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
            <div className="flex justify-center p-0 m-0 text-[12px] text-[var(--textColor-secondary)] tracking-wide">
              Please login to continue
            </div>
          </div>
          <InputGroup inputs={inputs} />
          
          <Button type="submit" loading={loading}>Login</Button>
          <div
            className="flex justify-center text-[12px] text-[var(--textColor-primary)] hover:cursor-pointer"
            onClick={forgotPasswordHandler}
          >
            Forgot your password?
          </div>
        </form>
      </div>

     
    </>
  );
};

export default Signin;
