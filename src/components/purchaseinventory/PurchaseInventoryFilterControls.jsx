import React from "react";
import PurchaseInventoryFilterItem from "./PurchaseInventoryFilterItem";

function PurchaseInventoryFilterControls() {
  return (
    <section className="p-0.5 mt-8 bg-black bg-opacity-0 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-3/12 max-md:ml-0 max-md:w-full">
          <PurchaseInventoryFilterItem label="Segment" value="All Segments" />
        </div>
        <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <PurchaseInventoryFilterItem label="Vendor" value="All Vendors" />
        </div>
        <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <PurchaseInventoryFilterItem label="Timeline" value="Last 12 Months" />
        </div>
        <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <PurchaseInventoryFilterItem label="Cost Range" value="All Costs" />
        </div>
      </div>
    </section>
  );
}

export default PurchaseInventoryFilterControls;
