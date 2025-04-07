"use client";

import React from "react";
import { FaShieldAlt, FaUmbrella, FaTasks } from "react-icons/fa";
import AssessmentAgentCard from "@/components/assessmentAgentCard/AssessmentAgentCard";
import Footer from "@/resuable/footer/Footer";
import Header from "@/resuable/header/Header";

const AssessmentPage = () => {
  const agents = [
    {
      icon: <FaShieldAlt />,
      title: "GRC Agent",
      description:
        "Comprehensive assessment of governance, risk management, and compliance requirements for your organization.",
      tag: "Risk Analysis",
      tagColor: "text-blue-600",
      buttonText: "Assess Now",
      buttonColor: "bg-blue-600",
    },
    {
      icon: <FaUmbrella />,
      title: "Insurance Agent",
      description:
        "Evaluates cyber insurance coverage and identifies potential gaps in your security posture.",
      tag: "Coverage Analysis",
      tagColor: "text-green-600",
      buttonText: "Assess Now",
      buttonColor: "bg-green-600",
    },
    {
      icon: <FaTasks />,
      title: "Implementation Agent",
      description:
        "Monitors project implementation progress and provides real-time status updates.",
      tag: "Progress Tracking",
      tagColor: "text-purple-600",
      buttonText: "Assess Now",
      buttonColor: "bg-purple-600",
    },
  ];

  return (
    <>
      <Header />
      <main className="px-16 py-10 bg-gray-50 min-h-screen">
        <div className="text-sm text-gray-500">
          Home &gt; Assessment Agent
        </div>
        <h1 className="text-2xl font-semibold text-gray-900 my-7">
          Assessment Agents
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Specialized assessment agents designed to evaluate and monitor different aspects of your
          organization's digital infrastructure, compliance, and implementation progress.
        </p>

        <div className="flex flex-wrap gap-8">
          {agents.map((agent, index) => (
            <AssessmentAgentCard key={index} {...agent} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AssessmentPage;
