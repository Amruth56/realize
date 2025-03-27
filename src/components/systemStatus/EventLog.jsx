import React from "react";

function EventLogItem({ time, severity, message }) {
  const getSeverityStyles = () => {
    switch (severity) {
      case "Critical":
        return "text-red-600 bg-red-50";
      case "Warning":
        return "text-amber-600 bg-amber-50";
      case "Info":
      default:
        return "text-blue-600 bg-blue-50";
    }
  };

  return (
    <div className="flex items-center px-0 py-3 border-b border-solid border-b-gray-100">
      <div className="w-16 text-xs text-gray-500">{time}</div>
      <div
        className={`px-2 py-1 mr-3 text-xs rounded-full ${getSeverityStyles()}`}
      >
        {severity}
      </div>
      <div className="flex-1 text-sm text-gray-700">{message}</div>
      <i className="ti ti-chevron-right text-base text-black" />
    </div>
  );
}

function EventLog() {
  const events = [
    {
      time: "10:45 AM",
      severity: "Info",
      message: "System health check completed successfully",
    },
    {
      time: "10:30 AM",
      severity: "Warning",
      message: "Network latency detected on east cluster",
    },
    {
      time: "10:15 AM",
      severity: "Critical",
      message: "Failed login attempts exceeded threshold",
    },
  ];

  return (
    <section className="p-6 bg-white rounded-xl border border-gray-100 border-solid">
      <h3 className="mb-4 text-lg font-bold text-gray-800">Event Log</h3>
      <div className="flex flex-col">
        {events.map((event, index) => (
          <EventLogItem
            key={index}
            time={event.time}
            severity={event.severity}
            message={event.message}
          />
        ))}
      </div>
    </section>
  );
}

export default EventLog;
