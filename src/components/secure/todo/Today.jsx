'use client'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Todo from './todo'
import toast from 'react-hot-toast'
import { AppContext } from '@/context/app.context'
import Button from './Button'
const Today = () => {
  const { user } = useContext(AppContext);
  const [schedules, setSchedules] = useState([]);
  const [activeSchedules, setActiveSchedules] = useState([]);
  const [inactiveSchedules, setInactiveSchedules] = useState([]);
  const [allSchedulesSet, setAllSchedulesSet] = useState(true);
  const getSchedules = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/todo/today`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        const allSchedules = res.data.schedule;

        // Separate active and inactive schedules
        const active = allSchedules.filter((schedule) => schedule.status === "active");
        const inactive = allSchedules.filter((schedule) => schedule.status === "inactive");

        setSchedules(allSchedules);
        setActiveSchedules(active);
        setInactiveSchedules(inactive);
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filterMySchedules = () => {
    const mySchedules = schedules.filter((schedule) => schedule.createdBy.rollNumber === user.rollNumber);
    setActiveSchedules(mySchedules.filter((schedule) => schedule.status === "active"));
    setInactiveSchedules(mySchedules.filter((schedule) => schedule.status === "inactive")); 
    setAllSchedulesSet(false);
  }

  const removeMyScheduleFilter = () => {
    setActiveSchedules(schedules.filter((schedule) => schedule.status === "active"));
    setInactiveSchedules(schedules.filter((schedule) => schedule.status === "inactive"));
    setAllSchedulesSet(true);
  }


  useEffect(() => {
    getSchedules();
  }, []);

  const handleStatus = async (id) => {
    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/todo/update`, {
        id,
      }, {
        withCredentials: true,
      });
      if (res.status === 200) {
        toast.success("Todo Completed Successfully");
        getSchedules(); // Refresh schedules
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      {/* Active Todos */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">{allSchedulesSet ? "All Today Schedule": "My Schedule"}</h1>
        <div className="flex space-x-2 mx-10">
          <Button onClick={filterMySchedules}>My Schedules</Button>
          <Button onClick={removeMyScheduleFilter} variant="outline" >All Schedules</Button>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 mx-5">Pending Schedule</h2>
        {activeSchedules.length > 0 ? (
          activeSchedules.map((schedule) => (
            <Todo
              key={schedule._id}
              subject={schedule.subject}
              description={schedule.subjectDescription}
              date={schedule.date}
              onComplete={() => handleStatus(schedule._id)}
              status={schedule.status}
              createdBy={schedule.createdBy.rollNumber}
            />
          ))
        ) : (
          <p className="text-gray-500">No active todos for today.</p>
        )}
      </div>

      {/* Inactive Todos */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4 mx-5">Completed Schedule</h2>
        {inactiveSchedules.length > 0 ? (
          inactiveSchedules.map((schedule) => (
            <Todo
              key={schedule._id}
              subject={schedule.subject}
              description={schedule.subjectDescription}
              date={schedule.date}
              status={schedule.status}
              createdBy={schedule.createdBy.rollNumber}
            />
          ))
        ) : (
          <p className="text-gray-500">No completed todos for today.</p>
        )}
      </div>
    </div>
  );
};

export default Today;