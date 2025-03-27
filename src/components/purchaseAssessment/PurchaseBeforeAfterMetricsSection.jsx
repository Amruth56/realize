import React from "react";
import PurchaseMetricComparison from "./PurchaseMetricComparison";

function PurchaseBeforeAfterMetricsSection() {
  const metrics = [
    {
      label: "Processing Time",
      before: "45 min",
      after: "12 min",
      progressWidth: "w-[414px]",
    },
    {
      label: "Error Rate",
      before: "8.5%",
      after: "2.1%",
      progressWidth: "w-[469px]",
    },
    {
      label: "User Productivity",
      before: "100%",
      after: "165%",
      progressWidth: "w-full",
    },
  ];

  return (
    <section className="grow p-6 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-8 max-md:max-w-full">
      <h3 className="pt-0.5 pb-3.5 text-lg text-gray-800 bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
        Before & After Metrics
      </h3>
      <div className="mt-6 bg-black bg-opacity-0 max-md:max-w-full">
        {metrics.map((metric, index) => (
          <PurchaseMetricComparison
            key={index}
            label={metric.label}
            before={metric.before}
            after={metric.after}
            progressWidth={metric.progressWidth}
            isLast={index === metrics.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export default PurchaseBeforeAfterMetricsSection;
