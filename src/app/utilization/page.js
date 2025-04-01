"use client";
import Footer from "@/components/footer/Footer";
import UtilizationAiInsights from "@/components/utilization/UtilizationAiInsights";
import UtilizationFloatingButton from "@/components/utilization/UtilizationFloatingButton";
import UtilizationHeader from "@/components/utilization/UtilizationHeader";
import UtilizationMetricCard from "@/components/utilization/UtilizationMetricCard";
import UtilizationOptimizationRecommendations from "@/components/utilization/UtilizationOptimizationRecommendations";
import UtilizationTrends from "@/components/utilization/UtilizationTrends";
import React from "react";


function UtilizationDashboard() {
  return (
    <div className="bg-black bg-opacity-0">
      <div className="flex flex-col pb-96 w-full bg-gray-50 max-md:pb-24 max-md:max-w-full">
        <UtilizationHeader />
        <div className="flex items-start self-end mr-7 mb-0 max-md:mr-2.5 max-md:mb-2.5">
          <main className="grow shrink-0 self-start px-6 py-8 mr-0 basis-0 bg-black bg-opacity-0 w-fit max-md:px-5 max-md:max-w-full">
            <UtilizationAiInsights/>

            <section
              className="p-0.5 mt-8 bg-black bg-opacity-0 max-md:max-w-full"
              space={32}
            >
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[33%] max-md:ml-0 max-md:w-full">
                  <UtilizationMetricCard
                    title="People"
                    iconSrc="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/42be4e30165808a313e3a2b818148b55ffb62f5f?placeholderIfAbsent=true"
                    mainMetric={{
                      label: "Team Utilization",
                      value: "85%",
                      color: "text-blue-600",
                    }}
                    subMetrics={[
                      { label: "Development", value: "92%" },
                      { label: "Design", value: "78%" },
                      { label: "Marketing", value: "85%" },
                    ]}
                    progressBarColor="bg-blue-600"
                    progressBarWidth="w-[85%]"
                  />
                </div>
                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <UtilizationMetricCard
                    title="Technology"
                    iconSrc="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/8dac28fad36f047e811d75ecac3e40ddeea711ea?placeholderIfAbsent=true"
                    mainMetric={{
                      label: "License Utilization",
                      value: "50%",
                      color: "text-red-500",
                    }}
                    subMetrics={[
                      { label: "CRM Licenses", value: "50%" },
                      { label: "Development Tools", value: "95%" },
                      { label: "Cloud Services", value: "75%" },
                    ]}
                    progressBarColor="bg-red-500"
                    progressBarWidth="w-[155px]"
                  />
                </div>
                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <UtilizationMetricCard
                    title="Processes"
                    iconSrc="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/5bc1fb671f7bef29550c69e76527fd612a99c7d7?placeholderIfAbsent=true"
                    mainMetric={{
                      label: "Process Efficiency",
                      value: "78%",
                      color: "text-emerald-500",
                    }}
                    subMetrics={[
                      { label: "Onboarding", value: "82%" },
                      { label: "Project Management", value: "75%" },
                      { label: "Quality Assurance", value: "77%" },
                    ]}
                    progressBarColor="bg-emerald-500"
                    progressBarWidth="w-[241px]"
                  />
                </div>
              </div>
            </section>

            <section
              className="p-0.5 mt-7 bg-black bg-opacity-0 max-md:max-w-full"
              space={32}
            >
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                  <UtilizationTrends />
                </div>
                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <UtilizationOptimizationRecommendations />
                </div>
              </div>
            </section>
          </main>
          <UtilizationFloatingButton />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default UtilizationDashboard;
