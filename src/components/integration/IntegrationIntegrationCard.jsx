"use client";
import React from "react";

function IntegrationIntegrationCard({
  type,
  title,
  description,
  buttonText,
  recommended = false,
  imageSrc,
}) {
  const handleConnect = () => {
    console.log(`Connecting with ${type}`);
    // Integration logic would go here
  };

  return (
    <article className="px-6 py-7 mx-auto w-full bg-white rounded-xl border border border-solid max-md:px-5 max-md:mt-6 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full bg-opacity-0 max-md:max-w-full">
        <figure className="flex overflow-hidden justify-center items-center min-h-9">
          <img
            src={imageSrc}
            className="object-contain self-stretch my-auto w-8 aspect-square"
            alt={`${type} logo`}
          />
        </figure>
        {recommended && (
          <span className="px-3.5 py-2.5 my-auto text-sm text-blue-700 whitespace-nowrap bg-blue-50 rounded-full">
            Recommended
          </span>
        )}
      </div>
      <h3 className="py-1.5 mt-4 text-xl font-semibold text-gray-900 bg-opacity-0 max-md:pr-5 max-md:max-w-full">
        {title}
      </h3>
      <p className="flex flex-col py-1.5 pr-3 mt-2 text-base text-gray-600 bg-opacity-0 max-md:max-w-full">
        {description.split(" and ").map((part, index, array) => (
          <span
            key={index}
            className={index > 0 ? "self-start mt-2" : "max-md:max-w-full"}
          >
            {index < array.length - 1 ? `${part} and` : part}
          </span>
        ))}
      </p>
      <button
        onClick={handleConnect}
        className={`bg-blue-600 flex justify-center max-md:max-w-full max-md:px-5 mt-4 px-16 py-2 rounded-lg text-base text-center text-white w-[100%] ${
          recommended
            ? "text-white bg-blue-600"
            : "text-gray-700 bg-white border border-gray-300 border-solid"
        }`}
      >
        {buttonText}
      </button>
    </article>
  );
}

export default IntegrationIntegrationCard;
