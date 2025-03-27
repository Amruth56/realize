import React from "react";

function UtilizationOptimizationRecommendations() {
  const recommendations = [
    {
      id: "rec1",
      text: "Redistribute CRM licenses to teams with higher demand",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/257aab310350633ffdc8e92659fdc528d0e0d9a9?placeholderIfAbsent=true",
      bgColor: "bg-blue-50",
    },
    {
      id: "rec2",
      text: "Plan for additional resources in Q3 2025",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/3c988538915755a5f4290b7d9a707471febc17f4?placeholderIfAbsent=true",
      bgColor: "bg-emerald-50",
    },
    {
      id: "rec3",
      text: "Optimize onboarding process to improve efficiency",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/52487dfaad34df6bfefa6d967ee766065a90ae6b?placeholderIfAbsent=true",
      bgColor: "bg-violet-50",
    },
  ];

  return (
    <article className="grow px-6 pt-6 pb-28 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:pb-24 max-md:mt-8 max-md:max-w-full">
      <h3 className="py-1.5 text-lg font-semibold text-gray-800 bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
        Optimization Recommendations
      </h3>

      <div className="mt-4 w-full text-sm text-gray-700 bg-black bg-opacity-0 max-md:max-w-full">
        {recommendations.map((recommendation, index) => (
          <div
            key={recommendation.id}
            className={`flex flex-wrap gap-3 py-3 pr-20 pl-3 ${index > 0 ? "mt-4" : ""} ${recommendation.bgColor} rounded-lg max-md:pr-5`}
          >
            <img
              src={recommendation.iconSrc}
              alt="Recommendation icon"
              className={`object-contain shrink-0 self-start mt-1 ${recommendation.iconSrc.includes("https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/257aab310350633ffdc8e92659fdc528d0e0d9a9?placeholderIfAbsent=true") ? "w-3 aspect-[0.75]" : "w-4 aspect-square"}`}
            />
            <p className="grow shrink-0 py-1 basis-0 bg-black bg-opacity-0 w-fit">
              {recommendation.text}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default UtilizationOptimizationRecommendations;
