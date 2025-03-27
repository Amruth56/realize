import React from "react";

const IntegrationItem = ({ provider, isConnected, imageUrl }) => {
  return (
    <section className="flex flex-col justify-center items-start px-2 py-2.5 mt-2 w-full leading-none rounded-md">
      <div className="flex gap-2">
        <img
          src={imageUrl}
          alt={`${provider} logo`}
          className="object-contain shrink-0 self-start mt-1.5 aspect-square w-[27px]"
        />
        <div className="py-1">
          <h3 className="text-sm font-medium text-gray-700">{provider}</h3>
          <p
            className={`mt-2 text-xs ${
              isConnected ? "text-emerald-600" : "text-gray-500"
            }`}
          >
            {isConnected ? "Connected" : "Not Connected"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationItem;
