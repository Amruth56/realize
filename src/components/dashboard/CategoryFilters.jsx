"use client";
import React from "react";
import { useRouter } from "next/navigation";

const CategoryFilters = () => {
  const router = useRouter();

  const categories = [
    "All Agents",
    "Finance",
    "Assessment",
    "Operations",
    "HR",
    "Analytics",
  ];

  const handleClick = (category) => {
    if (category === "Analytics") {
      router.push("/dashboard2");
    } else {
      // Handle other categories if needed
      console.log(`Selected category: ${category}`);
    }
  };

  return (
    <div className="flex gap-3 max-sm:flex-wrap">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleClick(category)}
          className="px-4 py-3 text-base text-gray-700 rounded-full border border-solid cursor-pointer"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
