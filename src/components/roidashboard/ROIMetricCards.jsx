import React from "react";
import ROIMetricCard from "./ROIMetricCard";

function ROIMetricCards() {
  return (
    <section className="mt-8 mr-6 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-3/12 max-md:ml-0 max-md:w-full">
          <ROIMetricCard
            title="Average ROI"
            value="150%"
            trend={true}
            trendValue="12%"
            trendIcon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/03a8db9768b549048f6745b42de2f72b6a3fddf7?placeholderIfAbsent=true"
          />
        </div>
        <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <ROIMetricCard title="Total Investment" value="$2.4M" trend={false} />
        </div>
        <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <ROIMetricCard
            title="Total Returns"
            value="$6M"
            trend={true}
            trendValue="25%"
            trendIcon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/a46811278552fe5a6d2b2afa927dff3ac7280c3a?placeholderIfAbsent=true"
          />
        </div>
        <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <ROIMetricCard title="Active Investments" value="12" trend={false} />
        </div>
      </div>
    </section>
  );
}

export default ROIMetricCards;
