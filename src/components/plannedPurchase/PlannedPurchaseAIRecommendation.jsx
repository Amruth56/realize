import React from "react";

function PlannedPurchaseAIRecommendation() {
  return (
    <section className="flex gap-4 items-start p-4 mx-6 my-4 bg-blue-50 rounded-lg max-sm:flex-col max-sm:items-center max-sm:text-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30cc9c901f1dcfd95a27e7c31e320e71e72e08b8"
        className="w-10 h-10 rounded-full"
        alt="AI Assistant"
      />
      <div className="flex-1">
        <h2 className="mb-2.5 text-base text-blue-800">
          AI Assistant Recommendation
        </h2>
        <p className="text-sm text-blue-600">
          Your cloud storage is nearing capacity (85% used). Consider scheduling
          an upgrade purchase next month to avoid service interruptions.
        </p>
      </div>
    </section>
  );
}

export default PlannedPurchaseAIRecommendation;
