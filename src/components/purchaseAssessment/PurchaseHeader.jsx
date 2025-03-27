import React from "react";

function PurchaseHeader() {
  return (
    <header className="flex flex-col justify-center px-20 py-px w-full text-xl font-semibold leading-none text-black bg-white border border-b max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-6 py-4 w-full bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start py-0.5 bg-black bg-opacity-0 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/c3f537c3e6722807caf28abaf4d90296fe5680c5?placeholderIfAbsent=true"
              className="object-contain shrink-0 max-w-full aspect-[3.47] w-[111px]"
              alt="Company logo"
            />
            <h1>Purchase Assessment</h1>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/7368ea766bd889dbeb71654d41757c16f0e0f964?placeholderIfAbsent=true"
            className="object-contain shrink-0 my-auto aspect-[2.55] w-[51px]"
            alt="Status icon"
          />
        </div>
      </div>
    </header>
  );
}

export default PurchaseHeader;
