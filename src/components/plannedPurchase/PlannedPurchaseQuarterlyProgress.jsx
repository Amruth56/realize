import React from "react";

function PlannedPurchaseQuarterlyProgress() {
  return (
    <section className="p-6 m-6 bg-white rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <div className="flex justify-center items-center">
        <div className="flex-1 text-center">
          <h3 className="mb-2 text-base font-bold text-blue-600">Q1</h3>
          <div className="h-2 bg-blue-600 rounded-[9999px_0_0_9999px]" />
        </div>
        <div className="flex-1 text-center">
          <h3 className="mb-2 text-base font-bold text-gray-400">Q2</h3>
          <div className="h-2 bg-blue-400" />
        </div>
        <div className="flex-1 text-center">
          <h3 className="mb-2 text-base font-bold text-gray-400">Q3</h3>
          <div className="h-2 bg-gray-200" />
        </div>
        <div className="flex-1 text-center">
          <h3 className="mb-2 text-base font-bold text-gray-400">Q4</h3>
          <div className="h-2 bg-gray-200 rounded-none" />
        </div>
      </div>
    </section>
  );
}

export default PlannedPurchaseQuarterlyProgress;
