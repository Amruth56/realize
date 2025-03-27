import React from "react";

const CategoryFilters = () => {
  const categories = [
    "All Agents",
    "Finance",
    "Assessment",
    "Operations",
    "HR",
    "Analytics",
  ];

  return (
    <div className="flex gap-3 max-sm:flex-wrap">
      {categories.map((category, index) => (
        <button
          key={index}
          className="px-4 py-3 text-base text-gray-700 rounded-full border border-solid cursor-pointer"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
