"use client";
import React from "react";

const SearchSection2 = () => {
  return (
    <section className="px-20 py-8 bg-white max-md:px-10 max-sm:px-5">
      <div className="mx-auto max-w-screen-xl">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for agents by name or capability"
            className="pr-4 pl-12 w-full text-base text-gray-400 rounded-lg border-[1px_solid_#E5E7EB] h-[50px]"
          />
          <div className="absolute left-[16px] top-[50%] transform -translate-y-1/2">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;19:3607&quot; layer-name=&quot;Frame&quot; width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 16 16&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[16px] h-[16px]&quot;> <g clip-path=&quot;url(#clip0_19_3607)&quot;> <path d=&quot;M13 6.5C13 7.93437 12.5344 9.25938 11.75 10.3344L15.7063 14.2937C16.0969 14.6844 16.0969 15.3188 15.7063 15.7094C15.3156 16.1 14.6812 16.1 14.2906 15.7094L10.3344 11.75C9.25938 12.5375 7.93437 13 6.5 13C2.90937 13 0 10.0906 0 6.5C0 2.90937 2.90937 0 6.5 0C10.0906 0 13 2.90937 13 6.5ZM6.5 11C7.09095 11 7.67611 10.8836 8.22208 10.6575C8.76804 10.4313 9.26412 10.0998 9.68198 9.68198C10.0998 9.26412 10.4313 8.76804 10.6575 8.22208C10.8836 7.67611 11 7.09095 11 6.5C11 5.90905 10.8836 5.32389 10.6575 4.77792C10.4313 4.23196 10.0998 3.73588 9.68198 3.31802C9.26412 2.90016 8.76804 2.56869 8.22208 2.34254C7.67611 2.1164 7.09095 2 6.5 2C5.90905 2 5.32389 2.1164 4.77792 2.34254C4.23196 2.56869 3.73588 2.90016 3.31802 3.31802C2.90016 3.73588 2.56869 4.23196 2.34254 4.77792C2.1164 5.32389 2 5.90905 2 6.5C2 7.09095 2.1164 7.67611 2.34254 8.22208C2.56869 8.76804 2.90016 9.26412 3.31802 9.68198C3.73588 10.0998 4.23196 10.4313 4.77792 10.6575C5.32389 10.8836 5.90905 11 6.5 11Z&quot; fill=&quot;black&quot;></path> </g> <defs> <clipPath id=&quot;clip0_19_3607&quot;> <path d=&quot;M0 0H16V16H0V0Z&quot; fill=&quot;white&quot;></path> </clipPath> </defs> </svg>",
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 max-sm:grid max-sm:grid-cols-2">
          <CategoryButton label="All Agents" isActive={true} />
          <CategoryButton label="Finance" />
          <CategoryButton label="Assessment" />
          <CategoryButton label="Operations" />
          <CategoryButton label="HR" />
          <CategoryButton label="Analytics" isBlue={true} />
        </div>
      </div>
    </section>
  );
};

const CategoryButton = ({ label, isActive, isBlue }) => {
  const baseClasses =
    "px-4 py-3 text-base rounded-full border-[1px_solid_#E5E7EB]";

  let colorClasses = "text-gray-700 bg-white";

  if (isActive) {
    colorClasses = "text-black bg-white";
  }

  if (isBlue) {
    colorClasses = "text-white bg-blue-600";
  }

  return <button className={`${baseClasses} ${colorClasses}`}>{label}</button>;
};

export default SearchSection2;
