import React from "react";

const OemHeader = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between pt-px pr-20 pb-2 pl-5 mx-6 max-w-full leading-none bg-black bg-opacity-0 w-[1392px] max-md:pr-5 max-md:mr-2.5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/3f9f83dfcea5e44355d5dc531b0a348c947485fc?placeholderIfAbsent=true"
        alt="Company logo"
        className="object-contain shrink-0 my-auto max-w-full aspect-[3.47] w-[111px]"
      />
      <div className="flex flex-col">
        <h1 className="self-center text-2xl font-semibold text-gray-800">
          OEM Integrations
        </h1>
        <p className="mt-3.5 text-base text-gray-600">
          Monitor and manage your connected services
        </p>
      </div>
    </header>
  );
};

export default OemHeader;
