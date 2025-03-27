import React from "react";

function ROIChartContainer({ title }) {
  return (
    <article className="grow p-6 w-full text-lg font-semibold text-gray-800 bg-white rounded-xl border border-solid max-md:px-5 max-md:mt-6 max-md:max-w-full">
      <h3 className="py-1.5 max-md:pr-5 max-md:max-w-full">{title}</h3>
      <div className="flex shrink-0 mt-4 bg-gray-50 rounded-lg h-[300px] max-md:max-w-full" />
    </article>
  );
}

export default ROIChartContainer;
