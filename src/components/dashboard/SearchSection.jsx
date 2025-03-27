import React from "react";
import CategoryFilters from "./CategoryFilters";

const SearchSection = () => {
  return (
    <section className="px-20 py-8 bg-white max-md:px-10 max-md:py-8 max-sm:p-4">
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-center px-4 py-0 bg-white rounded-lg border border-solid h-[50px]">
          <i className="ti ti-search" />
          <input
            type="text"
            placeholder="Search for agents by name or capability"
            className="w-full text-base text-gray-400 border-[none]"
          />
        </div>
        <CategoryFilters />
      </div>
    </section>
  );
};

export default SearchSection;
