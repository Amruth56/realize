"use client";
import React from "react";

const OemDashboardIntegrationTile = ({
  logo,
  name,
  isConnected,
  connectionDate,
  lastSync,
}) => {
  return (
    <article
      className={`px-6 pt-6 ${isConnected ? "pb-11" : "p-6"} mx-auto w-full bg-white rounded-xl border border-gray-100 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-6 max-md:max-w-full`}
    >
      <div className="flex gap-5 justify-between w-full bg-black bg-opacity-0">
        <div className="flex gap-3 bg-black bg-opacity-0">
          <div className="flex overflow-hidden justify-center items-center min-h-[30px]">
            <img
              src={logo}
              alt={`${name} logo`}
              className="object-contain self-stretch my-auto aspect-square w-[30px]"
            />
          </div>
          <h2 className="self-start text-lg font-semibold leading-none text-black">
            {name}
          </h2>
        </div>
        <div
          className={`flex gap-2 py-1 my-auto text-sm leading-none ${isConnected ? "text-emerald-600" : "text-gray-500"} whitespace-nowrap bg-black bg-opacity-0`}
        >
          <div
            className={`flex shrink-0 self-start w-3 h-3 ${isConnected ? "bg-emerald-500" : "bg-gray-300"} rounded-full`}
          />
          <span>{isConnected ? "Connected" : "Disconnected"}</span>
        </div>
      </div>

      <div
        className={`py-1 mt-4 text-sm ${isConnected ? "text-gray-600" : "text-gray-500"} bg-black bg-opacity-0 max-md:pr-5`}
      >
        {isConnected ? `Connected since ${connectionDate}` : "Not connected"}
      </div>

      {isConnected ? (
        <div className="flex gap-5 justify-between py-0.5 mt-4 text-sm leading-none text-blue-600 bg-black bg-opacity-0">
          <span>Last sync: {lastSync}</span>
          <img
            src={
              name === "Microsoft"
                ? "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/8c56ef310362d7696bf26512095a91305f615d64?placeholderIfAbsent=true"
                : name === "Salesforce"
                  ? "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/294dde25d2d76b6f9223fb85df8f8ec25764056d?placeholderIfAbsent=true"
                  : name === "AWS"
                    ? "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/973072562b4cae3c886e6fb87bdd91bc901758f7?placeholderIfAbsent=true"
                    : "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/78b8174f1cffb6a4372399f2313d7854ba172c85?placeholderIfAbsent=true"
            }
            alt="Refresh icon"
            className="object-contain shrink-0 self-start w-4 aspect-square"
          />
        </div>
      ) : (
        <div className="mt-4 text-base text-center text-white whitespace-nowrap bg-black bg-opacity-0">
          <button className="px-16 pt-2.5 pb-5 bg-blue-600 rounded-lg max-md:px-5">
            Connect
          </button>
        </div>
      )}
    </article>
  );
};

export default OemDashboardIntegrationTile;
