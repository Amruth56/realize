import React from "react";

function ROIMetricCard({ title, value, trend, trendValue, trendIcon }) {
  return (
    <article className="p-6 w-full bg-white rounded-xl border border-solid max-md:px-5 max-md:mt-6">
      <h3 className="py-1 text-sm text-gray-500 max-md:pr-5">{title}</h3>
      <div className="flex gap-3.5 py-1 pr-12 mt-2 max-md:pr-5">
        <p className="text-3xl font-bold leading-none text-gray-800">{value}</p>
        {trend && (
          <div className="flex self-start mt-4">
            <span className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
              <img
                src={trendIcon}
                className="object-contain self-stretch my-auto aspect-[0.79] w-[11px]"
                alt="Trend indicator"
              />
            </span>
            <span className="text-sm leading-none text-emerald-500">
              {trendValue}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

export default ROIMetricCard;
