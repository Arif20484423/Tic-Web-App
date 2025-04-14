import React, { Suspense } from "react";
import ResetPassword from "@/components/auth/ResetPassword";

const page = () => {
  return (
    <Suspense>
      <ResetPassword />
    </Suspense>
  );
};

export default page;
