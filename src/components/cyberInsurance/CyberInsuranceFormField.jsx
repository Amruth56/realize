"use client";
import React from "react";

const CyberInsuranceFormField = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <label className="text-base font-medium text-gray-700">{label}</label>

      {type === "select" ? (
        <select
          className="px-3 w-full rounded-lg border border-gray-300 bg-[center_right_1rem] h-[39px]"
          aria-label={label}
        >
          <option value="" disabled selected>
            {placeholder}
          </option>
        </select>
      ) : (
        <input
          type={type}
          className="px-3 w-full rounded-lg border border-gray-300 h-[42px]"
          placeholder=""
          aria-label={label}
        />
      )}
    </div>
  );
};

export default CyberInsuranceFormField;
