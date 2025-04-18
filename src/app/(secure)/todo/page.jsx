'use client'
import React from 'react'
import Todo from '@/components/secure/todo/index'
import ProtectedRoute from '@/components/RoutesUtils/ProtectedRoute'
const page = () => {
  return (
    <ProtectedRoute allowedRoles={["Tic", "Tap"]}>
      <div>
          <Todo />
      </div>
    </ProtectedRoute>
  )
}

export default page