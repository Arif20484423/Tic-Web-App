import React from 'react'

const ResetSuccessful = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white-100">
      <div className="text-center space-y-[25px]">
        <h2 className="text-[30px] font-extrabold text-black">
          Password Reset Successfully
        </h2>
        <button className="w-[215px] text-[12px] font-semibold tracking-[0.05em] px-[20px] py-[6px] text-white bg-black rounded-[35px]">
          Back to login
        </button>
      </div>
    </div>
  )
}

export default ResetSuccessful