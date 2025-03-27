"use client";
import React from "react";

const CyberInsuranceStepIndicator = () => {
  return (
    <div className="flex gap-6 justify-center items-center mb-8">
      <div className="flex gap-2 items-center">
        <div className="flex justify-center items-center w-8 h-8 text-white bg-blue-600 rounded-full">
          <span>1</span>
        </div>
        <span className="text-base font-medium text-blue-600">Basic Info</span>
      </div>

      <div className="w-24 h-1 bg-blue-600" />

      <div className="flex gap-2 items-center">
        <div className="flex justify-center items-center w-8 h-8 text-gray-600 bg-gray-200 rounded-full">
          <span>2</span>
        </div>
        <span className="text-base text-gray-600">Security Assessment</span>
      </div>

      <div className="w-24 h-1 bg-gray-200" />

      <div className="flex gap-2 items-center">
        <div className="flex justify-center items-center w-8 h-8 text-gray-600 bg-gray-200 rounded-full">
          <span>3</span>
        </div>
        <span className="text-base text-gray-600">Coverage Analysis</span>
      </div>
    </div>
  );
};

export default CyberInsuranceStepIndicator;
