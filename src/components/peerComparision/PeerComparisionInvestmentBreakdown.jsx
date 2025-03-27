import React from "react";

const PeerComparisonInvestmentBreakdown = () => {
  return (
    <section className="grow px-6 pt-6 pb-24 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-6 max-md:max-w-full">
      <h3 className="pt-1 pb-3 text-lg font-semibold text-black bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
        Investment Breakdown
      </h3>
      <div className="mt-6 w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 w-full bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex flex-1 gap-4 py-1 bg-black bg-opacity-0">
            <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/71188413326606f409f169d8bdc21c039bf97e84?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto w-4 aspect-square"
                alt="Infrastructure icon"
              />
            </div>
            <span className="text-base leading-none text-black basis-auto">
              Infrastructure
            </span>
          </div>
          <div className="flex flex-1 gap-5 py-1 my-auto text-sm leading-none bg-black bg-opacity-0">
            <span className="self-start font-semibold text-black">35%</span>
            <span className="text-gray-500">(Avg: 30%)</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-4 w-full bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex gap-4 py-1 bg-black bg-opacity-0">
            <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/96df3a3bcab572544349aec1c1f1c789a926b859?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto w-4 aspect-square"
                alt="Security icon"
              />
            </div>
            <span className="text-base leading-none text-black">Security</span>
          </div>
          <div className="flex gap-5 py-1 my-auto text-sm leading-none bg-black bg-opacity-0">
            <span className="self-start font-semibold text-black">25%</span>
            <span className="text-gray-500">(Avg: 20%)</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 mt-4 w-full bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex flex-1 gap-3 py-1 bg-black bg-opacity-0">
            <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/a4a935262651ff5f4cc90de6a9b732afffa230fc?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto w-5 aspect-[1.25]"
                alt="Development icon"
              />
            </div>
            <span className="text-base leading-none text-black basis-auto">
              Development
            </span>
          </div>
          <div className="flex flex-1 gap-5 py-1 my-auto text-sm leading-none bg-black bg-opacity-0">
            <span className="self-start font-semibold text-black">40%</span>
            <span className="text-gray-500">(Avg: 50%)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeerComparisonInvestmentBreakdown;
