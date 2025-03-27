"use client";
import React from "react";

function PurchaseInventoryMetricCard({
  title,
  value,
  trend = null,
  trendIcon = null,
  trendText = null,
  trendColor = "text-gray-600",
  infoIcon = null,
}) {
  return (
    <article className="p-6 mx-auto w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-4">
      <div className="flex gap-5 justify-between py-1 w-full bg-black bg-opacity-0">
        <h3 className="text-base leading-none text-gray-600">{title}</h3>
        {infoIcon && (
          <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
            <img
              src={infoIcon}
              className="object-contain self-stretch my-auto w-4 aspect-square"
              alt="Info icon"
            />
          </div>
        )}
      </div>
      <p className="pt-0.5 pb-2 mt-4 text-2xl font-semibold text-gray-800 whitespace-nowrap bg-black bg-opacity-0 max-md:pr-5">
        {value}
      </p>
      {trend && (
        <div className="flex py-1 mt-2 w-full bg-black bg-opacity-0">
          {trendIcon && (
            <div className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
              <img
                src={trendIcon}
                className="object-contain self-stretch my-auto aspect-[0.79] w-[11px]"
                alt="Trend icon"
              />
            </div>
          )}
          <div className={`grow shrink text-sm ${trendColor} w-[235px]`}>
            {trendText}
          </div>
        </div>
      )}
    </article>
  );
}

export default PurchaseInventoryMetricCard;
