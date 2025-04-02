"use client";

import React from 'react'
import{useState} from 'react'

const ResetPassword = () => {
  const[email,setEmail]=useState("");
  const[oldPassword,setoldPassword]=useState("");
  const[newPassword,setnewPassword]=useState("");

  const handleResetPassword=()=>{
    console.log("reset password clicked",email);
  };

  return (
    <div className="*:font-inter">
      <div className='bg-gray-100 w-[380px] p-3 shadow-md border-t-[5px]'>
        <div className="flex justify-center flex-col items-center">
          <h2 className='text-3xl m-4 mb-3 font-inter font-bold text-black text-center'>Forgot Password!</h2>
          <p className=' text-center mb-4 w-[180px] text-[14px]'>Enter email id and new password to reset</p>
        </div>
          
        <div className=' flex justify-center flex-col items-center mt-10'>
          <input type='email'
            placeholder='Enter your email'
            className='w-[80%] p-2 pl-0 border-b mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={email}
            onChange={(e)=>setEmail( e.target.value)}
            />

            <input type='password'
            placeholder='Old password'
            className='w-[80%] p-2 pl-0 border-b mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={oldPassword}
            onChange={(e)=>setoldPassword(e.target.value)}
            />

            <input type='password'
            placeholder='New password'
            className='w-[80%] p-2 pl-0 border-b mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={newPassword}
            onChange={(e)=>setnewPassword(e.target.value)}
            />
             <button 
          className='w-[80%] mt-15 m-auto bg-black py-2 text-white rounded-full font-semibold hover:bg-gray-900 transition mb-5'
          onClick={handleResetPassword}>Reset Password</button>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword;