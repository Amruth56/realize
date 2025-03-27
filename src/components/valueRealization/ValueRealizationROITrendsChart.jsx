import React from "react";

function ValueRealizationROITrendsChart() {
  const quarters = [
    { label: "Q1", color: "bg-blue-100" },
    { label: "Q2", color: "bg-blue-300" },
    { label: "Q3", color: "bg-blue-500" },
    { label: "Q4", color: "bg-blue-600" },
  ];

  return (
    <section className="p-6 bg-white rounded-xl shadow-md">
      <h3 className="mb-6 text-xl font-semibold text-gray-900">ROI Trends</h3>
      <div className="flex justify-between items-end h-64">
        {quarters.map((quarter, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center w-[131px]"
          >
            <div className={`w-full h-px ${quarter.color} rounded-lg`} />
            <span className="text-sm text-gray-600">{quarter.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValueRealizationROITrendsChart;
