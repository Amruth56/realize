import React from "react";

function PurchaseMetricComparison({ label, before, after, progressWidth, isLast }) {
  return (
    <div
      className={`${!isLast ? "mb-6" : ""} w-full  max-md:max-w-full`}
    >
      <div className="flex flex-wrap gap-5 justify-between w-full text-base leading-none  max-md:max-w-full">
        <div className="text-gray-600">{label}</div>
        <div className="flex gap-2 items-start pt-0.5 pb-3 ">
          <div className="text-gray-400 line-through">{before}</div>
          <div className="text-emerald-600">{after}</div>
        </div>
      </div>
      <div className="mt-2 bg-gray-200 rounded-full max-md:pr-5 max-md:max-w-full">
        <div
          className={`flex shrink-0 h-2 bg-emerald-600 rounded-full ${progressWidth}`}
        />
      </div>
    </div>
  );
}

export default PurchaseMetricComparison;
