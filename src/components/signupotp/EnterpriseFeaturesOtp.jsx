import React from "react";
import FeatureItem from "./FeatureItem";
import SupportCard from "./SupportCard";

function EnterpriseFeaturesOtp() {
  const features = [
    { icon: "shield", text: "Enterprise-grade security" },
    { icon: "chart-line", text: "Advanced analytics" },
    { icon: "users", text: "Team collaboration" },
    { icon: "robot", text: "AI-powered insights" },
  ];

  return (
    <section className="flex flex-col justify-between p-12 w-[560px] bg-blue-800 max-md:w-full max-sm:px-6 max-sm:py-8">
      <div>
        <h2 className="mb-7 text-2xl font-semibold text-white">
          Enterprise-ready platform
        </h2>
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} text={feature.text} />
          ))}
        </div>
      </div>
      <SupportCard />
    </section>
  );
}

export default EnterpriseFeaturesOtp;
