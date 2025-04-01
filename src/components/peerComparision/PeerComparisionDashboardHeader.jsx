import React from "react";

const PeerComparisonDashboardHeader = () => {
  return (
    <header className="flex flex-col justify-center px-20 py-px w-full bg-white border border-b max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-6 py-4 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/c3f537c3e6722807caf28abaf4d90296fe5680c5?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-start mt-1 max-w-full aspect-[3.47] w-[111px]"
            alt="Company logo"
          />
          <div className="flex gap-2 py-0.5">
            <div className="flex overflow-hidden justify-center items-center min-h-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/307e9d7d1b403f913c0ead1cd2ba7dc8cea89fb9?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto w-6 aspect-square"
                alt="Comparison icon"
              />
            </div>
            <h1 className="text-xl font-semibold leading-none text-black basis-auto">
              Realize Peer Comparison
            </h1>
          </div>
          <div className="flex gap-4 my-auto ">
            <button className="flex gap-3.5 py-1">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/29242074f4ff10225833855c2f8316a9ae907338?placeholderIfAbsent=true"
                  className="object-contain self-stretch my-auto w-4 aspect-square"
                  alt="Export icon"
                />
              </div>
              <span className="text-base leading-none text-center text-gray-600 basis-auto">
                Export Report
              </span>
            </button>
            <button className="flex gap-3.5 py-1 bg-black bg-opacity-0">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/ab293fc32e5d42d4ad8de6f18337e07840670266?placeholderIfAbsent=true"
                  className="object-contain self-stretch my-auto w-3.5 aspect-[0.87]"
                  alt="Share icon"
                />
              </div>
              <span className="text-base leading-none text-center text-gray-600">
                Share
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PeerComparisonDashboardHeader;
