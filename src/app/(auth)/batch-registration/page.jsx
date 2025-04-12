"use client";
import React from "react";
import Registration from "@/components/auth/registration/index";
import ProtectedPage from "@/components/RoutesUtils/ProtectedRoute";
const page = () => {
  return (
    <>
      {/* <Signin /> */}
      <ProtectedPage allowedRoles={["Tic","Tap"]}>
        <Registration />
      </ProtectedPage>
    </>
  );
};

export default page;
