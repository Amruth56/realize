"use client";
import React from "react";

function UtilizationFloatingButton() {
  return (
    <button
      className="flex relative flex-col items-center self-end px-4 pb-24 w-20 rounded-full aspect-[0.678] mt-[826px] max-md:pb-24 max-md:mt-10"
      aria-label="Action button"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/ac9a45c0caccda2353045ad4aa26c07118c48dac?placeholderIfAbsent=true"
        alt="Button background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative shrink-0 w-3.5 h-4 bg-black bg-opacity-0" />
    </button>
  );
}

export default UtilizationFloatingButton;
