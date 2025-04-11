"use client";
import React, { useState } from "react";

import Input from "@/components/user-details/Input";
const page = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <Input
        size="large"
        label="Enter Email"
        priority="required"
        type="email"
        placeholder="Enter email here"
        value={email}
        setValue={setEmail}
      ></Input>
    </>
  );
};
export default page;
