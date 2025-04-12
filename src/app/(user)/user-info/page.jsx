"use client"
import React, {useState} from 'react'
import UserDetails from '@/components/user-details/UserDetails'
const page = () => {
    const clickhandler = () => {
        console.log("Button clicked")
    }
  return (
    <>
      <UserDetails />
    </>
  )
}

export default page
