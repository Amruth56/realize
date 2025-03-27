"use client";
import React from "react";

const OemDashboardFooter = () => {
  return (
    <footer className="flex flex-col pr-6 pb-2.5 pl-20 mt-12 w-full leading-none bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-end max-w-full text-sm font-medium text-white w-[136px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/4c3a8c0464b7c9354e93ec5e89b2fabf76373474?placeholderIfAbsent=true"
          alt="Company logo"
          className="object-contain self-center w-20 rounded-full aspect-square"
        />
        <h3 className="gap-3.5 mt-7 w-[120px]">Integration Status</h3>
      </div>
      <div className="flex flex-col justify-center px-8 py-6 mt-1 w-full max-w-screen-xl text-base text-gray-500 bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 w-full bg-black bg-opacity-0 max-md:max-w-full">
          <p>© 2025 Realize Platform. All rights reserved.</p>
          <nav className="flex flex-1 gap-7 py-1.5 bg-black bg-opacity-0">
            <a href="#" className="grow">
              Privacy Policy
            </a>
            <a href="#" className="basis-auto">
              Terms of Service
            </a>
            <a href="#" className="basis-auto">
              Support
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default OemDashboardFooter;

