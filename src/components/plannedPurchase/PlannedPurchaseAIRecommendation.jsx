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
      <button
        className="p-0 cursor-pointer border-[none]"
        aria-label="Close recommendation"
      >
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;17:676&quot; layer-name=&quot;Frame&quot; width=&quot;13&quot; height=&quot;16&quot; viewBox=&quot;0 0 13 16&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;close-icon&quot; style=&quot;width: 12px; height: 16px&quot;> <path d=&quot;M0.4375 0H12.4375V16H0.4375V0Z&quot; stroke=&quot;#E5E7EB&quot;></path> <path d=&quot;M11.1441 4.70624C11.5348 4.31562 11.5348 3.68124 11.1441 3.29062C10.7535 2.89999 10.1191 2.89999 9.72852 3.29062L6.43789 6.58437L3.14414 3.29374C2.75352 2.90312 2.11914 2.90312 1.72852 3.29374C1.33789 3.68437 1.33789 4.31874 1.72852 4.70937L5.02227 7.99999L1.73164 11.2937C1.34102 11.6844 1.34102 12.3187 1.73164 12.7094C2.12227 13.1 2.75664 13.1 3.14727 12.7094L6.43789 9.41562L9.73164 12.7062C10.1223 13.0969 10.7566 13.0969 11.1473 12.7062C11.5379 12.3156 11.5379 11.6812 11.1473 11.2906L7.85352 7.99999L11.1441 4.70624Z&quot; fill=&quot;black&quot;></path> </svg>",
            }}
          />
        </div>
      </button>
    </section>
  );
}

export default PlannedPurchaseAIRecommendation;
