import React from "react";

const ManageConnectionsButton = () => {
  return (
    <button className="flex gap-2.5 py-0.5 max-w-full w-[168px]">
      <span className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/6389dee73ba9fa3f4691ef1e74ade1ddf966ef37?placeholderIfAbsent=true"
          alt="Manage icon"
          className="object-contain self-stretch my-auto aspect-[1.29] w-[18px]"
        />
      </span>
      <span className="grow shrink text-sm text-center text-blue-600 w-[137px]">
        Manage Connections
      </span>
    </button>
  );
};

export default ManageConnectionsButton;
