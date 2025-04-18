import React from 'react'
const layout = ({children}) => {
  return (
    <div className=" flex h-[100vh] justify-center items-center ">
        {children}
    </div>
  )
}

export default layout