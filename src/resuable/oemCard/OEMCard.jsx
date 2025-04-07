"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function OEMCard({ icon, name, description, tags = [] }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 w-full max-w-sm shadow-sm hover:shadow-md transition">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="text-blue-600 text-xl"><FontAwesomeIcon icon={icon} /></div>
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 border border-blue-600 text-blue-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action */}
      <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-md text-sm hover:bg-blue-50 transition">
        Select
      </button>
    </div>
  );
}
