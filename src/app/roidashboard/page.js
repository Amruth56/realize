"use client";
import ROIChartSection from "@/components/roidashboard/ROIChartSection";
import ROIDashboardFooter from "@/components/roidashboard/ROIDashboardFooter";
import ROIDashboardHeader from "@/components/roidashboard/ROIDashboardHeader";
import ROIInsightCard from "@/components/roidashboard/ROIInsightCard";
import ROIInvestmentTable from "@/components/roidashboard/ROIInvestmentTable";
import ROIMetricCards from "@/components/roidashboard/ROIMetricCards";
import React from "react";


function ROIDashboard() {
  return (
    <section className="overflow-hidden bg-white rounded-lg border-2 border-gray-300 border-solid">
      <div className="flex flex-col items-end w-full bg-opacity-0">
        <div className="flex flex-col self-start w-full bg-white max-w-[1440px] max-md:max-w-full">
          <ROIDashboardHeader />

          <main className="self-center py-7 pl-6 w-full max-w-screen-xl max-md:pl-5 max-md:max-w-full">
            <ROIInsightCard />
            <ROIMetricCards />
            <ROIChartSection />
            <ROIInvestmentTable />
          </main>
        </div>

        <div className="flex flex-col mt-7 max-w-full text-sm font-medium leading-none text-white w-[286px] max-md:mr-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/0c843ee053405cdb9a6cd5d3a42f0235e2a720de?placeholderIfAbsent=true"
            className="object-contain self-end mr-10 w-20 rounded-full aspect-square max-md:mr-2.5"
            alt="Profile avatar"
          />
          <div className="flex flex-col justify-center items-end px-7 py-0.5 mt-8 w-full rounded-xl max-md:pl-5">
            <div className="gap-3.5 w-[120px]">Integration Status</div>
          </div>
        </div>

        <ROIDashboardFooter />
      </div>
    </section>
  );
}

export default ROIDashboard;
