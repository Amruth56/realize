import React from "react";

const PeerComparisonYearOverYearTrend = () => {
  return (
    <section className="grow p-6 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-6 max-md:max-w-full">
      <h3 className="pt-1 pb-3 text-lg font-semibold text-blackmax-md:pr-5 max-md:max-w-full">
        Year-over-Year Trend
      </h3>
      <div className="mt-6  max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
            <div className="self-start text-base leading-none text-black">
              2025
            </div>
            <div className="flex gap-3 py-1 ">
              <div className="text-sm font-semibold leading-none text-emerald-600">
                +15%
              </div>
              <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/f589b438fabe2bc6dcd0748dc95b4d658f0c03a8?placeholderIfAbsent=true"
                  className="object-contain self-stretch my-auto aspect-[1.12] w-[18px]"
                  alt="Up trend icon"
                />
              </div>
            </div>
          </div>
          <div className="mt-2 bg-gray-200 rounded-full max-md:pr-5 max-md:max-w-full">
            <div className="flex shrink-0 h-2 bg-blue-600 rounded-full max-md:max-w-full" />
          </div>
        </div>
        <div className="mt-6 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-fullmax-md:max-w-full">
            <div className="self-start text-base leading-none text-black">
              2024
            </div>
            <div className="flex gap-3 py-1 ">
              <div className="text-sm font-semibold leading-none text-emerald-600">
                +10%
              </div>
              <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/c97d4116653fa4fe161b85ffa97b0e6301d55dd2?placeholderIfAbsent=true"
                  className="object-contain self-stretch my-auto aspect-[1.12] w-[18px]"
                  alt="Up trend icon"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-2 bg-gray-200 rounded-full max-md:pr-5 max-md:max-w-full">
            <div className="flex shrink-0 max-w-full h-2 bg-blue-600 rounded-full w-[445px]" />
          </div>
        </div>
        <div className="mt-6 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full  max-md:max-w-full">
            <div className="self-start text-base leading-none text-black">
              2023
            </div>
            <div className="flex gap-3 py-1">
              <div className="text-sm font-semibold leading-none text-emerald-600">
                +5%
              </div>
              <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/5f8cf9816fecfdb0890295deea2ef570465beadc?placeholderIfAbsent=true"
                  className="object-contain self-stretch my-auto aspect-[1.12] w-[18px]"
                  alt="Up trend icon"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-2 bg-gray-200 rounded-full max-md:pr-5 max-md:max-w-full">
            <div className="flex shrink-0 max-w-full h-2 bg-blue-600 rounded-full w-[389px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeerComparisonYearOverYearTrend;
