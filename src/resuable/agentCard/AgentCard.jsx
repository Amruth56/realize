"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AgentCard = ({ agent }) => {
  const { name, description, category, imageUrl } = agent || {};

  return (
    <article className="flex flex-col p-6 bg-white rounded-xl shadow-md h-full">
      <div className="flex gap-4 mb-4">
        <img
          src={imageUrl}
          alt={`${name} icon`}
          className="w-16 h-16 rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>

      {/* Bottom bar always at bottom */}
      <div className="flex justify-between items-center mt-auto">
        <span className="px-3 py-1.5 text-sm text-blue-600 bg-blue-50 rounded-full">
          {category}
        </span>
        <button className="text-black flex items-center gap-2">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </article>
  );
};

export default AgentCard;
