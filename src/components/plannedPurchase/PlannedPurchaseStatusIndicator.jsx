import React from "react";

function PlannedPurchaseStatusIndicator() {
  return (
    <div className="flex fixed right-0 bottom-0 gap-3.5 items-center px-4 py-1.5 text-white bg-blue-600 rounded-[10px_0_0_0]">
      <div className="text-sm">Integration Status</div>
      <i className="ti ti-dots text-sm" />
    </div>
  );
}

export default PlannedPurchaseStatusIndicator;
