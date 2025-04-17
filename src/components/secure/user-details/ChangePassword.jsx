"use client"
import React from "react";
import Input from "../form-components/Input";
import Button from "../form-components/Button";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const ChangePassword = () => {
  
  const [loading,setLoading] = useState(false);
  const [currPassword, setCurrpassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const router = useRouter();

  async function handleSubmit(e){
    e.preventDefault()
    if(newPassword!=confPassword){
      toast.error("New Passowrd and Confirm Password should be same")
      return ;
    }
    try {
      setLoading(true)
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/change-password`,{
        password:currPassword,
        newPassword:newPassword
      },{
        withCredentials:true
      })  
      setLoading(false)
      toast.success("Password changed successfully")
      console.log(response)
    } catch (error) {
      setLoading(false)
      if(error.response){
        if(error.response.data.redirect){
          router.push(error.response.data.redirectTo)
        }
        else{
          toast.error(error.response.data.message)
        console.error("Error updating passsword : ", error.response.data.message,error.response.data.error);
        }
        
      }
      else{
        toast.error("Some error occurred")
        console.error("Some error occured : ", error);
      }
    }

  }
  function handleCancel(e){
    e.preventDefault();
    setCurrpassword("");
    setNewPassword("");
    setConfPassword("");
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col item-center justify-center p-8 w-max mx-auto m-auto bg-[var(--blackColor-050)] gap-[30px]">
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
        pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$"
        placeholder="Enter New Password"
        value={newPassword}
        setValue={setNewPassword}
      />
      <Input
        size="large"
        label="Confirm New Password"
        type="password"
        placeholder="Confirm New Password"
        value={confPassword}
        setValue={setConfPassword}
      />

      <div className="flex flex-col px-15 gap-[30px]">
        <Button size="medium" variant="filled" children type="submit" loading={loading}>
          Change Password
        </Button>
        <Button size="medium" variant="outline" children type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
    </form>
  );
};

export default ChangePassword;
