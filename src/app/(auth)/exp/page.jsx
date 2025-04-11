"use client";
import React, { useState } from "react";
import UserDetails from "@/components/user-details/UserDetails";
import DataTable from "@/components/user-details/DataTable";
import students from "@/components/user-details/student";
import Input from "@/components/user-details/Input";
const page = () => {
  const [email, setEmail] = useState("");
  return (
    // <>
    //   <Input
    //     size="large"
    //     label="Enter Email"
    //     priority="required"
    //     type="email"
    //     placeholder="Enter email here"
    //     value={email}
    //     setValue={setEmail}
    //   ></Input>
    // </>
    // <UserDetails />
    <DataTable students={students} />
  );
};
export default page;
