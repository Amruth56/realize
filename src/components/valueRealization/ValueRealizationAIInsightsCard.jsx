import React from "react";

function ValueRealizationAIInsightsCard() {
  return (
    <section className="p-6 mb-8 bg-white rounded-xl shadow-md">
      <div className="flex gap-4 items-start">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f756691076387d759daf1cb47c92d7f46458565c"
          alt="AI Assistant"
          className="w-[48px] h-[48px] rounded-[9999px]"
        />
        <div>
          <h2 className="mb-2.5 text-lg font-semibold text-gray-900">
            AI Insights
          </h2>
          <p className="text-base text-gray-600">
            Your overall value realized exceeds costs by $3M, with the data
            analytics investment yielding the highest impact. Consider
            increasing investment in cloud infrastructure based on current ROI
            trends.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ValueRealizationAIInsightsCard;
