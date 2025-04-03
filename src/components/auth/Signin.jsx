"use client";

import React from "react";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("reset password clicked");
  };

  const forgotPasswordhandler = () => {
    console.log("Forgot password clicked")
  }

  return (
    <div className="*:font-inter">
      <div className="bg-gray-100 w-[380px] p-3 shadow-md border-t-[5px]">
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-3xl m-4 mb-3 font-inter font-bold text-black text-center">
            Welcome
          </h2>
          <p className=" text-center mb-4 w-[180px] text-[14px]">
            Login to continue.
          </p>
        </div>

        <div className=" flex justify-center flex-col items-center mt-10">
          <input
            type="email"
            placeholder="Email"
            className="w-[80%] p-2 pl-0 border-b mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-[80%] p-2 pl-0 border-b mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-[80%] mt-15 m-auto bg-black py-2 text-white rounded-full font-semibold hover:bg-gray-900 transition mb-5"
            onClick={handleLogin}
          >
            Login
          </button>
          <p 
            className=" m-auto mt-[50px] text-[var(--fontSize-small)] text-[var(--textColor-primary)] hover: cursor-pointer"
            onClick={forgotPasswordhandler}
          >
            Forgot your password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
