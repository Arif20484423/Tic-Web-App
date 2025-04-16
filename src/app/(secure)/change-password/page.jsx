"use client";
import React from "react";
import Input from "@/components/secure/user-details/Input";
import Button from "@/components/auth/Button";
import { useState } from "react";

const page = () => {
  const [currPassword, setCurrpassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  return (
    <div className="flex flex-col item-center justify-center p-8 w-[30%] m-auto bg-[var(--blackColor-050)] gap-[30px]">
      <Input
        size="large"
        label="Enter Current Password"
        type="password"
        placeholder="Enter Current Password"
        value={currPassword}
        setValue={setCurrpassword}
      />
      <Input
        size="large"
        label="Enter New Password"
        type="password"
        placeholder="Enter New Password"
        value={newPassword}
        setValue={setNewPassword}
      />
      <Input
        size="large"
        label="Confirm New Password"
        type="email"
        placeholder="Confirm New Password"
        value={newPassword}
        setValue={setNewPassword}
      />

      <div className="flex flex-col px-15 gap-[30px]">
        <Button size="medium" variant="filled" children type="button">
          Change Password
        </Button>
        <Button size="medium" variant="outline" children type="button">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default page;
