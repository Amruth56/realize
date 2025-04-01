import React from "react";

function PurchaseInventoryFilterItem({
  label,
  value,
  icon = "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/34eb4f056ef1609c8cbaee49d401307a170ef74e?placeholderIfAbsent=true",
}) {
  return (
    <div className="p-4 mx-auto w-full bg-white rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:mt-4">
      <label className="py-1 text-sm text-gray-600 whitespace-nowrap max-md:pr-5">
        {label}
      </label>
      <div className="flex gap-5 justify-between px-2.5 py-2 mt-2 text-base text-black bg-white rounded-lg border border border-solid">
        <div className="my-auto">{value}</div>
        <img
          src={icon}
          className="object-contain shrink-0 aspect-square w-[23px]"
          alt="Dropdown icon"
        />
      </div>
    </div>
  );
}

export default PurchaseInventoryFilterItem;
