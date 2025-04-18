import React from "react";
import Button from "./Button";
const Todo = ({ subject, description, date, onComplete, status, createdBy }) => {
  return (
    <div className="flex flex-col p-4 bg-white shadow-md rounded-lg border border-gray-200 w-[80%] m-auto my-5">
      <div className="flex justify-between">
        {/* Subject */}
        <h3 className="text-lg font-bold text-gray-800 mb-2">{subject}</h3>
        {/* Date */}
        <div className="text-xs text-gray-500 mb-4">
                <span className="font-medium">Due Date:</span> {new Date(date).toLocaleDateString()}
        </div>
      </div>
      
      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      

      {/* Completed Button */}
      <div className="flex  mb-4">
        {status == "active" && <span className={`text-xs px-5 py-2 mx-2 rounded-2xl bg-red-400 text-white` }>{status}</span>}
        <span className="text-xs text-gray-500 bg-gray-300  px-5 py-2 rounded-2xl ">{createdBy}</span>
      </div>
      <div className="flex justify-center">
      {
        status === "active" && (
        <Button
          size="large"
          variant="filled"
          children
          type="submit"
          loading={false}
          onClick={onComplete}
        >
        Mark as Completed
      </Button>        ) 
      }
      </div>
      
      
    </div>
  );
};

export default Todo;