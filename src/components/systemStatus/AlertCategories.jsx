import React from "react";

function ProgressBar({ label, percentage }) {
  return (
    <div className="flex justify-between items-center">
      <div className="h-2 bg-gray-100 rounded-full w-[260px]">
        <div
          className="h-full rounded-full bg-blue-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm text-gray-600">
        {label} ({percentage}%)
      </span>
    </div>
  );
}

function AlertCategories() {
  const categories = [
    { label: "Network", percentage: 45 },
    { label: "Security", percentage: 30 },
    { label: "Performance", percentage: 25 },
  ];

  return (
    <article className="flex-1 p-6 bg-white rounded-xl border border-gray-100 border-solid max-md:w-full">
      <h3 className="mb-4 text-lg font-bold text-gray-800">Alert Categories</h3>
      <div className="flex flex-col gap-4">
        {categories.map((category, index) => (
          <ProgressBar
            key={index}
            label={category.label}
            percentage={category.percentage}
          />
        ))}
      </div>
    </article>
  );
}

export default AlertCategories;
