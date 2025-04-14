"use client";
import React, { useState } from "react";
import InputGroup from "../InputGroup";
import Button from "../Button";
import axios from "axios";
import  { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth.context"
const Signin = () => {
    const router = useRouter()
    const {login} = useAuth();
    const [emailState, setEmail] = useState("");
    const [passwordState, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); 
    const inputs = [
        { name: "Roll Number", value: emailState, type: "text", setValue: setEmail },
        { name: "Password", value: passwordState, type: "password", setValue: setPassword },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
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
            login();
             console.log("Login successful:", response.data);
            alert("Login successful!");
            router.push("/");
            
        } catch (error) {
            if(error.response){
                console.error("Error during login:", error.response.data.message)
            }
            else{
                console.error("Error during login:", error);
            }
            
         }
    };

    const forgotPasswordHandler = () => {
        console.log("Forgot password clicked");
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
                    {errorMessage && (
                        <div className="text-red-500 text-sm">{errorMessage}</div>
                    )}
                    <Button type="submit">Login</Button>
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