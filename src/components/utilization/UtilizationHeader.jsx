import React from "react";

function UtilizationHeader() {
  return (
    <header className="flex flex-col justify-center px-20 py-px w-full text-2xl font-bold leading-none text-gray-800 bg-white border border-b max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-6 py-4 w-full bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start py-px bg-black bg-opacity-0 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/704d9517aa9edf93c21052249f9881905fe8eda3?placeholderIfAbsent=true"
              alt="Company logo"
              className="object-contain shrink-0 max-w-full aspect-[3.47] w-[111px]"
            />
            <h1>Utilization Overview</h1>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/fc9623f799257bfa753b2d4aead019d44c18d57e?placeholderIfAbsent=true"
            alt="User profile"
            className="object-contain shrink-0 aspect-[2.03] w-[65px]"
          />
        </div>
      </div>
    </header>
  );
}

export default UtilizationHeader;
