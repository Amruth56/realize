import React from "react";

function PurchaseAIReviewSection() {
  return (
    <section className="flex flex-col justify-center p-6 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
      <div className="flex flex-wrap gap-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/7a995336a14addd962e9daec10fc40edbc07027f?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-start w-16 rounded-full aspect-square"
          alt="AI avatar"
        />
        <div className="flex flex-col grow shrink-0 pt-0.5 pr-14 pb-3.5 basis-0 w-fit max-md:max-w-full">
          <h2 className="self-start text-lg leading-none text-gray-800">
            AI Performance Review
          </h2>
          <p className="mt-7 text-base leading-4 text-gray-600 max-md:max-w-full">
            The new CRM system shows promising results with a 4.5-star
            satisfaction rating. However, user adoption is currently at 60%.
            Consider implementing additional training sessions to boost adoption
            rates. Key areas for improvement include data entry efficiency and
            custom report generation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PurchaseAIReviewSection;
