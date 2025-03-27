import React from "react";
import PurchaseMetricCard from "./PurchaseMetricCard";

function PurchaseMetricsSection() {
  const metrics = [
    {
      title: "User Satisfaction",
      value: "4.5",
      valueColor: "text-blue-600",
      progressWidth: "w-[90%]",
      progressColor: "bg-blue-600",
      description: "90% positive feedback",
    },
    {
      title: "User Adoption",
      value: "60%",
      valueColor: "text-orange-500",
      progressWidth: "w-[60%]",
      progressColor: "bg-orange-500",
      description: "Target: 85%",
    },
    {
      title: "ROI",
      value: "142%",
      valueColor: "text-emerald-600",
      progressWidth: "w-[100%]",
      progressColor: "bg-emerald-600",
      description: "Exceeding expectations",
    },
  ];

  return (
    <div className="p-0.5 mt-8  bg-opacity-0 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {metrics.map((metric, index) => (
          <div key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
            <PurchaseMetricCard
              title={metric.title}
              value={metric.value}
              valueColor={metric.valueColor}
              progressWidth={metric.progressWidth}
              progressColor={metric.progressColor}
              description={metric.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PurchaseMetricsSection;
