import React from "react";

function UtilizationMetricCard({
  title,
  iconSrc,
  mainMetric,
  subMetrics,
  progressBarColor,
  progressBarWidth,
}) {
  return (
    <article className="p-6 mx-auto w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-8">
      <div className="flex gap-3 py-0.5 w-full">
        <div className="flex overflow-hidden justify-center items-center min-h-6">
          <img
            src={iconSrc}
            alt={`${title} icon`}
            className="object-contain self-stretch my-auto aspect-[1.25] w-[30px]"
          />
        </div>
        <h2 className="flex-auto text-xl font-semibold leading-none text-gray-800">
          {title}
        </h2>
      </div>

      <div className="mt-6">
        <div className="p-4 w-full bg-gray-50 rounded-lg">
          <div className="flex gap-5 justify-between pt-0.5 pb-2.5 text-base leading-none ">
            <p className="text-gray-600">{mainMetric.label}</p>
            <p className={`self-start font-semibold ${mainMetric.color}`}>
              {mainMetric.value}
            </p>
          </div>
          <div className="flex flex-col items-start mt-2 bg-gray-200 rounded-full max-md:pr-5">
            <div
              className={`flex shrink-0 h-2 ${progressBarColor} rounded-full ${progressBarWidth}`}
            />
          </div>
        </div>

        <div className="mt-4 w-full text-base leading-none whitespace-nowrap">
          {subMetrics.map((metric, index) => (
            <div
              key={index}
              className={`flex gap-5 justify-between py-1.5 ${index > 0 ? "mt-3" : ""}`}
            >
              <p className="text-gray-600">{metric.label}</p>
              <p className="self-start text-gray-800">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default UtilizationMetricCard;
