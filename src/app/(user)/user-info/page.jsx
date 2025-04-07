"use client"
import React, {useState} from 'react'
import Input from '@/components/user-info/Input'
import Button from '@/components/user-info/Button'
const page = () => {
    const clickhandler = () => {
        console.log("Button clicked")
    }
  return (
    <>
      <Button size="large" variant="filled" onClick={clickhandler}>Click here!</Button>
    </>
  )
}

export default page
