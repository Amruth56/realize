"use client";
import React from "react";

const CyberInsuranceButton = ({ text, icon, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex gap-2 items-center px-6 py-2.5 text-white bg-blue-600 rounded-lg"
    >
      <span>{text}</span>
      {icon && <div>{icon}</div>}
    </button>
  );
};

export default CyberInsuranceButton;
