"use client";
import React, { useState } from "react";

import UserDetails from "@/components/secure/user-details/UserDetails";
import MasterListStudent from "@/components/secure/master-list/MasterListStudent";

const page = () => {
  const clickhandler = () => {
    console.log("Button clicked");
  };
  return (
    <>
      <MasterListStudent />
    </>
  );
};

export default page;
