import React from "react";

function GrcDashboardHeader() {
  return (
    <header className="flex flex-col justify-center px-20 py-px w-full bg-white border-b border-slate-200 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-6 py-4 w-full bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full bg-opacity-0 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/40d9707b18f7f90ff18e9666c4051e9c5304371b?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-start mt-1 max-w-full aspect-[3.47] w-[111px]"
            alt="Company logo"
          />
          <div className="flex flex-wrap gap-10 max-md:max-w-full">
            <div className="flex gap-5 py-0.5 my-auto bg-opacity-0">
              <h1 className="grow text-2xl font-semibold leading-none text-slate-800">
                GRC Insights
              </h1>
              <span className="px-3 py-2 text-sm text-emerald-700 bg-emerald-100 rounded-full">
                Live Updates
              </span>
            </div>
            <div className="flex gap-4 bg-opacity-0">
              <button className="flex gap-2.5 px-4 py-3 rounded-lg bg-opacity-0">
                <div className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/62bcacd33a5f1a8c9029eeb66c4ef07dcdd1a32a?placeholderIfAbsent=true"
                    className="object-contain self-stretch my-auto w-3.5 aspect-square"
                    alt="Export icon"
                  />
                </div>
                <span className="text-sm text-center text-slate-600">
                  Export Report
                </span>
              </button>
              <button className="flex gap-2.5 px-4 py-2.5 text-sm text-center text-white bg-blue-600 rounded-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/bcd1d9742db1fcaf77bde7b6a4734a2b9a79c6d6?placeholderIfAbsent=true"
                  className="object-contain shrink-0 w-3.5 aspect-[0.87]"
                  alt="Refresh icon"
                />
                <span>Refresh Data</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default GrcDashboardHeader;
