import React from "react";

function ImplementationTrackerTimelineItem({ name, progress, isLast }) {
  return (
    <div
      className={`flex items-center ${!isLast ? "mb-6" : ""} max-sm:flex-col max-sm:gap-2 max-sm:items-start`}
    >
      <div className="w-32 text-sm text-gray-600 max-sm:w-full">{name}</div>
      <div className="flex-1 mx-4 my-0 max-sm:w-full">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              backgroundColor: progress > 0 ? "#2563EB" : "transparent",
            }}
          />
        </div>
      </div>
      <div className="w-20 text-sm text-right max-sm:mt-1 max-sm:w-full max-sm:text-left">
        {progress}%
      </div>
    </div>
  );
}

export default ImplementationTrackerTimelineItem;
