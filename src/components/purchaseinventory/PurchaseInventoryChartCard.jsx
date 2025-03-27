import React from "react";

function PurchaseInventoryChartCard({ title, chartType }) {
  return (
    <article className="grow p-6 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-8 max-md:max-w-full">
      <h3 className="py-1.5 text-lg font-semibold text-gray-800 bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
        {title}
      </h3>
      <div className="mt-6 text-base text-gray-500 bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-20 py-36 bg-gray-50 rounded-lg max-md:px-5 max-md:py-24 max-md:max-w-full">
          <p className="px-px pt-0.5 pb-2.5 -mb-7 max-w-full bg-black bg-opacity-0 w-[156px] max-md:mb-2.5">
            {chartType} Placeholder
          </p>
        </div>
      </div>
    </article>
  );
}

export default PurchaseInventoryChartCard;
