"use client"
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const ResetSuccessful = () =>{
    const router = useRouter()
    const clickHandler = () =>{
        router.push("/signin")
    }
    return (
        <>
        <div className="flex justify-center items-center w-full h-full">
            <div className="flex flex-col justify-center items-center gap-y-[25px] p-0 m-0">
                <div className=" text-[29px] font-extrabold text-[var(--textColor-primary)]">Password Reset Successfully</div>
                <Button onClick={clickHandler}>Back to login</Button>
            </div>
        </div>
        </>
    )
}
export default ResetSuccessful;