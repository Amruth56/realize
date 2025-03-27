import React from "react";

function ActivityItem({ message, time }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="mt-2 w-2 h-2 rounded-full bg-blue-500" />
      <div className="flex flex-col gap-1">
        <div className="text-sm text-gray-800">{message}</div>
        <div className="text-xs text-gray-500">{time}</div>
      </div>
    </div>
  );
}

function RecentActivity() {
  const activities = [
    {
      message: "Unauthorized access attempt detected",
      time: "2 minutes ago",
    },
    {
      message: "High CPU usage on Server #12",
      time: "15 minutes ago",
    },
    {
      message: "System update completed",
      time: "1 hour ago",
    },
  ];

  return (
    <article className="flex-1 p-6 bg-white rounded-xl border border-gray-100 border-solid max-md:w-full">
      <h3 className="mb-4 text-lg font-bold text-gray-800">Recent Activity</h3>
      <div className="flex flex-col gap-4">
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            message={activity.message}
            time={activity.time}
          />
        ))}
      </div>
    </article>
  );
}

export default RecentActivity;
