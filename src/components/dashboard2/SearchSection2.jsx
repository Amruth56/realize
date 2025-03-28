"use client";
import React from "react";
import { useRouter } from 'next/navigation';

const SearchSection2 = () => {
  const router = useRouter();

  const navigateToAnalytics = () => {
    router.push('/dashboard2');
  };

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
                  `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                  xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)">
                  <path d="M13 6.5C13 7.93 12.53 9.26 11.75 10.33L15.7 14.29C16.1 14.68
                  16.1 15.32 15.7 15.71C15.31 16.1 14.68 16.1 14.29 15.71L10.33
                  11.75C9.26 12.54 7.93 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91
                  2.91 0 6.5 0C10.09 0 13 2.91 13 6.5ZM6.5 11C8.43 11 10 9.43
                  10 7.5C10 5.57 8.43 4 6.5 4C4.57 4 3 5.57 3 7.5C3 9.43 4.57
                  11 6.5 11Z" fill="black"/></g><defs><clipPath id="clip0">
                  <rect width="16" height="16" fill="white"/></clipPath>
                  </defs></svg>`,
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
          <CategoryButton
            onClick={navigateToAnalytics}
            label="Analytics"
            isBlue={true}
          />
        </div>
      </div>
    </section>
  );
};

const CategoryButton = ({ label, isActive, isBlue, onClick }) => {
  const baseClasses =
    "px-4 py-3 text-base rounded-full border-[1px_solid_#E5E7EB]";

  let colorClasses = "text-gray-700 bg-white";

  if (isActive) {
    colorClasses = "text-black bg-white";
  }

  if (isBlue) {
    colorClasses = "text-white bg-blue-600";
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${colorClasses}`}>
      {label}
    </button>
  );
};

export default SearchSection2;
