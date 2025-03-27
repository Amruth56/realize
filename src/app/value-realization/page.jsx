"use client";
import ValueRealizationAIInsightsCard from "@/components/valueRealization/ValueRealizationAIInsightsCard";
import ValueRealizationDashboardHeader from "@/components/valueRealization/ValueRealizationDashboardHeader";
import ValueRealizationFloatingActionButton from "@/components/valueRealization/ValueRealizationFloatingActionButton";
import ValueRealizationFooter from "@/components/valueRealization/ValueRealizationFooter";
import ValueRealizationHeader from "@/components/valueRealization/ValueRealizationHeader";
import ValueRealizationIntegrationStatus from "@/components/valueRealization/ValueRealizationIntegrationStatus";
import ValueRealizationMetricsGrid from "@/components/valueRealization/ValueRealizationMetricsGrid";
import ValueRealizationROITrendsChart from "@/components/valueRealization/ValueRealizationROITrendsChart";
import ValueRealizationStrategicRecommendations from "@/components/valueRealization/ValueRealizationStrategicRecommendations";
import ValueRealizationValueByProjectChart from "@/components/valueRealization/ValueRealizationValueByProjectChart";
import React from "react";


function ValueRealizationDashboard() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-[screen]">
      <ValueRealizationHeader/>
      <main className="flex-1 p-8 mx-auto max-w-screen-xl max-md:px-4">
        <ValueRealizationDashboardHeader />
        <ValueRealizationAIInsightsCard />
        <ValueRealizationMetricsGrid />
        <div className="grid grid-cols-2 gap-6 mb-8 max-md:grid-cols-1">
          <ValueRealizationValueByProjectChart />
          <ValueRealizationROITrendsChart />
        </div>
        <ValueRealizationStrategicRecommendations />
      </main>
      <ValueRealizationFooter />
      <ValueRealizationIntegrationStatus />
      <ValueRealizationFloatingActionButton />
    </div>
  );
}

export default ValueRealizationDashboard;
