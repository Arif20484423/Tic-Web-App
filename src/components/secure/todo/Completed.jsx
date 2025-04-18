'use client'
import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Todo from './todo'
const Completed = () => {
  const [schedules, setschedules] = useState([])
  const getSchedules = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/todo/completed`, {
        withCredentials: true,
      })
      if (res.status == 200) {
        console.log(res)
        setschedules(res.data.schedule)
        console.log(schedules)

      } else {
        console.log(res)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSchedules()
  }, [])

  const handleStatus = async (id) => {
    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/todo/update`, {
        id
      }, {
        withCredentials: true,
      })
      if (res.status == 200) {
        toast.success("Todo Completed Successfully")
        getSchedules()
      } else {
        console.log(res)
      }
    } catch (error) {
      
    }
  }
  return (
    <div>
      {
        schedules ? (
          schedules.map((schedule) => (
            <Todo subject={schedule.subject} description = {schedule.subjectDescription} date ={schedule.date} onComplete={() =>handleStatus(schedule._id)} status={schedule.status} createdBy={schedule.createdBy.rollNumber} key={schedule._id} />
          ))
        ) : (
          <p>No schedules</p>
        )
      }
    </div>
  )
}

export default Completed