import React from "react";

function PurchaseSurveyInsightsSection() {
  const surveyItems = [
    {
      label: "Ease of Use",
      starsImage:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/5258ca0b34718acb54879b8afa2d79dd5a92df8e?placeholderIfAbsent=true",
    },
    {
      label: "Feature Set",
      starsImage:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/abed61cc552b119b48486985f619e8f92f219656?placeholderIfAbsent=true",
    },
    {
      label: "Support Quality",
      starsImage:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/0afdeed989c8104acf9d01a715747cd8580d8591?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="grow px-6 pt-6 pb-24 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-8 max-md:max-w-full">
      <h3 className="pt-0.5 pb-2.5 text-lg text-gray-800 max-md:pr-5 max-md:max-w-full">
        Survey Insights
      </h3>
      <div className="mt-6 w-full text-base leading-none text-gray-600 max-md:max-w-full">
        {surveyItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-wrap gap-5 justify-between py-1 max-md:max-w-full ${index > 0 ? "mt-4" : ""}`}
          >
            <div>{item.label}</div>
            <img
              src={item.starsImage}
              className="object-contain shrink-0 self-start aspect-[5.62] w-[90px]"
              alt={`${item.label} rating`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PurchaseSurveyInsightsSection;
