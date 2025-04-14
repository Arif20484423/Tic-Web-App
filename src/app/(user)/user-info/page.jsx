"use client"
import React, {useState} from 'react'

import UserDetails from '@/components/user-details/UserDetails';
import MasterListStudent from '@/components/master-list/MasterListStudent';


const page = () => {
    const clickhandler = () => {
        console.log("Button clicked")
    }
  return (
    <>
      <MasterListStudent />
    </>
  )
}

export default page
