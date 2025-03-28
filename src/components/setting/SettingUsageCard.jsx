import React from "react";

function SettingUsageCard() {
  return (
    <article className="p-6 bg-white rounded-lg border border shadow-sm">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-black">Monthly Usage</h2>
        <AnalyticsChartIcon />
      </header>
      <p className="text-3xl font-bold text-emerald-600">1,280</p>
      <p className="text-sm text-gray-500">Coins Used This Month</p>
    </article>
  );
}

function AnalyticsChartIcon() {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[20px] h-[20px]"
    >
      <g clipPath="url(#clip0_31_284)">
        <path
          d="M2.82812 2.5C2.82812 1.80859 2.26953 1.25 1.57812 1.25C0.886719 1.25 0.328125 1.80859 0.328125 2.5V15.625C0.328125 17.3516 1.72656 18.75 3.45312 18.75H19.0781C19.7695 18.75 20.3281 18.1914 20.3281 17.5C20.3281 16.8086 19.7695 16.25 19.0781 16.25H3.45312C3.10938 16.25 2.82812 15.9688 2.82812 15.625V2.5ZM18.7109 5.88281C19.1992 5.39453 19.1992 4.60156 18.7109 4.11328C18.2227 3.625 17.4297 3.625 16.9414 4.11328L12.8281 8.23047L10.5859 5.98828C10.0977 5.5 9.30469 5.5 8.81641 5.98828L4.44141 10.3633C3.95312 10.8516 3.95312 11.6445 4.44141 12.1328C4.92969 12.6211 5.72266 12.6211 6.21094 12.1328L9.70312 8.64453L11.9453 10.8867C12.4336 11.375 13.2266 11.375 13.7148 10.8867L18.7148 5.88672L18.7109 5.88281Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_31_284">
          <path d="M0.328125 0H20.3281V20H0.328125V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SettingUsageCard;
