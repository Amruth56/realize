import React from "react";
import PurchaseInventoryChartCard from "./PurchaseInventoryChartCard";

function PurchaseInventoryChartSection() {
  return (
    <section className="p-0.5 mt-7 w-full  max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <PurchaseInventoryChartCard title="Spend by Category" chartType="Bar Chart" />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <PurchaseInventoryChartCard title="Top Vendors" chartType="Pie Chart" />
          </div>
        </div>
      </div>
      <div className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <PurchaseInventoryChartCard title="Monthly Spend Trend" chartType="Line Chart" />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <PurchaseInventoryChartCard title="License Distribution" chartType="Donut Chart" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PurchaseInventoryChartSection;
