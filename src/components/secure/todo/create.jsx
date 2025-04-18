'use client'
import { useState } from 'react'
import React from 'react'
import Input from './Input'
import Button from './Button'
import Texrarea from './Textarea'
import axios from 'axios'
import toast from "react-hot-toast";
const create = () => {
  const [date ,setDate] = useState();
  const [subject ,setSubject] = useState();
  const [subjectDescription ,setSubjectDescription] = useState();
  const [loading, setLoading] = useState(false);

  //  date,subject,subjectDescription,company
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/todo/create`,{
        date,
        subject,
        subjectDescription
      },{
        withCredentials: true,
      })
      if(res.status == "201"){
        toast.success("Todo Created Successfully")
        setDate("")
        setSubject("")
        setSubjectDescription("")
      }else{
        console.log(res)
        toast.error("Something went wrong")
      }
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error)
    }
   
    // Add your form submission logic here
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-full min-w-[200px] py-[25px] gap-y-[20px] items-center">
        <div className="flex flex-col w-full max-w-[450px] gap-y-[20px] items-center">
          <Input
            size="large"
            label="Subject"
            priority="required"
            type="text"
            placeholder="Enter Subject"
            value={subject}
            setValue={setSubject}
            required={true}
          />
          <Texrarea
            size="large"
            label="Description"
            priority="required"
            type="text"
            placeholder="Enter Details"
            value={subjectDescription}
            setValue={setSubjectDescription}
            required={true}
          />
          <Input
            size="large"
            label="Subject"
            priority="required"
            type="date"
            placeholder=""
            value={date}
            setValue={setDate}
            required={true}
          />
          
         
        </div>
        <div className="flex w-full max-w-[350px] justify-center">
          <div className="flex flex-col sm:flex-row w-full max-w-[350px] justify-center items-center gap-[25px]">
            <Button
              size="medium"
              variant="filled"
              children
              type="submit"
              loading={loading}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default create