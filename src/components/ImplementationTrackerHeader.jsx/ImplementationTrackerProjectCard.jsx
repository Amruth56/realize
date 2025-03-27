import React from "react";
import { StatusDot, CheckIcon } from "./ImplementationTrackerNotificationIcon";

function ImplementationTrackerProjectCard({ project }) {
  const { title, description, dueDate, progress, isCompleted } = project;

  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <h4 className="mb-2 text-base font-semibold text-blue-600">{title}</h4>

      {progress !== undefined ? (
        <>
          <div className="flex justify-between mb-1">
            <div className="text-sm text-gray-600">Progress</div>
            <div className="text-sm text-gray-600">{progress}%</div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </>
      ) : (
        <p className="mb-4 text-sm text-gray-600">{description}</p>
      )}

      <div className="flex justify-between items-center">
        {dueDate ? (
          <div className="text-xs text-gray-500">Due: {dueDate}</div>
        ) : isCompleted ? (
          <div className="flex gap-1 items-center text-xs text-emerald-600">
            <CheckIcon />
            <span>Implemented</span>
          </div>
        ) : (
          <div className="text-xs text-gray-500"></div>
        )}
        <div>
          <StatusDot />
        </div>
      </div>
    </div>
  );
}

export default ImplementationTrackerProjectCard;
