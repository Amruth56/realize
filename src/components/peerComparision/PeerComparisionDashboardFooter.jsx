import React from "react";

const PeerComparisonDashboardFooter = () => {
  return (
    <footer className="flex flex-col py-1 pr-6 pl-20 mt-5 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="gap-3.5 text-sm font-medium leading-none text-white w-[120px]">
        Integration Status
      </div>
      <div className="flex flex-col justify-center px-6 py-4 w-full max-w-screen-xl max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <p className="text-sm leading-none text-gray-600">
            Last updated: March 15, 2025
          </p>
          <button className="flex gap-2.5 px-1 py-0.5">
            <div className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/cea59ebecd84b4a6e88353d1dbf3f2a6b79c6011?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto w-3.5 aspect-square"
                alt="Refresh icon"
              />
            </div>
            <span className="text-sm text-center text-blue-600">
              Refresh Data
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default PeerComparisonDashboardFooter;
