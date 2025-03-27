import React from "react";

function StatusMonitor() {
  return (
    <section className="flex gap-6 items-center p-6 mb-8 bg-blue-50 rounded-xl max-sm:flex-col max-sm:text-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/24024fcc353abe979786de7f6470eb3835a38829?placeholderIfAbsent=true"
        alt="System Monitor"
        className="w-16 h-16 rounded-full"
      />
      <div className="flex flex-col gap-3.5 max-sm:items-center">
        <h2 className="text-lg font-bold text-gray-800">
          System Status Monitor
        </h2>
        <p className="text-base text-gray-600">
          All systems nominal; 2 minor warnings detected in the network
          infrastructure. Monitoring active across 127 endpoints.
        </p>
      </div>
    </section>
  );
}

export default StatusMonitor;
