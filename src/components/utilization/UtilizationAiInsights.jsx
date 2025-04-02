import React from "react";

function UtilizationAiInsights() {
  return (
    <section className="flex flex-col justify-center p-6 w-full bg-blue-50 rounded-xl max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
      <div className="flex flex-wrap gap-4 pr-20max-md:pr-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/ccebabc0cf4aabc6220b90e28b060a47407039a9?placeholderIfAbsent=true"
          alt="AI Assistant"
          className="object-contain shrink-0 self-start w-12 rounded-full aspect-square"
        />
        <div className="flex flex-col py-0.5 max-md:max-w-full">
          <h2 className="self-start text-lg font-semibold leading-none text-gray-800">
            AI Insights
          </h2>
          <div className="py-1 pr-3 mt-4 w-full  max-md:max-w-full">
            <div className="flex gap-2 w-full max-md:max-w-full">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/ccba6cf4b774cd6666745e3134c70888bd61a1f7?placeholderIfAbsent=true"
                  alt="Alert icon"
                  className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
                />
              </div>
              <p className="flex-auto text-base leading-none text-gray-600 w-[433px] max-md:max-w-full">
                CRM licenses are only 50% utilized – consider reallocation
              </p>
            </div>
            <div className="flex gap-2 mt-3.5 max-w-full w-[377px]">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/b2b6c334e2bc9445c91a42247e5106b77ca6aa2e?placeholderIfAbsent=true"
                  alt="Info icon"
                  className="object-contain self-stretch my-auto w-4 aspect-square"
                />
              </div>
              <p className="flex-auto text-base leading-none text-gray-600 w-[350px]">
                Team capacity is approaching peak in Q3 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UtilizationAiInsights;
