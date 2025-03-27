"use client";
import React from "react";
import { Logo, DropdownIcon } from "./Icons";

function Header2() {
  return (
    <header className="flex justify-between items-center px-20 py-0 h-16 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] max-md:px-10 max-md:py-8 max-sm:p-4">
      <div>
        <Logo />
      </div>
      <nav className="flex items-center">
        <div className="flex gap-6 items-center max-sm:hidden">
          <a href="#" className="text-base text-gray-600 cursor-pointer">
            Documentation
          </a>
          <a href="#" className="text-base text-gray-600 cursor-pointer">
            Support
          </a>
          <button className="flex gap-2 items-center cursor-pointer">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b35e72e25cbd9d23a2ce400aa1c9b3fb4f1a9023"
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
            <DropdownIcon />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header2;
