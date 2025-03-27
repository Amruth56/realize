import React from "react";

function PurchaseInventoryAIInsights() {
  return (
    <section className="flex flex-col justify-center p-6 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
      <div className="flex flex-wrap gap-6 bg-black bg-opacity-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/ccebabc0cf4aabc6220b90e28b060a47407039a9?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-start w-12 rounded-full aspect-square"
          alt="AI assistant"
        />
        <div className="flex flex-col grow shrink-0 pt-1 pr-6 pb-3 basis-0 bg-black bg-opacity-0 w-fit max-md:max-w-full">
          <h2 className="self-start text-lg font-semibold leading-none text-gray-800">
            AI Insights
          </h2>
          <p className="mt-6 text-base leading-4 text-gray-600 max-md:max-w-full">
            You've purchased 120 items this year, with Cloud Services accounting
            for 60% of the spend. There's been a 15% increase in software
            licenses compared to last quarter.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PurchaseInventoryAIInsights;
