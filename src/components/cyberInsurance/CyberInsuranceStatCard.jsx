"use client";
import React from "react";

const CyberInsuranceStatCard = ({
  title,
  value,
  icon,
  color = "blue",
  valueColor = "text-gray-800",
}) => {
  return (
    <article className="p-6 bg-white rounded-xl shadow-md w-[315px]">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm text-gray-500">{title}</h3>
          <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
        </div>
        <div
          className={`flex justify-center items-center w-12 h-12 bg-${color}-100 rounded-full`}
        >
          <div>{icon}</div>
        </div>
      </div>
    </article>
  );
};

export default CyberInsuranceStatCard;
