import React from "react";

function UtilizationTrends() {
  const quarters = [
    { id: "q1", label: "Q1 2025", value: "65%", width: "w-[253px]" },
    { id: "q2", label: "Q2 2025", value: "75%", width: "w-[292px]" },
    { id: "q3", label: "Q3 2025", value: "85%", width: "w-[85%]" },
    { id: "q4", label: "Q4 2025", value: "90%", width: "w-[90%]" },
  ];

  return (
    <article className="grow p-6 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-8 max-md:max-w-full">
      <h3 className="pt-1 pb-3 text-lg font-semibold text-gray-800 max-md:pr-5 max-md:max-w-full">
        Utilization Trends
      </h3>

      <div className="flex flex-col justify-center p-4 mt-4 bg-gray-50 rounded-lg max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          {quarters.map((quarter, index) => (
            <div
              key={quarter.id}
              className={`flex flex-wrap gap-5 justify-between items-start py-1  max-md:max-w-full ${
                index > 0 ? "mt-12 max-md:mt-10" : ""
              }`}
            >
              <p className="self-stretch text-sm leading-none text-gray-600">
                {quarter.label}
              </p>
              <div className="flex flex-col items-start mt-1.5 bg-gray-200 rounded-full">
                <div
                  className={`flex shrink-0 max-w-full h-2 bg-blue-600 rounded-full ${quarter.width}`}
                />
              </div>
              <p className="text-sm font-semibold leading-none text-black">
                {quarter.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default UtilizationTrends;
