"use client";

import ValueRealizationAIInsightsCard from "@/components/valueRealization/ValueRealizationAIInsightsCard";
import ValueRealizationDashboardHeader from "@/components/valueRealization/ValueRealizationDashboardHeader";
import ValueRealizationFloatingActionButton from "@/components/valueRealization/ValueRealizationFloatingActionButton";
import ValueRealizationROITrendsChart from "@/components/valueRealization/ValueRealizationROITrendsChart";
import ValueRealizationStrategicRecommendations from "@/components/valueRealization/ValueRealizationStrategicRecommendations";
import ValueRealizationValueByProjectChart from "@/components/valueRealization/ValueRealizationValueByProjectChart";
import React from "react";
import OverViewCard from "@/resuable/overViewCard/OverViewCard";
import { FaDollarSign, FaArrowUp, FaPercent, FaPiggyBank } from "react-icons/fa";


function ValueRealizationDashboard() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-[screen]">
          
      <main className="flex-1 p-8 mx-auto max-w-screen-xl max-md:px-4">
        <ValueRealizationDashboardHeader />
        <ValueRealizationAIInsightsCard />
        <div className= "flex gap-4 my-4 justify-center">
          <OverViewCard
            title="Total Investment"
            value="$12.5M"
            percentage="⬆️12% vs last year"
            icon={<FaDollarSign />}
          />
          <OverViewCard
            title="Realized Value"
            value="$15.5M"
            percentage="⬆️18% vs last year"
            icon={<FaArrowUp />}
          />
          <OverViewCard
            title="ROI"
            value="124%"
            percentage="⬆️6% vs last year"
            icon={<FaPercent />}
          />
          <OverViewCard
            title="Cost Savings"
            value="$3.0M"
            percentage="⬆️14% vs last year"
            icon={<FaPiggyBank />}
          />
          </div>
        <div className="grid grid-cols-2 gap-6 mb-8 max-md:grid-cols-1">
          <ValueRealizationValueByProjectChart />
          <ValueRealizationROITrendsChart />
        </div>
        <ValueRealizationStrategicRecommendations />
      </main>
      <ValueRealizationFloatingActionButton />
    </div>
  );
}

export default ValueRealizationDashboard;
