"use client";
import React, {useState} from "react";
import InputGroup from "./InputGroup";
import Button from "./Button";

const NewSignin = () => {
    const [emailState, setEmail] = useState("");
    const [passwordState, setPassword] = useState("");
    const inputs = [
        {name: "Email", value: emailState, type: "email", setValue: setEmail},
        {name: "Password", value: passwordState, type: "password", setValue: setPassword}
    ];
    const handleSubmit = ()=>{
        console.log("submit button clicked")
    }
    const forgotPasswordHandler = () =>{
        console.log("Forgot password clicked");
    }
    return(
        <>
        <div className="*:font-inter">
            <form
            onSubmit={handleSubmit}
            className=" flex flex-col py-[20px] justify-center items-center px-[50px] gap-y-[50px] border-t-[var(--primaryColor-500)] border-t-[3px] bg-[var(--primaryColor-050)]">
                <div className=" flex flex-col justify-center items-center gap-y-0 ">
                    <div className="flex justify-center p-0 m-0 font-extrabold text-[35px] ">
                        Welcome
                    </div>
                    <div className="flex justify-center p-0 m-0 text-[12px] text-[var(--textColor-secondary)] tracking-wide">
                        Please login to continue
                    </div>
                </div>
                <InputGroup inputs = {inputs}/>
                <Button type="submit" onClick={handleSubmit}>Login</Button>
                <div
                className="flex justify-center text-[12px] text-[var(--textColor-primary)] 
                hover:cursor-pointer"
                onClick={forgotPasswordHandler}
                >
                    Forgot your password?
                </div>
            </form>
        </div>
        </>
    )
}
export default NewSignin;