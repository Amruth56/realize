import React from "react";

function StatusCard({ type, count, description }) {
  const getTypeStyles = () => {
    switch (type) {
      case "Critical":
        return {
          textColor: "text-red-600",
          bgColor: "bg-red-600",
        };
      case "Warnings":
        return {
          textColor: "text-amber-600",
          bgColor: "bg-amber-600",
        };
      case "Information":
        return {
          textColor: "text-blue-600",
          bgColor: "bg-blue-600",
        };
      case "Healthy":
        return {
          textColor: "text-emerald-600",
          bgColor: "bg-emerald-600",
        };
      default:
        return {
          textColor: "text-gray-600",
          bgColor: "bg-gray-600",
        };
    }
  };

  const { textColor, bgColor } = getTypeStyles();

  return (
    <article className="flex flex-col flex-1 gap-2 p-4 rounded-lg max-md:w-full">
      <div className="flex justify-between items-center">
        <span className={`text-base font-bold ${textColor}`}>{type}</span>
        <div
          className={`px-2 py-1.5 text-xs text-center text-white ${bgColor} rounded-full min-w-[23px]`}
        >
          {count}
        </div>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </article>
  );
}

function StatusCards() {
  const statusData = [
    {
      type: "Critical",
      count: 2,
      description: "Security breach attempts",
    },
    {
      type: "Warnings",
      count: 5,
      description: "Performance issues",
    },
    {
      type: "Information",
      count: 12,
      description: "System updates",
    },
    {
      type: "Healthy",
      count: 108,
      description: "Systems operational",
    },
  ];

  return (
    <section className="flex gap-6 mb-8 max-md:flex-col max-sm:gap-4">
      {statusData.map((status, index) => (
        <StatusCard
          key={index}
          type={status.type}
          count={status.count}
          description={status.description}
        />
      ))}
    </section>
  );
}

export default StatusCards;
