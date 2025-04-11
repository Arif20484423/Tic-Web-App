"use client";
import React, {useState} from "react";
import InputGroup from "../InputGroup";
import Button from "../Button";
import axios from "axios";
import FileInput from "../FileInput";
const Registration = () => {
    const [session, setSession] = useState("");
    const [totalStudent, settotalStudent] = useState("");
    const [file, setFile] = useState(null);
    const inputs = [
        {name: "session", value: session, type: "text", setValue: setSession},
        {name: "totalStudent", value: totalStudent, type: "number", setValue: settotalStudent},
    ];
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        if (!session || !totalStudent || !file) {
            console.error("All fields are required!");
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
                }
            );
            console.log("Batch entry successful:", res.data);
        } catch (error) {
            console.error("Error submitting batch entry:", error.response?.data || error.message);
        }
    };
 
    return(
        <>
        <div className="*:font-inter">
            <form
            onSubmit={handleSubmit}
            className=" flex flex-col py-[20px] justify-center items-center px-[50px] gap-y-[50px] border-t-[var(--primaryColor-500)] border-t-[3px] bg-[var(--primaryColor-050)]">
                <div className=" flex flex-col justify-center items-center gap-y-0 ">
                    <div className="flex justify-center p-0 m-0 font-extrabold text-[35px] ">
                        Batch Registration
                    </div>
                    <div className="flex justify-center p-0 m-0 text-[12px] text-[var(--textColor-secondary)] tracking-wide">
                        Enter new batch details
                    </div>
                </div>
                <InputGroup inputs = {inputs}/>
                <FileInput value={file} setValue={setFile}/>
                <Button type="submit" onClick={handleSubmit}>Registration</Button>
            </form>
        </div>
        </>
    )
}
export default Registration;