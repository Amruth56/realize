"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const AgentCard = ({ agent }) => {
  const router = useRouter();
  const { name, description, category, imageUrl } = agent || {};

  // Slugify route mapping
  const routeMap = {
    "Assessment Agent": "/assessment-agents",
    "Analytics Agent": "/analytic-agent",
  };

  const handleNavigate = () => {
    const route = routeMap[name];
    if (route) {
      router.push(route);
    }
  };

  return (
    <article
      onClick={handleNavigate}
      className="flex flex-col p-6 bg-white rounded-xl shadow-md h-full cursor-pointer hover:shadow-lg transition"
    >
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

      <div className="flex justify-between items-center mt-auto">
        <span className="px-3 py-1.5 text-sm text-blue-600 bg-blue-50 rounded-full">
          {category}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent event bubbling to card
            handleNavigate();
          }}
          className="text-black flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </article>
  );
};

export default AgentCard;
