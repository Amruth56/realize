import React from "react";

function ValueRealizationMetricCard({ title, value, change, trend, icon }) {
  const TrendIcon = () => (
    <div>
      <svg
        id="17:1783"
        layer-name="Frame"
        width="11"
        height="15"
        viewBox="0 0 11 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[10.5px] h-[14px]"
      >
        <g clipPath="url(#clip0_17_1783)">
          <path
            d="M5.86807 1.88184C5.52627 1.54004 4.97119 1.54004 4.6294 1.88184L0.254395 6.25684C-0.0874024 6.59863 -0.0874024 7.15371 0.254395 7.49551C0.596191 7.8373 1.15127 7.8373 1.49307 7.49551L4.3751 4.61074V12.9998C4.3751 13.4838 4.76611 13.8748 5.2501 13.8748C5.73408 13.8748 6.1251 13.4838 6.1251 12.9998V4.61074L9.00713 7.49277C9.34893 7.83457 9.90401 7.83457 10.2458 7.49277C10.5876 7.15098 10.5876 6.5959 10.2458 6.2541L5.8708 1.8791L5.86807 1.88184Z"
            fill="black"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_17_1783">
            <path d="M0 0.75H10.5V14.75H0V0.75Z" fill="white"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );

  return (
    <article className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-2">
        <span className="text-base text-gray-500">{title}</span>
        <div>{icon}</div>
      </div>
      <div className="mb-2 text-3xl font-bold text-gray-900">{value}</div>
      <div className="flex gap-3 items-center">
        <TrendIcon />
        <span className="text-sm text-emerald-600">{change}</span>
      </div>
    </article>
  );
}

export default ValueRealizationMetricCard;
