'use client'
import React, { useState } from "react";
import Tabhandler from "./Tabhandler";

const Todo = () => {
  const [activeTab, setActiveTab] = useState("today");

  const tabs = [
    { id: "today", label: "Today" },
    { id: "all", label: "All Schedule" },
    { id: "completed", label: "Completed" },
    { id: "create", label: "Create Todo" },
  ];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-500 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        <Tabhandler tab={activeTab} />
      </div>
    </div>
  );
};

export default Todo;