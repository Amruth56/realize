"use client";

import React from "react";
import { FaChartPie, FaUsers } from "react-icons/fa";
import AssessmentAgentCard from "@/components/assessmentAgentCard/AssessmentAgentCard";
import InfoBanner from "@/resuable/infoBanner/InfoBanner";

const AnalyticAgent = () => {
  
  const agents = [
    {
      icon: <FaChartPie />,
      title: "Overall Insights Analytics",
      description:
        "Aggregated data insights across all key metrics, providing comprehensive analysis of platform performance.",
      tag: "Insights",
      tagColor: "text-blue-600",
      buttonText: "View insights",
      buttonColor: "bg-blue-600",
    },
    {
      icon: <FaUsers />,
      title: "Usage Analytics",
      description:
        "Detailed analysis of product adoption and feature engagement, tracking user behavior and interaction patterns.",
      tag: "Usage",
      tagColor: "text-blue-600",
      buttonText: "View usage",
      buttonColor: "bg-blue-600",
    },
  ];

  return (
    <>
      <main className="px-16 py-10 bg-gray-50 min-h-screen">
        <div className="text-sm text-gray-500">Home &gt; Analytics Agent</div>
        <h1 className="text-2xl font-semibold text-gray-900 my-7">
          Analytics Agents
        </h1>
        <InfoBanner
          className="mb-7"
          title="AI Assistant"
          message="Select an analytics agent to view detailed reports and insights. Each agent provides specialized analysis for different aspects of your platform"
        />

        <div className="flex flex-wrap gap-8">
          {agents.map((agent, index) => (
            <AssessmentAgentCard key={index} {...agent} />
          ))}
        </div>
      </main>
    </>
  );
};

export default AnalyticAgent;
