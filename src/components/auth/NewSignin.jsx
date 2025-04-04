"use client";
import React, {useState} from "react";
import InputGroup from "./InputGroup";

const NewSignin = () => {
    const [emailState, setEmail] = useState("");
    const [passwordState, setPassword] = useState("");
    const inputs = [
        {name: "email", value: emailState, type: "email", setValue: setEmail},
        {name: "password", value: passwordState, type: "password", setValue: setPassword}
    ];
    return(
        <>
        <div className="*:font-inter">
            <div className=" flex flex-col pt-[20px] pb-[20px] pl-[50px] pr-[50px] gap-y-[50px] bg-[var(--primaryColor-050)]">
                <div className=" flex flex-col gap-y-[10px]">
                    <div className=" text-[var(--fontSize-h3)] text-[var(--textColor-primary)] font-extrabold">
                        Welcome
                    </div>
                    <div className=" text-[var(--fontSize-small)] text-[var(--textColor-secondary)] tracking-wide">
                        Please login to continue
                    </div>
                </div>
                <InputGroup inputs = {inputs}/>
            </div>
        </div>
        </>
    )
}
export default NewSignin;