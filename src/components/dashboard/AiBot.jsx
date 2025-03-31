"use client";

export default function AiBot() {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col items-end gap-2 z-50">
      {/* Avatar image on top */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d39914e84d85c37858a537a0b4cd258af7aa1008"
        alt="Footer avatar"
        className="w-20 h-20 rounded-full"
      />
      {/* Integration Status block below */}
      <div className="flex gap-2 items-center px-4 py-1.5 text-sm text-white bg-blue-600 rounded-tl-lg">
        <div>Integration Status</div>
        <div>
          <i className="ti ti-dots" />
        </div>
      </div>
    </div>
  );
}
