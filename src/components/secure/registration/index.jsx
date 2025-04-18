"use client";
import React, { useState } from "react";
import Button from "../form-components/Button";
import axios from "axios";
import Input from "../form-components/Input";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const Registration = () => {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState("");
  const [totalStudent, setTotalStudent] = useState("");
  const [file, setFile] = useState(null);
  const router = useRouter()
  // const inputs = [
  //     {name: "session", value: session, type: "text", setValue: setSession},
  //     {name: "totalStudent", value: totalStudent, type: "number", setValue: settotalStudent},
  // ];
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);
    if (!session || !totalStudent || !file) {
      console.error("All fields are required!");
      toast.error("All fields are required!");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("session", session);
    formData.append("totalStudents", totalStudent);
    formData.append("file", file);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/batchentry`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials:true  
        }
      );
      toast.success("Batch entry successful");
      setLoading(false);
      console.log("Batch entry successful:", res.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error.response) {
        toast.error(error.response.data.message);
        console.error(
          "Error updating batch info : ",
          error.response.data.message,
          error.response.data.error
        );
        if(error.response.data.redirect){
          router.push(error.response.data.redirectTo)
        }
      } else {
        toast.error("Some error occurred");
        console.error("Error submitting batch entry : ", error);
      }
    }
  };

  return (
    <>
      <div className="*:font-inter">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col py-[20px] justify-center items-center px-[50px] gap-y-[50px] border-t-[var(--primaryColor-500)] border-t-[3px] bg-[var(--primaryColor-050)]"
        >
          <div className=" flex flex-col justify-center items-center gap-y-0 ">
            <div className="flex justify-center p-0 m-0 font-extrabold text-[29px] ">
              Batch Registration
            </div>
            <div className="flex justify-center p-0 m-0 text-[12px] text-[var(--textColor-secondary)] tracking-wide">
              Enter new batch details
            </div>
          </div>
          <div className="flex flex-col w-full max-w-[350px] px-2 gap-y-[25px]">
            <Input
              size="large"
              label="Batch"
              priority="required"
              type="text"
              placeholder="20xx-20xx"
              value={session}
              setValue={setSession}
            />
            <Input
              size="large"
              label="Number of Students"
              priority="required"
              type="text"
              placeholder="Enter number of students"
              value={totalStudent}
              setValue={setTotalStudent}
            />
            <Input
              size="large"
              label="Upload File"
              priority="required"
              type="file"
              placeholder="Choose file"
              value={file}
              setValue={setFile}
            />
          </div>
          <Button type="submit" onClick={handleSubmit} loading={loading}>
            Register
          </Button>
        </form>
      </div>
    </>
  );
};
export default Registration;
