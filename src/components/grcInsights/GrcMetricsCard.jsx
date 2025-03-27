import React from "react";

function GrcMetricsCard({ title, value, description, iconSrc }) {
  return (
    <article className="p-6 mx-auto w-full bg-white rounded-xl border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-6">
      <div className="flex gap-5 justify-between py-1 w-full bg-opacity-0">
        <h2 className="text-lg font-semibold leading-none text-slate-800">
          {title}
        </h2>
        <div className="flex overflow-hidden justify-center items-center self-start min-h-5">
          <img
            src={iconSrc}
            className="object-contain self-stretch my-auto w-5 aspect-square"
            alt={`${title} icon`}
          />
        </div>
      </div>
      <p className="pb-3.5 mt-4 text-3xl font-bold whitespace-nowrap bg-opacity-0 text-slate-800 max-md:pr-5">
        {value}
      </p>
      <p className="py-1.5 mt-2 text-sm bg-opacity-0 text-slate-500 max-md:pr-5">
        {description}
      </p>
    </article>
  );
}

export default GrcMetricsCard;
