import React from "react";

function ROIDashboardHeader() {
  return (
    <header className="flex flex-col justify-center px-16 py-4 w-full bg-white border border-b max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between pl-5 max-w-full w-[1280px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/f396d9c62786036be5566eb3ebb08a3e330a1568?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-start mt-1 max-w-full aspect-[3.47] w-[111px]"
          alt="Company logo"
        />
        <div className="flex gap-5 pt-px pb-3 my-auto leading-none">
          <h1 className="grow text-2xl font-bold text-gray-800">
            ROI Dashboard
          </h1>
          <p className="text-sm text-gray-500 basis-auto">
            Last updated: March 15, 2025
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex gap-2.5 px-4 py-2.5 rounded-lg items-center">
            <span className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/410ef715c185f38d50295adc928c3add279be563?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto w-3.5 aspect-square"
                alt="Export icon"
              />
            </span>
            <span className="text-sm text-center text-gray-600">Export</span>
          </button>
          <button className="flex gap-2.5 px-4 py-2.5 rounded-lg items-center">
            <span className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/3998d71839139e1450e81d4bbaf87ae6a0edfe22?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto w-3.5 aspect-square"
                alt="Share icon"
              />
            </span>
            <span className="text-sm text-center text-gray-600">Share</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default ROIDashboardHeader;
