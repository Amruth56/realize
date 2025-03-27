import React from "react";
import PurchaseInventoryMetricCard from "./PurchaseInventoryMetricCard";

function PurchaseInventoryMetricsCards() {
  return (
    <section className="p-0.5 mt-7 bg-black bg-opacity-0 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-3/12 max-md:ml-0 max-md:w-full">
          <PurchaseInventoryMetricCard
            title="Total Spend"
            value="$1.2M"
            trend={true}
            trendIcon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/1d206e5a2ae56e6e97626d9293f421b995732f9c?placeholderIfAbsent=true"
            trendText="12% vs last year"
            trendColor="text-emerald-600"
            infoIcon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/d4701c78341a9033a3b7a8156fd0a7b6f0b90c6b?placeholderIfAbsent=true"
          />
        </div>
        <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <PurchaseInventoryMetricCard
            title="Active Licenses"
            value="847"
            trend={true}
            trendIcon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/756b3de82d95b84baf51b9602755766433ed16ad?placeholderIfAbsent=true"
            trendText="Stable"
            trendColor="text-blue-600"
            infoIcon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/56b5230fc33f144a9f8a3d9e16f8e853014c8ebb?placeholderIfAbsent=true"
          />
        </div>
        <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <PurchaseInventoryMetricCard
            title="Vendors"
            value="32"
            trend={true}
            trendIcon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/26b8ca2d1532ff3e6b5d6f4fc49e8c9b20828269?placeholderIfAbsent=true"
            trendText="3 less than 2024"
            trendColor="text-red-600"
            infoIcon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/fa8e95bc721de5a82a3b8f8832dd0e3b34af2cb9?placeholderIfAbsent=true"
          />
        </div>
        <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <PurchaseInventoryMetricCard
            title="Renewal Due"
            value="14"
            trend={true}
            trendText="In next 30 days"
            trendColor="text-gray-600"
            infoIcon="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/fad14f6c4d3b72d589d2e7c9bf070b23a49e98c2?placeholderIfAbsent=true"
          />
        </div>
      </div>
    </section>
  );
}

export default PurchaseInventoryMetricsCards;
