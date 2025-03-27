import React from "react";

const PeerComparisonMetricCard = ({
  title,
  yourValue,
  industryValue,
  yourBarWidth = "w-full",
  industryBarWidth = "w-[260px]",
}) => {
  return (
    <section className="grow p-6 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-6">
      <h3 className="py-1.5 text-lg font-semibold text-black bg-black bg-opacity-0 max-md:pr-5">
        {title}
      </h3>
      <div className="mt-4 bg-black bg-opacity-0">
        <div className="w-full bg-black bg-opacity-0">
          <div className="flex gap-5 justify-between py-1 text-sm leading-none bg-black bg-opacity-0">
            <div className="text-gray-600">Your Company</div>
            <div className="self-start font-semibold text-black">
              {yourValue}
            </div>
          </div>
          <div className="flex flex-col items-start mt-1 bg-gray-200 rounded-full max-md:pr-5">
            <div
              className={`flex shrink-0 h-2 bg-blue-600 rounded-full ${yourBarWidth}`}
            />
          </div>
        </div>
        <div className="mt-4 w-full bg-black bg-opacity-0">
          <div className="flex gap-5 justify-between py-1 text-sm leading-none bg-black bg-opacity-0">
            <div className="text-gray-600">Industry Average</div>
            <div className="self-start font-semibold text-black">
              {industryValue}
            </div>
          </div>
          <div className="flex flex-col items-start mt-1 bg-gray-200 rounded-full max-md:pr-5">
            <div
              className={`flex shrink-0 max-w-full h-2 bg-gray-400 rounded-full ${industryBarWidth}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeerComparisonMetricCard;
