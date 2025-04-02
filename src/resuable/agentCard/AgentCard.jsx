"use client";

import React from "react";

const AgentCard = ({ agent }) => {
  // Safely destructure with optional chaining
  const { name, description, category, imageUrl } = agent || {};

  return (
    <article className="flex gap-4 p-6 bg-white rounded-xl shadow-md h-full">
      <img
        src={imageUrl}
        alt={`${name} icon`}
        className="w-16 h-16 rounded-lg"
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex justify-between items-center">
          <span className="px-3 py-1.5 text-sm text-blue-600 bg-blue-50 rounded-full">
            {category}
          </span>
          <button className="text-black">
            <i className="ti ti-arrow-right" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default AgentCard;