"use client";
import React from "react";

function IntegrationProgressIndicator({ currentStep = 1 }) {
  // Define the total number of steps
  const totalSteps = 3;

  // Calculate the width of the progress bar based on the current step
  const progressWidth = `${(currentStep / totalSteps) * 100}%`;

  return (
    <div className="mt-4 bg-opacity-0 max-md:max-w-full mb-10">
      <div className="bg-opacity-0 max-md:max-w-full">
        <div className="w-full bg-opacity-0 max-md:max-w-full">
          <div className="flex items-center bg-opacity-0">
            {/* Progress Bar */}
            <div className="flex flex-auto items-center mr-0 max-md:max-w-full">
              <div className="flex flex-col items-center my-auto mr-0 bg-gray-200 rounded-lg max-md:max-w-full">
                <div className="relative w-full h-2 bg-gray-300 rounded-full">
                  {/* Actual Progress */}
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
                    style={{ width: progressWidth }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between mt-4 gap-10 text-sm leading-none text-black max-md:max-w-full">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full border-2 ${currentStep >= 1 ? 'bg-blue-600' : 'bg-gray-200'}`} />
              <span className="mt-2.5 text-center font-medium">Select Provider</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full border-2 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
              <span className="mt-2.5 text-center font-medium">Grant Consent</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full border-2 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
              <span className="mt-2.5 text-center font-medium">Complete Setup</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegrationProgressIndicator;
