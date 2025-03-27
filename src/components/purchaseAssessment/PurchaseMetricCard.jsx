import React from "react";

function PurchaseMetricCard({
  title,
  value,
  valueColor,
  progressWidth,
  progressColor,
  description,
}) {
  return (
    <div className="p-6 mx-auto w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-6">
      <div className="flex gap-5 justify-between pt-px pb-3.5 leading-none bg-black bg-opacity-0">
        <h3 className="text-lg text-gray-800">{title}</h3>
        <span className={`self-start text-2xl ${valueColor}`}>{value}</span>
      </div>
      <div className="flex flex-col items-start mt-4 bg-gray-200 rounded-full max-md:pr-5">
        <div
          className={`flex shrink-0 h-2 ${progressColor} rounded-full ${progressWidth}`}
        />
      </div>
      <p className="py-1 mt-2 text-sm text-gray-500 bg-black bg-opacity-0 max-md:pr-5">
        {description}
      </p>
    </div>
  );
}

export default PurchaseMetricCard;
