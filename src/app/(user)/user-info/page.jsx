"use client"
import React, {useState} from 'react'
import Input from '@/components/user-details/Input'
import Button from '@/components/user-details/Button'
import UserDetails from '@/components/user-details/UserDetails'
import Data from '@/components/user-details/Data'
import DataTable from '@/components/user-details/DataTable'
import students from '@/components/user-details/student'
const page = () => {
    const clickhandler = () => {
        console.log("Button clicked")
    }
  return (
    <>
      {/* <Button size="large" variant="filled" onClick={clickhandler}>Click here!</Button> */}
      {/* <UserDetails></UserDetails> */}
      {/* <Data size = "small" type="header">Hello</Data> */}
      <DataTable students={students} />
    </>
  )
}

export default page
