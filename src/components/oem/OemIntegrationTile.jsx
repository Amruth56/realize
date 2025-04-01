import React from "react";

const OemIntegrationTile = ({
  logo,
  name,
  isConnected,
  connectionDate,
  lastSyncTime,
}) => {
  return (
    <article className="p-6 mx-auto w-full bg-white rounded-xl border border-gray-100 border-solid shadow-lg max-md:px-5 max-md:mt-6 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full bg-opacity-0">
        <div className="flex gap-3 bg-opacity-0">
          <div className="flex overflow-hidden justify-center items-center min-h-[30px]">
            <img
              src={logo}
              alt={`${name} logo`}
              className="object-contain self-stretch my-auto aspect-square w-[30px]"
            />
          </div>
          <h3 className="self-start text-lg font-semibold leading-none text-black">
            {name}
          </h3>
        </div>
        <div
          className={`flex gap-2 py-1 my-auto text-sm leading-none ${
            isConnected ? "text-emerald-600" : "text-gray-500"
          } whitespace-nowrap bg-opacity-0`}
        >
          <div
            className={`flex shrink-0 self-start w-3 h-3 ${
              isConnected ? "bg-emerald-500" : "bg-gray-300"
            } rounded-full`}
          />
          <span>{isConnected ? "Connected" : "Disconnected"}</span>
        </div>
      </div>
      <div
        className={`py-1 mt-4 text-sm ${
          isConnected ? "text-gray-600" : "text-gray-500"
        } bg-opacity-0 max-md:pr-5`}
      >
        {isConnected ? connectionDate : "Not connected"}
      </div>
      {isConnected ? (
        <div className="flex gap-5 justify-between py-0.5 mt-4 text-sm leading-none text-blue-600bg-opacity-0">
          <div>{lastSyncTime}</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/8c56ef310362d7696bf26512095a91305f615d64?placeholderIfAbsent=true"
            alt="Refresh icon"
            className="object-contain shrink-0 self-start w-4 aspect-square"
          />
        </div>
      ) : (
        <div className="mt-2 text-base text-center text-white whitespace-nowrap bg-opacity-0">
          <button className="px-12 py-1.5 bg-blue-600 rounded-lg max-md:px-5">
            Connect
          </button>
        </div>
      )}
    </article>
  );
};

export default OemIntegrationTile;
