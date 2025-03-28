import React from 'react'

const layout = ({children}) => {
  return (
    <div className=" flex h-[100vh] justify-center items-center bg-red-300">
        {children}
    </div>
  )
}

export default layout