import React from "react";

function PurchaseInventoryHeader() {
  return (
    <header className="flex flex-col justify-center px-16 py-px w-full bg-white border border-b max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-7 py-4 pl-5 bg-black bg-opacity-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/f396d9c62786036be5566eb3ebb08a3e330a1568?placeholderIfAbsent=true"
          className="object-contain shrink-0 my-auto max-w-full aspect-[3.47] w-[111px]"
          alt="Company logo"
        />
        <div className="flex flex-wrap flex-auto gap-10 pl-20 bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex gap-7 py-0.5 pl-9 my-auto bg-black bg-opacity-0">
            <h1 className="text-2xl font-semibold leading-none text-gray-800 basis-auto">
              Purchase Inventory
            </h1>
            <span className="px-3 pt-1.5 pb-3 text-sm text-blue-700 whitespace-nowrap bg-blue-100 rounded-full">
              2025
            </span>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/aeab7cc3f1a55103c78b6ce9b209604410b6ce67?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[1.82] w-[73px]"
            alt="User profile"
          />
        </div>
      </div>
    </header>
  );
}

export default PurchaseInventoryHeader;
