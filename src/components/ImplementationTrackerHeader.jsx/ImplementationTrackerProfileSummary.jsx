import React from "react";

function ImplementationTrackerProfileSummary() {
  return (
    <article className="flex gap-6 p-6 bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)] max-sm:flex-col">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5288057448f8471187bbc000b6795002ccd27532"
        alt="Profile"
        className="w-16 h-16 rounded-full"
      />
      <div className="flex flex-col gap-3.5">
        <h2 className="text-lg font-semibold text-black">
          Implementation Coach
        </h2>
        <p className="text-base text-gray-600">
          3 out of 5 projects are fully implemented; 2 are behind schedule
        </p>
        <div className="flex gap-2">
          <span className="px-3 py-1.5 text-sm rounded-full">
            2 Delayed Projects
          </span>
          <span className="px-3 py-1.5 text-sm rounded-full">3 On Track</span>
        </div>
      </div>
    </article>
  );
}

export default ImplementationTrackerProfileSummary;
