import React from "react";

function ROIInsightCard() {
  return (
    <section className="flex flex-col justify-center p-4 mr-6 text-base bg-blue-50 rounded-xl max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-wrap gap-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/cc8b803c88dd5ec7e37ad9f8f0efe5fbbf50a0a3?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-start w-12 rounded-full aspect-square"
          alt="AI assistant avatar"
        />
        <div className="flex flex-col grow shrink-0 pt-0.5 pr-10 pb-2.5 basis-0 w-fit max-md:max-w-full">
          <h2 className="self-start font-semibold leading-none text-gray-800">
            ROI Insights
          </h2>
          <p className="mt-4 leading-4 text-gray-600 max-md:max-w-full">
            CRM software shows the highest ROI at 180%, significantly
            outperforming other investments. Consider increasing investment in
            similar customer- facing technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ROIInsightCard;
