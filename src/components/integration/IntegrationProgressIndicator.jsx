"use client";
import React from "react";

function IntegrationProgressIndicator() {
  return (
    <div className="mt-4 bg-opacity-0 max-md:max-w-full">
      <div className="bg-opacity-0 max-md:max-w-full">
        <div className="w-full bg-opacity-0 max-md:max-w-full">
          <div className="flex bg-opacity-0">
            <div className="flex flex-auto mr-0 max-md:max-w-full">
              <div className="flex flex-col items-start my-auto mr-0 bg-gray-200 rounded max-md:max-w-full">
                <div className="flex shrink-0 max-w-full h-2 bg-blue-600 rounded w-[401px]" />
              </div>
              <div className="flex flex-col pb-2 text-sm leading-none text-black bg-opacity-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/03ea42f50ee91a42fe668d31dda7ca6170230c1f?placeholderIfAbsent=true"
                  className="object-contain self-center w-6 rounded-full aspect-square"
                  alt="Step 1 indicator"
                />
                <span className="mt-2.5">Select Provider</span>
              </div>
            </div>
            <div className="flex flex-wrap flex-auto gap-10 text-sm leading-none text-black max-md:max-w-full">
              <div className="flex flex-col pb-2 bg-opacity-0">
                <div className="flex shrink-0 self-center w-6 h-6 bg-gray-200 rounded-full" />
                <span className="mt-2.5">Grant Consent</span>
              </div>
              <div className="flex flex-col py-1 bg-opacity-0">
                <div className="flex shrink-0 self-center w-6 h-6 bg-gray-200 rounded-full" />
                <span className="mt-2.5">Complete Setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegrationProgressIndicator;
