"use client";
import React from "react";

import GrcCategoryCard from "@/components/grcInsights/GrcCategoryCard";
import GrcActivityFeed from "@/components/grcInsights/GrcActivityItem";
import Header from "@/resuable/header/Header";
import Footer from "@/resuable/footer/Footer";
import OverViewCard from "@/resuable/overViewCard/OverViewCard";
import { FaClock, FaFile } from "react-icons/fa";


function GRCInsightsDashboard() {
  return (
    <section className="overflow-hidden bg-white rounded-lg border-2 border-gray-300 border-solid">
      <div className="w-full bg-opacity-0">
        <div className="pb-32 w-full bg-slate-50 max-md:pb-24 max-md:max-w-full">
          <Header />
          <div className="flex justify-between items-center m-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                GRC Insights
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

          <main className="flex flex-col px-20 mb-0 w-full max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
            <div className="px-6 py-8 w-full bg-opacity-0 max-md:px-5 max-md:max-w-full">
              {/* Top Metrics Section */}
              
<div className= "flex gap-4 my-4 justify-center">
          <OverViewCard
            title="Overall Health"
            value="94%"
            percentage="Across all GRC metrics"
            icon={<FaClock />}
          />
          <OverViewCard
            title="Active Policies"
            value="123"
            percentage="Updated in last 30m days"
            icon={<FaFile />}
          />
          <OverViewCard
            title="Open Issues"
            value="7"
            percentage="Requiring attention"
            icon={< FaFile/>}        />
          </div>

              {/* Category Cards Section */}
              <section className="p-0.5 mt-7 bg-opacity-0 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="w-[33%] max-md:ml-0 max-md:w-full">
                    <GrcCategoryCard
                      title="Governance"
                      subtitle="Policy Management"
                      iconSrc="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/94bcd58a56dc017f5340641673d1a2ee556abdec?placeholderIfAbsent=true"
                      bgColor="bg-blue-50"
                      alertType="success"
                      alertIcon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/9bc158df870ee73a7ab2e006af4c361ef59fa178?placeholderIfAbsent=true"
                      alertMessage={[
                        "All policy reviews are up to date. Next review",
                        "scheduled for March 2025.",
                      ]}
                      stats={[
                        {
                          label: "Policy Compliance",
                          value: "98%",
                          color: "text-emerald-600",
                        },
                        {
                          label: "Documentation Status",
                          value: "100%",
                          color: "text-emerald-600",
                        },
                        {
                          label: "Training Completion",
                          value: "89%",
                          color: "text-amber-600",
                        },
                      ]}
                    />
                  </div>
                  <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <GrcCategoryCard
                      title="Risk"
                      subtitle="Risk Assessment"
                      iconSrc="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/95587a909031d989da8bdf7115974fc70951cfc0?placeholderIfAbsent=true"
                      bgColor="bg-red-50"
                      alertType="warning"
                      alertIcon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/a350580a25c1cd1fc2fddef3865ce173b75b605b?placeholderIfAbsent=true"
                      alertMessage={[
                        "3 new potential risks identified in cloud",
                        "infrastructure. Review recommended.",
                      ]}
                      stats={[
                        {
                          label: "High Risk Items",
                          value: "3",
                          color: "text-red-600",
                        },
                        {
                          label: "Medium Risk Items",
                          value: "7",
                          color: "text-amber-600",
                        },
                        {
                          label: "Low Risk Items",
                          value: "15",
                          color: "text-emerald-600",
                        },
                      ]}
                    />
                  </div>
                  <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <GrcCategoryCard
                      title="Compliance"
                      subtitle="Regulatory Compliance"
                      iconSrc="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/2cb43594ff84d784cd87fcae6d3dbdc6739cceb6?placeholderIfAbsent=true"
                      bgColor="bg-emerald-50"
                      alertType="success"
                      alertIcon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/9e4cd5212847be12324ca5558f0349b3b39f294c?placeholderIfAbsent=true"
                      alertMessage={[
                        "All systems are compliant with GDPR. No",
                        "actions needed.",
                      ]}
                      stats={[
                        {
                          label: "GDPR Compliance",
                          value: "100%",
                          color: "text-emerald-600",
                        },
                        {
                          label: "ISO 27001",
                          value: "98%",
                          color: "text-emerald-600",
                        },
                        {
                          label: "SOC 2",
                          value: "100%",
                          color: "text-emerald-600",
                        },
                      ]}
                    />
                  </div>
                </div>
              </section>

              {/* Recent Activities Section */}
              <GrcActivityFeed />
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/4c3a8c0464b7c9354e93ec5e89b2fabf76373474?placeholderIfAbsent=true"
              className="object-contain self-end w-20 rounded-full aspect-square max-md:mr-1.5"
              alt="Profile avatar"
            />
          </main>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default GRCInsightsDashboard;
