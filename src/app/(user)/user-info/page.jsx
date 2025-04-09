"use client"
import React, {useState} from 'react'
import Input from '@/components/user-info/Input'
import Button from '@/components/user-info/Button'
import UserDetails from '@/components/user-info/UserDetails'
import Data from '@/components/user-info/Data'
import DataTable from '@/components/user-info/DataTable'
import students from '@/components/user-info/student'
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
