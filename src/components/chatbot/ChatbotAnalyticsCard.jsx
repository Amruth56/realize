"use client";
import React from "react";

function ChatbotAnalyticsCard({
  title,
  value,
  icon,
  trend,
  trendValue,
  additionalInfo,
}) {
  return (
    <article className="p-6 mx-auto w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-6">
      <header className="flex gap-5 justify-between py-1.5 w-full bg-opacity-0">
        <h2 className="text-lg font-semibold leading-none text-gray-800">
          {title}
        </h2>
        <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
          <img
            src={icon}
            className="object-contain self-stretch my-auto w-5 aspect-[1.25]"
            alt={`${title} icon`}
          />
        </div>
      </header>
      <p className="pb-2.5 mt-4 text-3xl font-bold text-gray-900 whitespace-nowrap bg-opacity-0 max-md:pr-5">
        {value}
      </p>
      {trend && trendValue && (
        <div className="flex py-0.5 mt-2 w-full bg-opacity-0">
          <div className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
            <img
              src={trend}
              className="object-contain self-stretch my-auto aspect-[0.79] w-[11px]"
              alt="Trend indicator"
            />
          </div>
          <div className="flex-auto text-sm text-emerald-600 w-[339px]">
            {trendValue}
          </div>
        </div>
      )}
      {additionalInfo && (
        <p className="py-1 mt-2 text-sm text-blue-600 bg-opacity-0 max-md:pr-5">
          {additionalInfo}
        </p>
      )}
    </article>
  );
}

export default ChatbotAnalyticsCard;
