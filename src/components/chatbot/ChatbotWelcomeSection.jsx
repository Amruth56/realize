"use client";
import React from "react";

function ChatbotWelcomeSection() {
  return (
    <section className="flex flex-col items-start pr-20 pb-2 leading-none bg-opacity-0 max-md:pr-5 max-md:mr-0.5 max-md:max-w-full">
      <h1 className="text-3xl font-bold text-gray-800">Welcome back, John</h1>
      <p className="mt-5 text-base text-gray-600">
        Here's your analytics overview
      </p>
    </section>
  );
}

export default ChatbotWelcomeSection;
