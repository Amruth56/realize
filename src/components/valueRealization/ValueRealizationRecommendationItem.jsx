import React from "react";

function ValueRealizationRecommendationItem({ title, description, icon }) {
  return (
    <article className="flex gap-3">
      <div>{icon}</div>
      <div>
        <h4 className="mb-2.5 text-base font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </article>
  );
}

export default ValueRealizationRecommendationItem;
