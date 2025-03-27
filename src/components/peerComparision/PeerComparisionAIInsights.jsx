import React from "react";

const PeerComparisonAIInsights = () => {
  return (
    <section className="flex flex-col justify-center p-6 w-full bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
      <div className="flex flex-wrap gap-6 pr-20 bg-black bg-opacity-0 max-md:pr-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/cc8b803c88dd5ec7e37ad9f8f0efe5fbbf50a0a3?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-start w-12 rounded-full aspect-square"
          alt="AI assistant avatar"
        />
        <div className="flex flex-col py-0.5 bg-black bg-opacity-0">
          <h2 className="self-start text-lg font-semibold leading-none text-black">
            AI Insights
          </h2>
          <ul className="flex flex-col items-start py-1 pr-3 mt-4 w-full bg-black bg-opacity-0">
            <li className="flex self-stretch w-full">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/23b1c9fa30330c3564fc35746a0f393bc1acd33d?placeholderIfAbsent=true"
                  className="object-contain self-stretch my-auto aspect-[1.12] w-[18px]"
                  alt="Info icon"
                />
              </div>
              <p className="flex-auto text-base leading-none text-gray-700 w-[333px]">
                Your IT spend is 10% above industry average
              </p>
            </li>
            <li className="flex mt-5 max-w-full w-[249px]">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/4deb0d85fd237c83c0238431bd6417499e108400?placeholderIfAbsent=true"
                  className="object-contain self-stretch my-auto aspect-[1.12] w-[18px]"
                  alt="Info icon"
                />
              </div>
              <p className="grow shrink text-base leading-none text-gray-700 w-[227px]">
                ROI is 15% higher than average
              </p>
            </li>
            <li className="flex mt-5 max-w-full w-[306px]">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/3ee2c026581d941ed9c7aa5312ff83b3497fcb06?placeholderIfAbsent=true"
                  className="object-contain self-stretch my-auto w-4 aspect-square"
                  alt="Info icon"
                />
              </div>
              <p className="flex-auto text-base leading-none text-gray-700 w-[287px]">
                Tech adoption rate leads 20% of peers
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PeerComparisonAIInsights;
