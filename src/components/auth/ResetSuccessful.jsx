import React from 'react'

const ResetSuccessful = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white-100">
      <div className="text-center">
        <h2 className="text-xl font-bold text-black">
          Password Reset Successfully
        </h2>
        <button className="text-xs mt-4 px-11 py-1 text-white bg-black rounded-3xl">
          Back to login
        </button>
      </div>
    </div>
  )
}

export default ResetSuccessful