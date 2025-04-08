"use client"
import React, {useState} from 'react'
import Input from '@/components/user-info/Input'
import Button from '@/components/user-info/Button'
import UserDetails from '@/components/user-info/UserDetails'
const page = () => {
    const clickhandler = () => {
        console.log("Button clicked")
    }
  return (
    <>
      {/* <Button size="large" variant="filled" onClick={clickhandler}>Click here!</Button> */}
      <UserDetails></UserDetails>
    </>
  )
}

export default page
