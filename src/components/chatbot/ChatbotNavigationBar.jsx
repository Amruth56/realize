"use client";
import React from "react";

function ChatbotNavigationBar() {
  return (
    <nav className="px-20 w-full text-base leading-none text-gray-700 whitespace-nowrap bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:max-w-full">
      <div className="px-4 w-full bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between py-3.5 w-full bg-opacity-0 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start p-0.5 my-auto bg-opacity-0 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/05714e6f25e995bca996064a7e12e540322cef50?placeholderIfAbsent=true"
              className="object-contain shrink-0 max-w-full aspect-[3.47] w-[111px]"
              alt="Company logo"
            />
            <div className="flex flex-auto gap-7 py-1.5 bg-opacity-0">
              <button className="grow">Dashboard</button>
              <button>Analytics</button>
              <button>Reports</button>
              <button>Settings</button>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/4b1e524b02af9bec103c0e47ac11bbb7d0e2e340?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[2.25] w-[81px]"
            alt="User profile"
          />
        </div>
      </div>
    </nav>
  );
}

export default ChatbotNavigationBar;
