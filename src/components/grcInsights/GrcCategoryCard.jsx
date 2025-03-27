import React from "react";
import GrcStatItem from "./GrcStatItem";

function GrcCategoryCard({
  title,
  subtitle,
  iconSrc,
  bgColor,
  alertType,
  alertIcon,
  alertMessage,
  stats,
}) {
  return (
    <article className="overflow-hidden grow p-px w-full bg-white rounded-xl border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:mt-6">
      <div
        className={`px-6 py-6 w-full ${bgColor} border-b border-slate-200 max-md:px-5`}
      >
        <div className="flex gap-4 pr-16 leading-none bg-opacity-0 max-md:pr-5">
          <img
            src={iconSrc}
            className="object-contain shrink-0 w-12 rounded-full aspect-square"
            alt={`${title} icon`}
          />
          <div className="flex flex-col py-1 bg-opacity-0">
            <h2 className="self-start text-xl font-semibold text-slate-800">
              {title}
            </h2>
            <p className="mt-3.5 text-sm text-slate-500">{subtitle}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center p-4 mt-4 bg-white rounded-lg">
          <div className="flex flex-col py-1.5 pr-3 w-full bg-opacity-0">
            <div className="flex gap-2 w-full">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
                <img
                  src={alertIcon}
                  className="object-contain self-stretch my-auto aspect-[1.29] w-[18px]"
                  alt="Alert icon"
                />
              </div>
              <p className="flex-auto text-sm text-slate-600 w-[271px]">
                {alertMessage[0]}
              </p>
            </div>
            <p className="self-start mt-1.5 text-sm text-slate-600">
              {alertMessage[1]}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-6 text-sm leading-none bg-opacity-0 max-md:px-5">
        <div className="w-full bg-opacity-0">
          {stats.map((stat, index) => (
            <GrcStatItem
              key={index}
              label={stat.label}
              value={stat.value}
              color={stat.color}
              isFirst={index === 0}
              isLast={index === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default GrcCategoryCard;
