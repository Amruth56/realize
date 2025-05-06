import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CategoryFilters from "./CategoryFilters";

const SearchSection = () => {
  return (
    <section className="px-20 py-8 bg-white max-md:px-10 max-md:py-8 max-sm:p-4">
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-center px-4 h-[50px] rounded-lg bg-white border border-gray-300 focus-within:border-gray-300 focus-within:ring-0">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search for agents by name or capability"
            className="w-full text-base text-gray-700 bg-transparent border-none placeholder-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
        <CategoryFilters />
      </div>
    </section>
  );
};

export default SearchSection;
