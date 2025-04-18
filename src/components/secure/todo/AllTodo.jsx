'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Todo from './todo'
import toast from 'react-hot-toast'

const AllTodo = () => {
  const [schedules, setSchedules] = useState([]);
  const [activeSchedules, setActiveSchedules] = useState([]);
  const [inactiveSchedules, setInactiveSchedules] = useState([]);

  const getSchedules = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/todo`, {
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
          <p className="text-gray-500">No active todos available.</p>
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
          <p className="text-gray-500">No completed todos available.</p>
        )}
      </div>
    </div>
  );
};

export default AllTodo;