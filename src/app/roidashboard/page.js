"use client";

import ROIChartSection from "@/components/roidashboard/ROIChartSection";
import ROIInsightCard from "@/components/roidashboard/ROIInsightCard";
import ROIInvestmentTable from "@/components/roidashboard/ROIInvestmentTable";
import React from "react";
import OverViewCard from "@/resuable/overViewCard/OverViewCard";

function ROIDashboard() {
  return (
    <section className="overflow-hidden bg-white rounded-lg border-2 border-gray-300 border-solid">
      <div className="flex flex-col items-end w-full bg-opacity-0">
        <div className="flex flex-col self-start w-full bg-white max-w-[1440px] max-md:max-w-full">
          <div className="flex justify-between items-center m-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                ROI Dashboard
              </h1>
            </div>
            <div className="flex gap-6 items-center">
              <ul className="list-none m-0 p-0">
                <li>
                  <span className="text-sm text-gray-600 cursor-pointer hover:text-blue-600 transition">
                    Export Report
                  </span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer">
                Refresh
              </button>
            </div>
          </div>

          <main className="self-center py-7 pl-6 w-full max-w-screen-xl max-md:pl-5 max-md:max-w-full">
            <ROIInsightCard />
            <div className="flex gap-4 my-4 justify-center">
              <OverViewCard
                title="Average ROI"
                value="150%"
                percentage="⬆️ 12%"
              />
              <OverViewCard title="Total Investment" value="$2.4M" />
              <OverViewCard
                title="Total Returns"
                value="$6M"
                percentage="⬆️ 25%"
              />
              <OverViewCard title="Active Investments" value="12" />
            </div>
            <ROIChartSection />
            <ROIInvestmentTable />
          </main>
        </div>

        <div className="flex flex-col mt-7 max-w-full text-sm font-medium leading-none text-white w-[286px] max-md:mr-2.5">
          <div className="flex flex-col justify-center items-end px-7 py-0.5 mt-8 w-full rounded-xl max-md:pl-5">
            <div className="gap-3.5 w-[120px]">Integration Status</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ROIDashboard;
