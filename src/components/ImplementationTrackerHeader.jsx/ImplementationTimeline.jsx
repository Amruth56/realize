import React from "react";
import TimelineItem from "./ImplementationTrackerTimelineItem";

function ImplementationTrackerImplementationTimeline() {
  const timelineItems = [
    { name: "Procurement", progress: 100 },
    { name: "Setup", progress: 75 },
    { name: "Pilot", progress: 45 },
    { name: "Rollout", progress: 0 },
  ];

  return (
    <section className="px-20 py-9 max-md:p-6 max-sm:p-4">
      <h2 className="mb-7 text-xl font-semibold text-black">
        Implementation Timeline
      </h2>
      <div className="p-6 bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            name={item.name}
            progress={item.progress}
            isLast={index === timelineItems.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export default ImplementationTrackerImplementationTimeline;
