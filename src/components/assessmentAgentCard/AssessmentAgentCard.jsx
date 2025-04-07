"use client";
import React from "react";

const AssessmentAgentCard = ({
  icon,           // now expects a JSX element (e.g., <FaChartPie />)
  title,
  description,
  tag,
  tagColor,
  buttonText,
  buttonColor,
}) => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200 w-full max-w-sm">
      <div className="flex items-center gap-3">
        <div className="bg-gray-100 p-3 rounded-lg text-xl text-blue-600">
          {icon}
        </div>
        <h2 className="text-base font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex justify-between items-center mt-auto pt-2">
        <span className={`text-sm font-medium ${tagColor}`}>{tag}</span>
        <button
          className={`text-white text-sm font-medium px-4 py-2 rounded ${buttonColor}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default AssessmentAgentCard;
