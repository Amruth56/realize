"use client";
import PeerComparisonAIInsights from "@/components/peerComparision/PeerComparisionAIInsights";
import PeerComparisonDashboardFooter from "@/components/peerComparision/PeerComparisionDashboardFooter";
import PeerComparisonDashboardHeader from "@/components/peerComparision/PeerComparisionDashboardHeader";
import PeerComparisonInvestmentBreakdown from "@/components/peerComparision/PeerComparisionInvestmentBreakdown";
import PeerComparisonMetricCard from "@/components/peerComparision/PeerComparisionMetricCard";
import PeerComparisonYearOverYearTrend from "@/components/peerComparision/PeerComparisionYearOverYearTrend";
import React from "react";


const PeerComparisonDashboard = () => {
  return (
    <section className="overflow-hidden bg-white rounded-lg border-2 border-gray-300 border-solid">
      <div className="w-full bg-black bg-opacity-0 h-[910px] max-md:max-w-full">
        <div className="flex flex-col w-full bg-gray-50 max-md:max-w-full">
          <PeerComparisonDashboardHeader />

          <main className="flex flex-wrap gap-2 items-start self-end pt-8 pl-6 bg-black bg-opacity-0 max-md:pl-5 max-md:mr-2.5">
            <div className="grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
              <PeerComparisonAIInsights />

              <div className="p-0.5 mt-8 bg-black bg-opacity-0 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="w-[33%] max-md:ml-0 max-md:w-full">
                    <PeerComparisonMetricCard
                      title="IT Spend"
                      yourValue="$2.5M"
                      industryValue="$2.1M"
                      yourBarWidth="w-full"
                      industryBarWidth="w-[260px]"
                    />
                  </div>
                  <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <PeerComparisonMetricCard
                      title="Return on Investment"
                      yourValue="32%"
                      industryValue="28%"
                      yourBarWidth="w-full"
                      industryBarWidth="w-[260px]"
                    />
                  </div>
                  <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <PeerComparisonMetricCard
                      title="Tech Adoption Rate"
                      yourValue="85%"
                      industryValue="65%"
                      yourBarWidth="w-full"
                      industryBarWidth="w-[226px]"
                    />
                  </div>
                </div>
              </div>

              <div className="p-0.5 mt-7 bg-black bg-opacity-0 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="w-6/12 max-md:ml-0 max-md:w-full">
                    <PeerComparisonInvestmentBreakdown />
                  </div>
                  <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <PeerComparisonYearOverYearTrend />
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/4c3a8c0464b7c9354e93ec5e89b2fabf76373474?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-end w-20 rounded-full aspect-square mt-[642px] max-md:mt-10"
              alt="Profile avatar"
            />
          </main>

          <PeerComparisonDashboardFooter />
        </div>
      </div>
    </section>
  );
};

export default PeerComparisonDashboard;
