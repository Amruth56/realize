"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AssessmentCard({ icon, heading, description }) {
  return (
    <div className="w-full p-5 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col gap-4 h-full">
      <div className="flex items-center gap-3">
        <div className="text-blue-600 text-xl">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h2 className="text-base font-semibold text-gray-800">{heading}</h2>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
      <button className="mt-auto px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition">
        Start Assessment
      </button>
    </div>
  );
}
