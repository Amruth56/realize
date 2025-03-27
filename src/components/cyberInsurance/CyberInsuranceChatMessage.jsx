"use client";
import React from "react";

const CyberInsuranceChatMessage = ({ message, imageUrl }) => {
  return (
    <div className="flex gap-6 mb-6">
      <img
        src={imageUrl}
        alt="Cyber Insurance Advisor"
        className="w-[48px] h-[48px] rounded-full"
      />
      <div className="flex-1 p-4 text-base text-gray-700 bg-blue-50 rounded-lg">
        {message}
      </div>
    </div>
  );
};

export default CyberInsuranceChatMessage;
