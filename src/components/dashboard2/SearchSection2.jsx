"use client";
import React from "react";
import { SearchIcon } from "./Icons";
import CategoryFilter from "./CategoryFilter";

function SearchSection2() {
  const categories = [
    "All Agents",
    "Finance",
    "Assessment",
    "Operations",
    "HR",
    "Analytics"
  ];

  return (
    <section className="px-20 py-8 bg-white max-md:px-10 max-md:py-8 max-sm:p-4">
      <div className="mx-auto my-0 max-w-screen-xl">
        <div className="flex flex-col gap-6">
          <div className="relative w-full">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for agents by name or capability"
              className="py-0 pr-4 pl-12 w-full text-base text-gray-400 rounded-lg border border-solid h-[50px]"
              aria-label="Search for agents"
            />
          </div>
          <CategoryFilter categories={categories} />
        </div>
      </div>
    </section>
  );
}

export default SearchSection2;
